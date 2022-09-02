import axios from 'axios'

baseUrl = '111';

// 获取商铺信息
export const getRes = (id) => {
  return axios.get('restaurant')
}

// 获取城市列表
export const getCity = (type) => {
  return axios.get('city.com')
}

// 获取城市信息
export const getCityInfo = (id) => {
  return axios.get('citiesinfo')
}

// 获取筛选商铺
export const getFoodCat = () => {
  return axios.get('entry')
}

// 获取商铺列表
export const getShop = (la, lo) => {
  return axios.get('shoplist')
}

// 获取商铺列表
export const getMenu = (id) => {
  return axios.get('menu')
}


// 获取搜索地址
export const getCitySearch = (c_id, keyword) => {
  if (!type) type = 'search';
  return axios.get('search')
}

// 根据经纬度获取定位
export const getGeo = (address) => {
  return axios.get('geo.com')
}