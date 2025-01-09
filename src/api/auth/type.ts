import type{ userInfo } from "../user/type";
// TODO: 修改auth数据类型

export interface ResponseData {
    code: number
    message: string
    data?: any
    total?: number
  }

//用户登录接口携带参数的ts类型
export interface loginFormData {
  username: string;
  password: string;
  code: string;
  uuid: string;
}

//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data?: userInfo;
}

// export interface logoutResponseData extends ResponseData {}



