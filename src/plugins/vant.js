import {
  NavBar,
  Search,
  Icon,
  Swipe,
  SwipeItem,
  Rate,
  Tab,
  Tabs,
  Form,
  Field,
  Sticky,
  Lazyload,
  Card,
} from 'vant'
import Vue from 'vue';

Vue.use(NavBar);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Rate);
Vue.use(Form);
Vue.use(Field);
Vue.use(Sticky);
Vue.use(Card);
Vue.use(Lazyload);

Vue.use(Lazyload, {
  lazyComponent: true,
});