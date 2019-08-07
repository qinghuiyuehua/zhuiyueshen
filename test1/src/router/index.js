import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from "../components/login"
import City from  "../components/city"
import searchPage from '../components/SearchPage'
import Person from "../components/Person"
import UpdateName from "../components/UpdateName"
import EditAddress from "../components/EditAddress"
import AddAddress from "../components/AddAddress"
import SearchAddress from "../components/SearchAddress"
import UpdatePassword from "../components/UpdatePassword"

import Home from "../components/Home"
import Find from "../components/Fimd"
import Order from "../components/Order"
import Mine from "../components/Mine"
import Sort from "../components/Sort"
import Nav from "../components/Nav"

export default new Router({
  routes: [
    {path:"/",component:City},
    {path:"/city",component:City},
    {path:"/login",component:Login},
    // {path:"/",redirect:"/home"},
    {path:"/home",component:Home},
    {path:"/find",component: Find},
    {path:"/order",component:Order},
    {path:"/mine",component:Mine},
    {path:"/sort",component:Sort},
    {path:"/SearchPage",component: searchPage,name:"xv"},
    {path:"/",component:City,name:"city"},
    {path:"/login",component:Login},
    {path:"/person",component:Person,name:"person"},
    {path:"/updatename",component:UpdateName,name:"updatename"},
    {path:"/mine",component:Mine,name:"mine"},
    {path:"/editaddress",component:EditAddress,name:"editaddress"},
    {path:"/addaddress",component:AddAddress,name:"addaddress"},
    {path:"/searchaddress",component:SearchAddress,name:"searchaddress"},
    {path:"/updatepassword",component:UpdatePassword,name:"updatepassword"},
  ]
})
