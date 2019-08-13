<template>
  <div class="ResultBusiness">
    <div v-if="image10.length>1">
      <h4 class="business">商家</h4>
      <ul class="ul">
        <li v-for="(page5,index) in image10" class="quan" @click="click22(page5)">
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
    <div class="search_none" v-if="image10.length<=1">很抱歉！无搜索结果</div>
  </div>
</template>

<script>
    export default {
        name: "searchResultBusiness",
      props:{
        image10:{
          type:Array
        }
      },
      watch: {
        image10: {
          handler(newName, oldName) {
            // this.image10.forEach((v,index)=>{
            //   // console.log(v,'搜索结果页');
            // });
            console.log(this.image10,'image10的信息');
          },
          immediate: true,
          deep: true
        }
      },
      methods:{
        click22(v){
          this.$router.push({path:"/BusinessInformation",query:{id: v.id}});
        }
      }
    }
</script>

<style scoped>
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
  .search_none {
    margin: 0 auto;
    font: 1.5rem/1.75rem Microsoft YaHei;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: .125rem;
    line-height: 4rem;
  }
</style>
