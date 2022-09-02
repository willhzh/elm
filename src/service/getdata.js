import axios from 'axios'
import config from '@/config/env'
import {
  getStore
} from '@/config/mUtils'
axios.defaults.withCredentials = true;
const baseUrl = config.baseUrl


// 获取商铺信息
export const getRes = (id) => {
  return axios.get(`${baseUrl}/shopping/restaurant/${id}`)
}

// 获取城市列表
export const getCity = (type) => {
  return axios.get(`${baseUrl}/v1/cities?type=${type}`)
}

// 获取城市信息
export const getCityInfo = (id) => {
  return axios.get(`${baseUrl}/v1/cities/${id}`)
}

// 获取筛选商铺
export const getFoodCat = () => {
  return axios.get(`${baseUrl}/v2/index_entry`)
}

// 获取商铺列表
export const getShop = (la, lo) => {
  return axios.get(`${baseUrl}/shopping/restaurants?latitude=${la}&longitude=${lo}`)
}

// 获取商铺列表
export const getMenu = (id) => {
  return axios.get(`${baseUrl}/shopping/v2/menu?restaurant_id=${id}`)
}


// 获取搜索地址
export const getCitySearch = (c_id, keyword) => {
  if (!type) type = 'search';
  return axios.get(`${baseUrl}/v1/pois?city_id=${c_id}&keyword=${keyword}&type=${type}`)
}

// 根据经纬度获取定位
export const getGeo = (address) => {
  return axios.get(`${baseUrl}/v2/pois/${address}`)
}

// 根据经纬度获取定位
export const getUser = () => {
  return axios.get(`${baseUrl}/v1/user/`)
}

// 获取验证码
export const getCode = () => {
  return axios.post(`${baseUrl}/v1/captchas/`)
}

export const accountLogin = (username, password, code) => {
  axios.defaults.withCredentials = true;
  return axios.post(`${baseUrl}/v2/login`, {
    username: username,
    password: password,
    captcha_code: code
  })
}