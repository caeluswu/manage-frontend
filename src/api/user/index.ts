//统一管理咱们项目用户相关的接口
// TODO: 修改一下url
import request from '@/utils/request'
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from './type'
//项目用户相关的请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

//登录接口
export const reqLogin = (data: loginFormData):Promise<loginResponseData> =>
  request(API.LOGIN_URL,'POST',data)
//获取用户信息
export const reqUserInfo = ():Promise<userInfoReponseData> =>
  request(API.USERINFO_URL,'GET')
//退出登录
export const reqLogout = () => request(API.LOGOUT_URL,'POST')
