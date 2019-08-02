<template>
    <div class="login">
      <van-nav-bar id="one"
        title="密码登录"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <!--账号-->
      <section class="one">
        <span>
          <input type="text" placeholder="账号">
        </span>
      </section>
      <hr>
      <!--密码-->
      <section class="one">
        <span>
          <input :type="checked?shows1:shows2" placeholder="密码">
        </span>
        <span class="move">
          <span class="move1">abc...</span>
          <van-switch
            v-model="checked"
            active-color="#4cd964"
            inactive-color="#ccc"
          />
        </span>
      </section>
      <hr>
      <!--验证码-->
      <section class="one">
        <span>
          <!--对验证码字数做限制-->
          <input type="text" placeholder="验证码"oninput="if(value.length>4)value=value.slice(0,4);"/>
        </span>
        <span>
          <span  class="move3">
            <img :src="code1.code" alt="">
          </span>
          <span class="move4" @click="Getagain">
            <p>看不清</p>
            <p>换一张</p>
          </span>
        </span>
      </section>

      <section class="move5">
        <p>温馨提示：未注册过的账号，登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </section>

      <section >
        <van-button type="primary" size="large" @click="sends">提交</van-button>
      </section>

      <section class="pull-right">
        <a href="###">重置密码</a>
      </section>
    </div>


</template>

<script>
    import Vue from "vue";
    export default {
        name: "login",
        data() {
        return {
          checked: false,
          shows1:'text',
          shows2:'password',
          code1:[],
          code2:""
        };
      },
      methods:{
        onClickLeft() {
          Toast('返回');
        },
        onClickRight() {
          Toast('按钮');
        },
        Getagain(){
          Vue.axios.post("https://elm.cangdu.org/v1/captchas").then((result)=>{
            console.log(result);
            this.code1 = result.data;
          }).catch((error)=>{
            console.log(error);
          });
        },
        sends(){
          //  登录接口
          Vue.axios.post("https://elm.cangdu.org/v2/login").then((result)=>{
            console.log(result);
            this.code1 = result.data;
          }).catch((error)=>{
            console.log(error);
          });
        }
      },
      created(){
        //  验证码接口
        Vue.axios.post("https://elm.cangdu.org/v1/captchas").then((result)=>{
          console.log(result);
          this.code1 = result.data;
        }).catch((error)=>{
          console.log(error);
        });

      }
    }
</script>

<style scoped>
  .login{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
#one{
  background: #3190e8;
}
.van-nav-bar .van-icon {
  color: white;
}

.van-nav-bar__title {
  color: white;
  font-weight: 700;
  font-size: 2rem;
}
hr{
  height: 0.01rem;
  margin: 0;
  padding: 0;
}
  .one{
    width: 100%;
    height: 4rem;
    background: white;
  }
  input{
    border: none;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
  input:focus{
    border:0.1rem solid gold;
  }
  .van-switch {
    margin-top: 0.5rem;
  }
  .move{
    position: absolute;
  }
  .move1{
    position: absolute;
    top:0.8rem;
    left: 1rem;
    z-index: 1;
    font-size: 2rem;
  }
  .move3{
    position: absolute;
    right:5rem;
  }
  .move4{
    position: absolute;
    right: 1rem;
  }
   p:last-child {
    color: blue;
  }
  .move5 p{
    color: red;
  }
  .move4{

  }
</style>
