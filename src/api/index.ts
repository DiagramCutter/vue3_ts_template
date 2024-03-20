import axios, { type AxiosRequestConfig } from 'axios'
import { notification } from 'ant-design-vue'

import 'ant-design-vue/lib/message/style/index.css'

interface DIYRequestConfig extends AxiosRequestConfig {
  interceptors?: DIYRequestConfig
  headers?: any
}

const baseURL = import.meta.env.VITE_APP_AXIOS_BASEURL

axios.defaults.withCredentials = true

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000 // 设置超时时间为10s
})

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // 为请求增加公共的token
    const token = localStorage.getItem('ssoToken')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  async (error) => {
    return await Promise.resolve(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  async (response) => {
    if (response.status === 200) {
      return await Promise.resolve(response)
    } else {
      notification.error({
        message: '接口返回错误',
        description: JSON.stringify(response)
      })
      return await Promise.reject(response)
    }
  },
  async (error) => {
    if (error.response.status === 401) {
      setTimeout(() => {
        window.location.href = '/login?status=offline'
      }, 100)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const get = (url: string, params: object): any => {
  // console.log("get");
  return new Promise((resolve, reject) => {
    service({
      url,
      method: 'get',
      params
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const post = (url: string, params: object, fileType?: any): any => {
  return new Promise((resolve, reject) => {
    service({
      url,
      method: 'post',
      data: params,
      responseType: fileType
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export const uploadFile = (url: string, data: object): any => {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
