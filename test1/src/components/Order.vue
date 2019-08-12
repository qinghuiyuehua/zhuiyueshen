<template>
    <div class="order">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">订单列表</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Order",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .order{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  .first_line{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
    width: 100%;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2.3rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }
</style>
