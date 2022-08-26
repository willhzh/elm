import axios from 'axios'
import config from '@/config/env'

const baseUrl = config.baseUrl


// export const getData = () => {
//   // let latitude, longitude;
//   return axios.get('https://elm.cangdu.org/shopping/restaurant/1', {
//     params: {

//     }
//   })
// }

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

// 获取搜索地址
export const getCitySearch = (c_id, keyword) => {
  if (!type) type = 'search';
  return axios.get(`${baseUrl}/v1/pois?city_id=${c_id}&keyword=${keyword}&type=${type}`)
}

// 根据经纬度获取定位
export const getGeo = (address) => {
  return axios.get(`${baseUrl}/v2/pois/${address}`)
}