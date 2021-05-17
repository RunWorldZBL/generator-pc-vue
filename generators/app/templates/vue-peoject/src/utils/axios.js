// 封装axios的请求，返回重新封装的数据格式
// 对错误的统一处理
import axios from 'axios'
import errorHandle from './errorHandle'

class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  // 获取axios 的配置
  getInsideConfig() {
    const config = {
      // axios开发环境和生产环境的api配置
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  // 设定拦截器
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(function (config) {
      // 请求发送之前
      return config
    }, (err) => {
      // 处理请求错误
      errorHandle(err)
      return Promise.reject(err)
    })

    // 响应拦截
    instance.interceptors.response.use((res) => {
      // 2**状态 都会触发
      // 处理响应数据
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (err) => {
      // 2**状态 之外会触发
      // 处理响应错误
      errorHandle(err)
      return Promise.reject(err)
    })
  }

  // 创建实例
  request(options) {
    // 创建一个axios实例
    const instance = axios.create()
    // 将 baseURL 以及 options 保存到变量
    const newOptions = Object.assign(this.getInsideConfig(), options)
    // 调用拦截器，参数为axios实例
    this.interceptors(instance)
    return instance(newOptions)
  }

  get(url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }

  post(url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
