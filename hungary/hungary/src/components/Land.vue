<template>
    <div class="land">
      <div class="land_head">
        <span class="pull-left"> < </span>
        <span class="password_land">密码登陆</span>
      </div>

      <div class="land_input">
        <ul>
          <li><input type="text" placeholder="账号"></li>
          <li><input type="text" placeholder="账号"></li>
          <li></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Land"
    }
</script>

<style scoped>
  .land_head{
    background:dodgerblue;
    width:100%;
    height:4rem;
    text-align: center;
  }
  .pull-left{
    padding-left: .6rem;
  }
  .pull-left, .password_land{
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    font-family: Microsoft Yahei;
    line-height: 4rem;
  }

</style>
