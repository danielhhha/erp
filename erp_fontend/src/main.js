// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '../utils/api.js'
import commonUtil from '../utils/common.js'
import ElementUI from 'element-ui'
import noty from "noty"
import axios from "axios"

axios.defaults.baseURL = process.env.API_BASE
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.mixin({
  methods: {
    noty: function(config){
      new noty(config).show()
    }
  },
  data: () => ({
    api: api,
    commonUtil: commonUtil
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})