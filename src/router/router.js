import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const shop = r => require.ensure([], () => r(require('../page/home/shop/shop.vue')), 'shop')
const cart = r => require.ensure([], () => r(require('../page/home/shop/cart.vue')), 'cart')
const order = r => require.ensure([], () => r(require('../page/order/order.vue')), 'order')
const search = r => require.ensure([], () => r(require('../page/search/search.vue')), 'search')
const user = r => require.ensure([], () => r(require('../page/user/user.vue')), 'user')


export default [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      keepAlive: true
    },
    children: [{
        path: '/shop',
        component: shop,
      },
      {
        path: '/cart',
        component: cart,
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: order,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: search,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      keepAlive: true
    }
  },

]