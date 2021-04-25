import Vue from 'vue'
import md5 from 'js-md5'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

import { Button , Form, Field, Toast, Icon, Grid, GridItem, AddressList ,AddressEdit,Swipe,SwipeItem,SwipeCell} from 'vant'

Vue.use(Button)
.use(Form)
.use(Field)
.use(Toast)
.use(Icon)
.use(GridItem)
.use(Grid)
.use(AddressList)
.use(AddressEdit)
.use(Swipe)
.use(SwipeItem)
.use(SwipeCell)
Vue.prototype.$md5 = md5
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
