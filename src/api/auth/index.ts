
// TODO: 修改一下url
import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  ResponseData
} from './type'
//项目用户相关的请求地址
enum API {
  LOGIN = '/api/auth/login',
  LOGOUT = '/api/auth/logout',
  TESTLOGIN = '/api/auth/testLogin',
  GENERATE = '/api/auth/generate',
}

export const generateCode = (uuid?: number) => {
  return request(API.GENERATE+'?uuid='+uuid,'GET')
}

//登录接口
export const reqLogin = (data: loginFormData):Promise<loginResponseData> =>
  request(API.LOGIN,'POST',data)

//退出登录
export const reqLogout = ():Promise<ResponseData> => request(API.LOGOUT,'POST')

export const testLogin = (query?: number):Promise<ResponseData> => {
    return request(API.TESTLOGIN,'POST',{query})
}
