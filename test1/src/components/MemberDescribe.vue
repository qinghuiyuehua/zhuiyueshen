<template>
    <div class="member_describe">
      <!--  头部  -->
      <div class="first_line">
        <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
        <span class="title_name">我的优惠</span>
      </div>
      <!--  main  -->
      <div class="main">
        <span class="p1">
          <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
        购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
        注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
        </p>
        </span>

        <h3>Q1: 特权介绍</h3>
        <ul>
          <li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
          <li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
          <li>更多特权，敬请期待！</li>
        </ul>
        <h3>Q2: 资费介绍</h3>
        <ul>
          <li>饿了么会员卡：20元</li>
        </ul>
        <h3>Q3: 使用说明</h3>
        <p>当用户满足以下任一条件，会员服务自动失效：</p>
        <ol class="ol_1">
          <li>自绑定之日起超过31天；</li>
          <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
        </ol>
        <h3>Q4: 购卡说明</h3>
        <ul>
          <li>在线购买：饿了么App&gt;我的&gt;饿了么会员卡</li>
        </ul>
        <h3>Q5: 温馨提示</h3>
        <ul>
          <li>用户在当前会员服务失效前，无法购买新卡。</li>
          <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "MemberDescribe",
      methods:{
        goBack(){
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .member_describe{
    /*width: 100%;*/
    /*height: 100%;*/
    /*animation: fadeInRight 0.2s linear forwards;*/
  }
  /*  头部  */
  .first_line{
    line-height: 4rem;
    text-align: center;
    background: #3190e8;
    position: fixed;
    z-index: 10;
    width: 100%;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  /*  main  */
  .main{
    padding: 5rem 1rem 1rem 1rem;
  }
  .p1{
    display: inline-block;
    width: 72%;
    margin-left: 14%;
    text-align: left;
  }
  h3{
    font-size: 2rem;
  }
  .ol_1{
    margin-left: 14%;
  }
</style>
