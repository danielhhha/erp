import axios from 'axios'

export function login(data) {
  return axios({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getUserInfo(params) {
  return axios({
    url: '/user/info',
    method: 'get',
    params
  })
}