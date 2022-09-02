const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const shop = r => require.ensure([], () => r(require('../page/shop/shop.vue')), 'shop')
const cart = r => require.ensure([], () => r(require('../page/shop/cart.vue')), 'cart')
const order = r => require.ensure([], () => r(require('../page/order/order.vue')), 'order')
const search = r => require.ensure([], () => r(require('../page/search/search.vue')), 'search')
const user = r => require.ensure([], () => r(require('../page/user/user.vue')), 'user')
const login = r => require.ensure([], () => r(require('../page/user/login.vue')), 'login')


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
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop,
  },
  {
    path: '/order',
    name: 'order',
    component: order,
  },
  {
    path: '/search',
    name: 'search',
    component: search,
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      keepAlive: true
    },

  },
  {
    path: '/login',
    component: login,
  },

]