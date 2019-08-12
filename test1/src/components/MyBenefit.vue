<template>
    <div class="mybenefit">
      <!--  上部蓝色框  -->
      <div class="head">
        <!--  头部  -->
        <div class="first_line">
          <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
          <span class="title_name">我的优惠</span>
        </div>
        <!--  红包  商家代金券  -->
        <van-row class="two_line">
          <van-col span="12" class="text-center" >
            <span class="two_line_name":class="{two_line_name_click:key ==1}" @click="selectName(1)">红包</span></van-col>
          <van-col span="12" class="text-center">
            <span class="two_line_name" :class="{two_line_name_click:key ==2}" @click="selectName(2)">商家代金券</span></van-col>
        </van-row>
      </div>
      <!--  红包内容 -->
      <div class="red_packet">
        <span class="red_packet_first_line">
          <span class="due">有<span class="red_packet_number">0</span>个红包即将到期</span>
        <router-link :to="{path:'/redpacketdescribe'}">
          <span class="surplus_text pull-right">红包说明</span>
          <van-icon name="question" class="question_icon pull-right"/>
        </router-link>
        </span>

      </div>


      <!--  footer -->
      <van-row class="footer">
        <!--<router-link>-->
          <van-col span="12" class="left_border">
            <span class="footer_name_left">兑换红包</span>
          </van-col>
        <!--</router-link>-->

        <!--<router-link>-->
          <van-col span="12">
            <span class="footer_name_right">推荐有奖</span>
          </van-col>
        <!--</router-link>-->

      </van-row>
    </div>
</template>

<script>
    export default {
      name: "MyBenefit",
      data(){
        return{
          key:'',
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
        selectName(id){
          this.key = id;
        }
      },
      created(){
        this.key = 1;
      }
    }
</script>

<style scoped>
  .mybenefit{
    background:  #f5f5f5;
    height: 100%;
  }
  .head{
    background: #3190e8;
    width: 100%;
  }
  .first_line{
    line-height: 4rem;
    text-align: center;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    text-align: center;
  }
  .two_line{
    background: white;
    font-size: 1.5rem;
  }
  .two_line_name{
    line-height: 4rem;
    padding-bottom: 0.3rem;
  }
  .two_line_name_click{
    color: #3190e8;
    border-bottom: 0.2rem solid #3190e8;
  }
  /*  红包  */
  .red_packet{
    padding: 0 1rem 0 1rem;
  }
  .red_packet_number{
    color: #ff5f3e;
    margin: 0 0.3rem 0 0.3rem;
  }
  .red_packet_first_line{
    line-height: 4rem;
  }
  .due{
    line-height: 4rem;
  }
  .question_icon, .question_icon{
    line-height: 4rem;
    color: #3190e8;
  }
  .question_icon{
    margin-right: 0.3rem;
    font-size: 1.7rem;
  }



  /*   footer  */
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 4rem;
    text-align: center;
    font-size: 2rem;
    background: white;
  }
  .left_border{
    border-right: 0.05rem solid rgb(245, 245, 245);
  }
</style>
