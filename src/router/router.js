import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')),'home')
const shop = r => require.ensure([], () => r(require('../page/shop/shop.vue')),'shop')
const order = r => require.ensure([], () => r(require('../page/order/order.vue')),'order')
const search = r => require.ensure([], () => r(require('../page/search/search.vue')),'search')
const user = r => require.ensure([], () => r(require('../page/user/user.vue')),'user')


export default [{
  path: '/',
  component: App,
  children:[
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
  ]
}
]

