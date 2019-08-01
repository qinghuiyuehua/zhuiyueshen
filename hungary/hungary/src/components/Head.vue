<template>
    <div class="head">
      <div class="top">
        <ul>
          <li class="top_one">
            <span class="top_one_span_left">
              <router-link :to="{path:'/Head'}">ele.me</router-link>
            </span>
            <span class="top_one_span_right_reg pull-right">
              <!--<router-link :to="{path:'/registe'}">注册</router-link>-->
            </span>
            <span class="top_one_span_right_load pull-right">
              <router-link  :to="{path:'/Land'}">登陆|</router-link>
            </span>
          </li>
          <li class="top_two">
            <span class="top_two_span_left">当前定位城市:</span>
            <span class="top_two_span_right pull-right">定位不准时，请在城市列表中选择</span>
          </li>
          <li class="top_three">
            <span class="top_three_left">郑州</span>
            <span class="top_three_right pull-right"> > </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Head",
      methods:{

      }
    }
</script>

<style scoped>
  .top_one{
    background:#3190e8;
    width:100%;
    font-family: Microsoft Yahei;
    position: fixed;
  }
  .top_one > .top_one_span_left{
    padding-left: .6rem;
    font-size: 1.4rem;
    color: white;
    line-height:3.9rem;
  }
  .top_one > .top_one_span_right_load, .top_one_span_right_reg{
    font-size: 1.4rem;
    color: #fff;
    line-height:3.9rem;
  }
  .top_one > .top_one_span_right_reg{
    padding-right: .6rem;
  }
  .top_two{
    font-size: .7rem;
    font-family: Microsoft Yahei;
    padding:3.9rem .9rem  0 .9rem;
    line-height:3.9rem;
  }

  .top_three{
    font-size: 1.5rem;
    padding:0 .9rem;
    font-family: Microsoft Yahei;
    border-top: .1rem solid #e4e4e4;
    border-bottom: .2rem solid #e4e4e4;
  }
  .top_three > .top_three_left{
    color:#3190e8;
    line-height: 3.9rem;
  }
  .top_three > .top_three_right{
    line-height:3.9rem;
  }

</style>
