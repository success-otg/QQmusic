/**
 * Created by sailiting on 2018/5/3.
 */
import axios from 'axios'
import {HTTP_STATUS} from './http'

let host
if (__DEBUG__) {
  host = __config.dev.API_HOST
} else {
  host = __config.Default.API_HOST ? __config.Default.API_HOST : window.location.origin
}

// axios 配置
axios.defaults.timeout = 2000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = host
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  return config
}, error => {
  loadinginstace.close()
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  if (HTTP_STATUS.CODES.SUCCESS[res.status]) {
    if (res.data.retCode !== '0' && !res.config.hideCodeError) {
      let msg = res.data.retMsg || '数据获取失败'
      // ddAlert(errorMsg, '提示', '确定')
    }
    return res
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  let errorMessage = (error) => {
    let errorMsg = ''
    if (error.response) {
      if (HTTP_STATUS.CODES.NETWORK_ERROR[error.response.status]) {
        errorMsg = HTTP_STATUS.CODES.NETWORK_ERROR[error.response.status].description
      } else if (HTTP_STATUS.CODES.PROGRAM_ERROR[error.response.status]) {
        errorMsg = HTTP_STATUS.CODES.PROGRAM_ERROR[error.response.status].description
      } else if (HTTP_STATUS.CODES.COMMUNICATION_ERROR[error.response.status]) {
        errorMsg = HTTP_STATUS.CODES.COMMUNICATION_ERROR[error.response.status].description
      } else {
        errorMsg = JSON.stringify(error.response)// 未定义的其他非常用错误
      }
    } else {
      errorMsg = JSON.stringify(error)
    }
    // ddAlert(errorMsg, '提示', '确定')
  }
  errorMessage(error)
  
  return Promise.reject(error)
})
