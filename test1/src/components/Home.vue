<template>

    <div class="home">
      <!--头部-->
      <div class="head">
        <van-icon name="search" class="search_img"/>
        <div class="address">{{cityPage21.name}}</div>
        <van-icon name="contact" class="user_img"/>
      </div>

      <!--  图片url 和 图片title，从同一个数组 navArr 中获取-->
      <swiper :options="swiperOption"  class="swiper-container">
        <!--  0-7 分类  -->
               <swiper-slide>
                 <van-row class="nav_pic">
                   <a  v-for="title in navArr0_7" @click="jump(title)">
                     <van-col span="6" class="title_col">
                 <img class="title_img" :src= "'https://fuss10.elemecdn.com' + title.image_url">
                 <p class="title_p">{{title.title}}</p>
                     </van-col>
                   </a>
                 </van-row>
               </swiper-slide>

        <!--  8-15 分类  -->
               <swiper-slide>
                 <van-row class="nav_pic">
                   <a v-for="title in navArr8_15" @click="jump(title)">
                     <van-col span="6" class="title_col">
                 <img class="title_img" :src= "'https://fuss10.elemecdn.com' + title.image_url">
                 <p class="title_p">{{title.title}}</p>
                     </van-col>
                   </a>
                 </van-row>
               </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>

      <!-- 中间 灰色条 -->
      <div class="slice"></div>
      <!--  商家 列表-->
      <div class="food">
        <div class="icon">
          <van-icon class="icon_img" name="shop-o" />
          <span class="icon_word">附近商家</span>
        </div>
        <div class="inf" >

          <van-row>
            <div class="infA" v-for="img in infImgArr" @click="click21(img)">
              <!--第一行-->
            <img class="infImg pull-left" :src="'http://elm.cangdu.org/img/'+ img.image_path">
            <span class="infBrand">品牌</span>
            <span class="infName">{{img.name}}</span>
            <span class="bzp pull-right">{{supportsArr2.icon_name}}</span>
            <span class="bzp pull-right">{{supportsArr1.icon_name}}</span>
            <span class="bzp pull-right">{{supportsArr0.icon_name}}</span>
            <br>
              <!--第二行-->
              <van-rate class="star"
                v-model="img.rating"
                size="1"
                readonly
                score-template="{value}">
              </van-rate>
            <span class="rating">{{img.rating}}</span>
            <span class="recent_order_num">月售{{img.recent_order_num}}单</span>
            <span class="zsd pull-right">准时达</span>
            <span class="delivery_mode_text pull-right">{{img.delivery_mode.text}}</span>
            <br>
            <!--第三行-->
              <span class="float_minimum_order_amount">￥{{img.float_minimum_order_amount}}起送/配送费约￥{{img.float_delivery_fee}}</span>

              <span class="forty_minute pull-right">{{img.order_lead_time}}</span>
              <span class="ten_km pull-right">{{img.distance}} /</span>
            </div>
          </van-row>

        </div>
      </div>
    </div>

</template>
<script>
import Vue from "vue"
    export default {
      name: "Home",
      data(){
        return{
          navArr0_7: [],
          navArr8_15: [],
          navArrTitle: [],
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
          },
          infImgArr: [],
          supportsArr0: '',
          supportsArr1: '',
          supportsArr2: '',
          IconNameArr:[],
          cc2:"",
          cityPage21:{},
          cityLatitude:[],
          cityLongitude:[],
        }
      },
      created(){
        //  获取  轮播图 信息
        Vue.axios.get("https://elm.cangdu.org/v2/index_entry").then((result)=>{
          // console.log(result.data);
          this.navArr0_7 = result.data.slice(0,8);
          this.navArr8_15 = result.data.slice(8,16);
        }).catch((error)=>{
          console.log(error)
        });
        //  获取  商家信息
        //   获取上个页面传来的   城市经纬度
        this.cityLatitude = localStorage.getItem('latitude');
        this.cityLongitude = localStorage.getItem('longitude');

        Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.cityLatitude}&longitude=${this.cityLongitude}`).then((result)=>{
          result.data.forEach( v => {
            // console.log(result.data);
            this.infImgArr = result.data;
          })
          result.data.forEach( v=>{
            // console.log(v.distance);
            this.supportsArr0 = v.supports[0];
            this.supportsArr1 = v.supports[1];
            this.supportsArr2 = v.supports[2];
          })
        }).catch((error)=>{
          console.log(error)});
        let geo=localStorage.getItem('geohash');
        this.cc2 = JSON.parse(geo);
        // 动态获取城市名
        let url2 = "https://elm.cangdu.org/v2/pois/"+this.cc2;
        Vue.axios.get(url2).then((result)=>{
          // console.log(result.data);
          this.cityPage21=result.data;
        }).catch((error)=>{
          console.log(error);
        });
      },
      methods:{
        jump(title){
          this.$router.push({path:"/sort",query:{navArrTitle: title.title}});
        },
        click21(v){
          this.$router.push({path:"/BusinessInformation",query:{id: v.id}});
        }
      },
    }
</script>

<style scoped>
  /* 头部 CSS */
  .head{
    width:100%;
    height:4rem;
    background-color: #3190e8;
    position:fixed;
    z-index:100;
  }
  .search_img{
    color:white;
    font-size:3rem;
    margin:0.5rem 0 0 1rem;
    background-color: #3190e8;
  }
  .address{
    text-align:center;
    color:white;
    font-size:2rem;
    position:absolute;
    top: 0.9rem;
    left:7rem;
    background-color: #3190e8;
    width: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user_img{
    color:white;
    font-size:3rem;
    margin: 1rem 0.1rem 0 23rem;
    background-color: #3190e8;
  }

  /* 轮播图 CSS */
  .nav_pic{
    padding-top:3rem;
    text-align: center;
    height:21rem;
    overflow: hidden;
  }
  .title_img{
    margin-top:1.5rem;
    width:55%;
  }
  .title_p{
    color:black;
  }
  .swiper-pagination{
    text-align: center;
  }

  /*  中间灰色条 CSS*/
  .slice{
    width:100%;
    height: 0.7rem;
    background-color: #f5f5f5;
    border-top: 0.05rem solid gainsboro;
    border-bottom: 0.05rem solid gainsboro;
  }

  /*  商家 信息*/
  .icon{
    padding-left: 1rem;
  }

  /* 第一行*/
  .icon_img,.icon_word{
    line-height: 3rem;
    vertical-align: middle;
  }
  .inf{
    margin-bottom: 3rem;
  }
  .infA{
    display:block;
    border-bottom: 0.05rem solid gainsboro;
    height: 8rem;
    padding: 1.5rem 0.7rem 8rem 0.7rem;
  }
  .infImg{
    width:5.5rem;
    height:5.5rem;
    margin-right:1rem;
  }
  .infBrand{
    display: inline-block;
    font-size: 0.5rem;
    font-weight:600;
    line-height: 1.2rem;
    color: #333;
    background-color: #ffd930;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
    width:2.3rem;
    text-align: center;
  }
  .infName{
    color: #333;
    padding-top: 0.01rem;
    font-weight: 700;
  }
  .bzp{
    font-size: 1.1rem;
    color: #999;
    border: 0.1rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: 0.1rem;
    font-weight: 400;
  }

  /*  第二行 */
  .star{
    display: inline-block;
    font-size: 0.4rem;
  }
  .rating{
    font-size: 1.1rem;
    color: #ff9a0d;;
    margin: 0 0.2rem;
  }
  .recent_order_num{
    font-size: 1.1rem;
    transform: scale(0.9);
    color: #666;
  }
  .delivery_mode_text{
    color: #fff;
    background-color: #3190e8;
    border: 0.025rem solid #3190e8;
    font-size: 1rem;
    font-weight: 400;
    transform:scale(0.7);
    padding: 0.2rem 0.1rem 0;
    border-radius: 0.2rem;
    margin-right: -1rem;
  }
  .zsd{
    color: #3190e8;
    border: 0.05rem solid #3190e8;
    font-weight: 400;
    transform:scale(0.7);
    border-radius: 0.2rem;
    padding: 0.1rem 0.1rem 0;
    font-size: 1rem;
  }

  /*  第三行 */
  .float_minimum_order_amount{
    font-size: 1rem;
    color: #666;
    line-height:1rem;
  }
  .ten_km{
    font-size: 1rem;
    margin-top: 0.07rem;
    color: #666;
  }
  .forty_minute{
    font-size: 1rem;
    margin-top: 0.07rem;
  }
  .infA > span{
    display: inline-block;
    margin-bottom: 0.7rem;
  }

</style>
