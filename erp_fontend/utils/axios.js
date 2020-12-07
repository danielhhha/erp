import axois from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axois.create({
  baseURL: process.env.VUE_APP_API_BASE, // api 的 base_url
  timeout: 120000 // 请求超时时间,
})

service.defaults.baseURL = process.env.VUE_APP_API_BASE
console.log(process.env.VUE_APP_API_BASE)
console.log(process.env)

// request拦截器设置
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json' // 请求的数据格式为 json
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  function(response){
      return response
  },
  async function(error){
      if(error.response && error.response.status === 401){
          throw new Error("user not logged in")
      }
      if (error.request.responseType === "blob" && error.response && error.response.data instanceof Blob){
          if (error.response.data.type.toLowerCase() === "application/json"){
              error.response.data = JSON.parse(text)
              throw error
          }
      }
      throw error
  }
  
)

export default service