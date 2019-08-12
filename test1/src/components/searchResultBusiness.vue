<template>
  <div class="ResultBusiness">
    <h4 class="business">商家</h4>
    <ul class="ul">
      <li v-for="(page5,index) in image10" class="quan">
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
      // methods:{
        // JumpHome(v){
        //   this.$router.push({path:"/home"});
        //
        //   //通过JSON向主页以及搜索页面传递geohash值
        //   let q = JSON.stringify(v.geohash);
        //   localStorage.removeItem('geohash');
        //   localStorage.setItem('geohash',q);
        //
        //   //通过JSON向搜索记录页传递搜索历史记录
        //   let p = JSON.stringify(v);
        //   let searchWord=localStorage.getItem('searchWord');
        //   if(searchWord==null){
        //     localStorage.setItem('searchWord',p);
        //   }else {
        //     let arr = localStorage.getItem('searchWord');
        //     // console.log(arr,'arr的值');
        //     if (arr.indexOf(p) != -1) {
        //       arr = arr;
        //     } else {
        //       arr = p + '|' + arr.split('|').filter(e => e != p).join('|');
        //     }
        //     localStorage.setItem('searchWord', arr);
        //     // console.log(arr,'搜索后是否有值');
        //   }
        // }
      // },
      // mounted(){
      //   console.log(this.image10,'image10的信息');
      // }
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
</style>
