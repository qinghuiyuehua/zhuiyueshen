<template>
    <div class="nav">
      <van-row class="row">

        <van-col span="6">
        <router-link :to="{path:'/home'}">
            <a href="###" class="home_p el-icon-eleme" >
              <p>外卖</p>
            </a>
        </router-link>
      </van-col>

        <van-col span="6">
      <router-link :to="{path:'/find'}">
        <a href="###" class="find_p el-icon-discover">
          <p>搜索</p>
        </a>
      </router-link>
        </van-col>

        <van-col span="6">
      <router-link :to="{path:'/order'}">
         <a href="###" class="order_p el-icon-bank-card">
            <p>订单</p>
         </a>
      </router-link>
        </van-col>

        <van-col span="6">
      <router-link :to="{path:'/mine'}">
         <a href="###" class="mine_p el-icon-user">
           <p>我的</p>
         </a>
      </router-link>
        </van-col>

      </van-row>

      <router-link :to="{path:'/sort'}"></router-link>
    </div>
</template>

<script>
    export default {
      name: "Nav",
      methods:{
        changeC(){

        }
      }
    }
</script>

<style scoped>
  .nav{
    position:fixed;
    left:0;
    right:0;
    bottom:0rem;
    text-align: center;
    border-top:0.05rem solid gainsboro;
  }
  .row{
    position:relative;
    height:4rem;
    background:white;
  }
  a{
    position:absolute;
    text-decoration: none;
    text-align: center;
  }
  .home_p, .find_p, .order_p, .mine_p{
    font-size:2.5rem;
    background:white;
    margin-top:0.5rem;
    color: #333;
    font-weight:200;
    margin-left:-1rem;
  }

  p{
    font-size: 0.7rem;
    color:black;
    background:white;
    margin-top:0.1rem;
    margin-bottom: 0.5rem;
  }

</style>
