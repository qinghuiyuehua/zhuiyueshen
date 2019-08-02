import Vue from 'vue'
import Router from 'vue-router'

import Login from "../components/login"
import City from  "../components/city"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:City},
    {path:"/login",component:Login}
  ]
})
