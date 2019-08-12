<template>
    <div class="find">
      <div class="head">
        <i class="el-icon-arrow-left arrow-left"></i>
        <span class="search_find">搜索</span>
      </div>

      <el-row class="input_btn">
        <input type="search" placeholder="请输入商家或美食名称" class="search_input" v-model="pageTwo">
        <input type="submit" class="search_submit" @click="inputClick2">
      </el-row>
      <div v-if="p2==='1'">
        <h4>搜索历史</h4>
        <ul>
          <li v-for="page6 in pageTwo1">
            <span>{{page6}}</span>
          </li>
        </ul>
      </div>
      <div> 
        <h4 class="business">商家</h4>
        <ul class="ul">
          <li v-for="(page5,index) in cityPage5" class="quan">
            <div class="left pull-left"><img :src="'http://elm.cangdu.org/img/'+page5.image_path" alt="">
            </div>
            <div class="right">
              <span>{{page5.name}}</span>
              <span>支付</span>
              <p>月售{{page5.recent_order_num}}单</p>
              <p class="three">{{page5.float_minimum_order_amount}}元起送/距离{{page5.distance}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Vue from "vue";
    export default {
      name: "Find",
      data() {
        return {
          input: '',
          pageTwo:"",
          pageTwo1:[],
          cc3:"",
          cityPage5:[],
          p1:"1",
          p2:"2"
        }
      },
      created(){
        let geohash=localStorage.getItem('geohash');
        this.cc3 = JSON.parse(geohash);
        console.log(this.cc3,'接收到的geohash值');
      },
      methods:{
        inputClick2(){
          // this.p1='2';
          // this.p2='2';
          let url3 = "https://elm.cangdu.org/v4/restaurants?geohash="+this.cc3+"&keyword="+this.pageTwo;
          console.log(url3);
          Vue.axios.get(url3).then((result)=>{
            console.log(result.data,'根据geohash值获取餐馆信息');
            this.cityPage5=result.data;
            console.log(this.cityPage5)
            // this.cityPage5.forEach((v,index)=>{
            //   // console.log(v);
            // })
          }).catch((error)=>{
            console.log(error);
          });
         // if (this.pageTwo!=null){
         //   let m = JSON.stringify(this.pageTwo);
         //   console.log(m);
         //   let pageTwo=localStorage.getItem('pageTwo');
         //   if (pageTwo==null){
         //     localStorage.setItem('pageTwo',m);
         //   } else {
         //     let arr1 = localStorage.getItem('pageTwo');
         //     if (arr1.indexOf(m) != -1) {''
         //       arr1 = arr1;
         //     } else {
         //       arr1 = m + '|' + arr1.split('|').filter(e => e != m).join('|');
         //     }
         //     localStorage.setItem('pageTwo', arr1);
         //   }
         // }
         //  let pageTwo1=localStorage.getItem('pageTwo').split('|');
         //  // let app=historyWord.split('|');//将字符串转成数组
         //  for (let i=0;i<pageTwo1.length;i++){
         //    let asd = JSON.parse(pageTwo1[i]);
         //    // console.log(asd);
         //    this.pageTwo1=asd;
         //  }
         //  console.log( this.pageTwo1,'数组是否存到值?');
        }
      }
    }
</script>

<style scoped>
  .find{
    background: #f5f5f5;
    height: 100%;
  }
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
  .search_find{
    color:white;
    font-size:1.5rem;
    margin: 0.8rem 0 0 8rem;
    background-color: #3190e8;
  }

  .input_btn{
    line-height:3.8rem;
    background:white;
    text-align: center;
  }
  .search_input{
    flex: 4;
    border: 0.15rem solid #e4e4e4;
    font-size: 1.2rem;
    color: #333;
    border-radius: .125rem;
    background-color: #f2f2f2;
    font-weight: 400;
    padding: 0 .25rem;
    height: 2.5rem;
    line-height:2.5rem;
    width:75%;
  }
  .search_submit{
    border: .025rem solid #3190e8;
    font-size: 1.2rem;
    color: #fff;
    border-radius: .125rem;
    background-color: #3190e8;
    font-weight: 400;
    padding: 0 .25rem;
    height: 2.5rem;
    line-height:2.5rem;
    width:20%;
  }
  .business{
    font-size: 1.5rem;
    line-height: 2rem;
    text-indent: 2rem;
    font-weight: 900;
    color: #666;
  }
  .ul{
    background-color: #fff;
  }
  .ul li {
    border-bottom: 0.05rem solid #e4e4e4;
    margin-bottom: 1.5rem;
    padding: 1rem 0 0 0;
  }
  .left img{
    width: 4rem;
    margin-left: 1rem;
  }
  .right{
    padding-bottom: 1rem;
    width: 90%;
    margin-left:5.5rem;
  }
  .three{
    padding-bottom:1rem;
    border-bottom: 0.05rem solid #e4e4e4;
  }
</style>
