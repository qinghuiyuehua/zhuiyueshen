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

import TwoApp from　"../components/TwoApp"
import Home from "../components/Home"
import Find from "../components/Fimd"
import Order from "../components/Order"
import Mine from "../components/Mine"
import Sort from "../components/Sort"

import Nav from "../components/Nav"
import BusinessInformation from "../components/BusinessInformation"
import BusinessDetails from "../components/BusinessDetails"

//   我的余额
import MySurplus from "../components/MySurplus"
import SurplusDescribe from "../components/SurplusDescribe"
//   我的优惠
import MyBenefit from "../components/MyBenefit"
import RedPacketDescribe from "../components/RedPacketDescribe"

//   我的积分
import MyIntegral from "../components/MyIntegral"
import IntegralDescribe from "../components/IntegralDescribe"
//   积分商城
import Integral from "../components/Integral"
//   饿了么会员卡
import MemberCenter from "../components/MemberCenter"
import MemberDescribe from "../components/MemberDescribe"
import OnlinePayment from "../components/OnlinePayment"
//   兑换会员
import UseCardNumber from "../components/UseCardNumber"
//   开发票
import WriteAnInvoice from "../components/WriteAnInvoice"
//   服务中心
import ServiceCenter from "../components/ServiceCenter"
//   下载饿了么APP
import DownloadApp from "../components/DownloadApp"


export default new Router({
  routes: [

    {path:"/",component:City},
    {path:"/city",component:City},
    {path:"/login",component:Login},
    //    进入APP   外卖(子页面-->分类)  搜索  订单  我的
    {path:"/twoapp",component:TwoApp,children:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/sort",component:Sort},
        {path:"/find",component: Find},
        {path:"/order",component:Order},
        {path:"/mine",component:Mine},

      ]},
    //   我的余额   我的优惠   我的积分
    {path:"/mysurplus",component:MySurplus},
    {path:"/surplusdescribe",component:SurplusDescribe},
    {path:"/mybenefit",component:MyBenefit},
    {path:"/redpacketdescribe",component:RedPacketDescribe},
    {path:"/myintegral",component:MyIntegral},
    {path:"/integraldescribe",component:IntegralDescribe},
    {path:"/integral",component:Integral},
    {path:"/membercenter",component:MemberCenter},
    {path:"/memberdescribe",component:MemberDescribe},
    {path:"/onlinepayment",component:OnlinePayment},
    {path:"/usecardnumber",component:UseCardNumber},
    {path:"/writeaninvoice",component:WriteAnInvoice},
    {path:"/servicecenter",component:ServiceCenter},
    {path:"/downloadapp",component:DownloadApp},


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
    {path:"/BusinessInformation",component:BusinessInformation},
    {path:"/BusinessDetails",component:BusinessDetails}
  ]
})
