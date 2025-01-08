// TODO: 测试fetch封装有什么问题
// 最好使用符合内容安全策略 (CSP)的链接而不是使用直接指向资源地址的方式来进行 fetch 的请求。
import { ElMessage } from "element-plus";
//引入用户相关的仓库
import useUserStore from "@/stores/user";

export interface IRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [key: string]: string };
  body?: BodyInit;
}

const requestWithTimeout = (url: string, options: IRequestOptions): Promise<Response> => {
  const timeout = 5000
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("请求超时"));
    }, timeout);
    fetch(url, options).then((response) => {
      clearTimeout(timeoutId);
      resolve(response);
    }).catch((error) => {
      clearTimeout(timeoutId);
      reject(error);
    })
  })
}

// 添加拦截器的 request 函数
export async function request<T>(
  url: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  data?: any ,
  options: IRequestOptions = {}
): Promise<T> {
  // 请求拦截器
  options = requestInterceptor(options);

  let response = await requestWithTimeout(url, {
    method: method || "GET",
    headers: options.headers || {
      "Content-Type": "application/json",
    },
    body: data || options.body || null,
  })

  response = responseInterceptor(response);
  return response as T;
}

function requestInterceptor(options: IRequestOptions) {
  //获取用户相关的小仓库:获取仓库内部token,登录成功以后携带给服务器
  const userStore = useUserStore();
  if (userStore.token) {
    options.headers = options.headers || {
      "Content-Type": "application/json",
    };
    options.headers["Authorization"] = `Bearer ${userStore.token}`;
  }
  //返回配置对象
  return options;
}

function responseInterceptor(response: any) {
  if (!response.ok) {
    //失败回调:处理http网络错误的
    //定义一个变量:存储网络错误信息
    let message = "";
    //http状态码
    const status = response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器出现问题";
        break;
      default:
        message = "网络出现问题";
        break;
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message,
    });
    throw new Error(`Request failed with status code ${response.status}`);
  }
  return response.json();
}


//对外暴露
export default request;
