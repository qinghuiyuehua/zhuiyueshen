<template>
    <div class="nav" >
      <div class="row">

        <span span="6">
        <router-link :to="{path:'/home'}">
            <a href="###" class="home_p el-icon-eleme" :class="{changeStyle:key == 1}" @click="changeBtn(1)">
            <p>外卖</p>
            </a>
        </router-link>
        </span>

        <span span="6">
      <router-link :to="{path:'/find'}">
        <a href="###" class="find_p el-icon-discover" :class="{changeStyle:key == 2}" @click="changeBtn(2)">
          <p>搜索</p>
        </a>
      </router-link>
        </span>

        <span span="6">
      <router-link :to="{path:'/order'}">
         <a href="###" class="order_p el-icon-bank-card" :class="{changeStyle:key == 3}" @click="changeBtn(3)">
            <p>订单</p>
         </a>
      </router-link>
        </span>

        <span span="6">
      <router-link :to="{path:'/mine'}">
         <a href="###" class="mine_p el-icon-user" :class="{changeStyle:key == 4}" @click="changeBtn(4)">
           <p>我的</p>
         </a>
      </router-link>
        </span>

      </div>
    </div>
</template>

<script>
    export default {
      name: "Nav",
      data(){
        return{
          key:'',
        }
      },
      methods:{
        changeBtn(num) {
          this.key = num;
        },
      },
      //  外卖页面显示时，给外卖图标设置颜色
      created(){
        this.changeBtn(1);
      }
    }
</script>

<style scoped>
  .nav{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0rem;
    z-index: 8;
    border-top: 0.05rem solid gainsboro;
  }
  .row{
    height: 4rem;
    background: white;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .row > span{
    display: inline-block;
    text-align: center;
    width: 24%;
  }
  a{
    text-decoration: none;
  }
  .home_p, .find_p, .order_p, .mine_p{
    font-size: 2.5rem;
    margin-top: 0.5rem;
    color: #333;
    font-weight: 200;
  }
  p{
    font-size: 0.7rem;
    color:black;
    background:white;
    margin-top:0.1rem;
    margin-bottom: 0.5rem;
  }
  .changeStyle{
    color: blue;
  }
</style>
