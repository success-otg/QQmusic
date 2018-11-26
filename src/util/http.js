export const HTTP_STATUS = (() => {
  let status = {
    OK: {code: 200, text: 'OK', description: ''},
    CREATED: {code: 201, text: 'CREATED', description: ''},
    DELETED: {code: 204, text: 'DELETED', description: ''},
    NOT_MODIFIED: {code: 304, text: 'NOT MODIFIED', description: ''},
    BAD_REQUEST: {code: 400, text: 'BAD REQUEST', description: '不正确的请求信息'},
    METHOD_NOT_ALLOWED: {code: 405, text: 'METHOD NOT ALLOWED', description: '请求方法不支持'},
    UNSUPPORTED_MEDIA_TYPE: {code: 415, text: 'UNSUPPORTED MEDIA TYPE', description: '媒体类型不支持'},
    INTERNAL_SERVER_ERROR: {code: 500, text: 'INTERNAL SERVER_ERROR', description: '服务器内部错误'},
    PAGE_NOT_FOUND: {code: 404, text: 'PAGE NOT FOUND', description: '网络资源无法访问'},
    NOT_AUTHORIZED: {code: 401, text: 'NOT AUTHORIZED', description: '未经授权的访问'},
    FORBIDDEN: {code: 403, text: 'FORBIDDEN', description: '禁止访问'},
    UNPROCESSABLE_ENTITY: {code: 422, text: 'UNPROCESSABLE ENTITY', description: '422错误未返回错误信息'},
    SESSION_TIME_OUT: {code: 419, text: 'SESSION_TIME_OUT', description: '会话超时'}
  };
  status.CODES = {
    /**
     * 成功
     */
    SUCCESS: {
      200: status.OK,
      201: status.CREATED,
      204: status.DELETED,
      304: status.NOT_MODIFIED
    },
    /**
     * 程序错误或恶意攻击
     */
    PROGRAM_ERROR: {
      400: status.BAD_REQUEST,
      405: status.METHOD_NOT_ALLOWED,
      415: status.UNSUPPORTED_MEDIA_TYPE,
      500: status.INTERNAL_SERVER_ERROR
    },
    /**
     * 网络访问错误
     */
    NETWORK_ERROR: {
      404: status.PAGE_NOT_FOUND
    },
    /**
     * 权限错误
     * TODO 419未确定
     */
    AUTH_ERROR: {
      401: status.NOT_AUTHORIZED,
      403: status.FORBIDDEN,
      419: status.SESSION_TIME_OUT
    },
    /**
     * 正常交互错误
     */
    COMMUNICATION_ERROR: {
      422: status.UNPROCESSABLE_ENTITY
    }
  };
  return status;
})();
