import Vue from 'vue'
import Router from 'vue-router'

import Login from "../components/login"
import City from  "../components/city"
import searchPage from '../components/SearchPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:City},
    {path:"/login",component:Login},
    {path:"/SearchPage",component: searchPage,name:"xv"}
  ]
})
