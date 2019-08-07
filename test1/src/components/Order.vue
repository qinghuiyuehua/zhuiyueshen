<template>
    <div class="order">
      <div class="head">
        <i class="el-icon-arrow-left arrow-left"></i>
        <span class="order_title">订单列表</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style scoped>
  .head{
    width:100%;
    line-height:3.5rem;
    background-color: #3190e8;
    z-index:100;
  }
  .arrow-left{
    color:white;
    font-size:1.5rem;
    margin: 0.8rem 0 0 1rem;
    background-color: #3190e8;
  }
  .order_title{
    color:white;
    font-size:1.5rem;
    margin: 0.8rem 0 0 8rem;
    background-color: #3190e8;
  }
</style>
