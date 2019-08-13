<template>
    <div class="result" v-cloak>
      <ul>
        <li v-for="(page4,index) in image9" class="result1" :key="page4.id" @click="JumpHome(page4)">
          <h4 class="result1_h4">{{page4.name}}</h4>
          <p class="result1_p">{{page4.address}}</p>
        </li>
        <div class="footer" v-if="image9.length<1">很抱歉！无搜索结果</div>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "searchResult",
      props:{
        image9:{
          type:Array
        }
      },
      watch: {
        image9: {
          handler(newName, oldName) {
            this.image9.forEach((v,index)=>{
              console.log(v,'搜索结果页');
            });
          },
          immediate: true,
          deep: true
        }
      },
      methods:{
        JumpHome(v){
          this.$router.push({path:"/home"});

          //通过JSON向主页以及搜索页面传递geohash值
          let q = JSON.stringify(v.geohash);
          localStorage.removeItem('geohash');
          localStorage.setItem('geohash',q);

          //    将城市经纬度  传给外卖页面
          let cityLatitude = v.latitude;
          localStorage.setItem('latitude',cityLatitude);

          let cityLongitude = v.longitude;
          localStorage.setItem('longitude', cityLongitude);

          //通过JSON向搜索记录页传递搜索历史记录
          let p = JSON.stringify(v);
          let searchWord=localStorage.getItem('searchWord');
          if(searchWord==null){
            localStorage.setItem('searchWord',p);
          }else {
            let arr = localStorage.getItem('searchWord');
            // console.log(arr,'arr的值');
            if (arr.indexOf(p) != -1) {
              arr = arr;
            } else {
              arr = p + '|' + arr.split('|').filter(e => e != p).join('|');
            }
            localStorage.setItem('searchWord', arr);
            // console.log(arr,'搜索后是否有值');
          }
        }
      },
      mounted(){
          console.log(this.image9,'image9的信息')
      }
    }
</script>

<style scoped>
  .result1{
    width: 100%;
    height: 14.3%;
    border-top: solid 1px #e4e4e4;
    margin: 0 auto;
    padding-top: 1.3rem;
  }
  .result1_h4{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 auto .7rem;
    width: 90%;
    font-size: 1.5rem;
    color: #333;
  }
  .result1_p{
    width: 90%;
    height: 100%;
    margin: 0 auto 1.3rem;
    font-size: 1rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [v-cloak]{
    display:none;
  }
  .footer{
    font-size: 1.5rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    border-top: solid 1px #e4e4e4;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
  }
</style>
