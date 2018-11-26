// 根据配置打包

const defaultConfig = require('../config/configs')
const cloneDeep = require('lodash/cloneDeep')
const merge = require('lodash/merge')
const yargs = require('yargs')
yargs.array('MODULE')

const setConfig = () => {
  let myConfig = {}
  let argvParams = cloneDeep(yargs.argv)
  myConfig.type = argvParams._.length ? argvParams._[0] : ''
  delete argvParams._
  delete argvParams.$0
  let scripts = JSON.parse(process.env.npm_config_argv).original
  myConfig.node_env = scripts[1]
  
  merge(myConfig, defaultConfig.Default)
  if (myConfig.node_env === 'dev') {
    merge(myConfig, defaultConfig.DEV)
  }
  merge(myConfig, argvParams)
  
  //数据纠正
  if (argvParams.MODULE) {
    myConfig.MODULE = argvParams.MODULE
  } else if (myConfig.node_env === 'dev') {
    myConfig.MODULE = defaultConfig[myConfig.node_env].MODULE
  }
  
  global.myConfig = myConfig
}

//初始化
setConfig()

let writeConfig = require('./writeConfig')

writeConfig.then(() => {
  if (myConfig.node_env === 'dev') {
    require('./dev-server')
  } else {
    require('./build')
  }
})
