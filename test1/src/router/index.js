import Vue from 'vue'
import Router from 'vue-router'

import Login from "../components/login"
import City from  "../components/city"
import Person from "../components/Person"
import UpdateName from "../components/UpdateName"
import Mine from "../components/Mine"


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:City,name:"city"},
    {path:"/login",component:Login},
    {path:"/person",component:Person,name:"person"},
    {path:"/updatename",component:UpdateName,name:"updatename"},
    {path:"/mine",component:Mine,name:"mine"},
  ]
})
