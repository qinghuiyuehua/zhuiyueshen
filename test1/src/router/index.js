import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from "../components/login"
import City from  "../components/city"

import Home from "../components/Home"
import Find from "../components/Fimd"
import Order from "../components/Order"
import Mine from "../components/Mine"
import Sort from "../components/Sort"

export default new Router({
  routes: [
    {path:"/",component:City},
    {path:"/login",component:Login},
    // {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/find",component: Find},
    {path:"/order",component:Order},
    {path:"/mine",component:Mine},
    {path:"/sort",component:Sort},
  ]
})
