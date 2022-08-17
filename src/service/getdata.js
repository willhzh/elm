import axios from '@/service/axios'

export const getData = () => {
  return axios.request({
    url: 'https://elm.cangdu.org/v1/cities',
    method: 'get',
    params: {
      type: 'guess'
    }
  }).then((response) => {
    console.log(response);
  })
}