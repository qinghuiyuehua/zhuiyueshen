import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Header from "../components/Header"
import Head from "../components/Head"
import HotCity from "../components/HotCity"
import GroupCity from "../components/GroupCity"
import Login from "../components/Login"

export default new Router({
  routes: [
    {path:"/",redirect:"/Header"},
    {path:"/Header",component: Header,children:[
        {path:"",redirect:"/Head"},
        {path:"/Head",components:
            {default:Head,
              hc:HotCity,
              gc:GroupCity,
            }},
        {path:"/Login",component:Login},
      ]}
  ]
})
