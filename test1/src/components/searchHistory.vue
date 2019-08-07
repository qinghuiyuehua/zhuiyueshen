<template>
  <div>
    <div class="history">搜索历史</div>
    <ul v-if="type12==='1'">
      <li v-for="(page4,index) in historyWord" class="result2" :key="page4.id" @click="JumpHomeTwo(page4)">
        <h4 class="result1_h5">{{page4.name}}</h4>
        <p class="result1_p1">{{page4.address}}</p>
      </li>
    </ul>
    <div class="footer" v-if="type11==='1'" @click="empty">清空所有</div>
  </div>
</template>

<script>
    export default {
        name: "searchHistory",
      data(){
        return{
          type11:'1',
          type12:'1',
          historyWord:[]
        }
      },
      methods:{
        JumpHomeTwo(v){
          this.$router.push({path:"/home",query:{arrObj1:v.geohash}});
        },
        empty(){
          localStorage.removeItem('searchWord');
          let historyWord=localStorage.getItem('searchWord');
          if(historyWord==null){
            this.type11="2";
            this.type12="2";
          }
        }
      },
    created(){
      let historyWord=localStorage.getItem('searchWord');
      // console.log(historyWord,'接收到的历史记录');
      if(historyWord==null){
        this.type11="2";
      }else {
        this.type11="1";
        let app=historyWord.split('|');//将字符串转成数组
        // console.log(app,'快让开让开');
        for (let i=0;i<app.length;i++){
          let asd = JSON.parse(app[i]);
          // console.log(asd);
          this.historyWord.push(asd);
        }
// console.log( this.historyWord,'数组是否存到值')
      }

    }

    }
</script>

<style scoped>
  .history{
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 1rem;
    font: .1rem/2rem Microsoft YaHei;
  }
  .result1_h5{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 auto .7rem;
    width: 90%;
    font-size: 1.5rem;
    color: #333;
  }
  .result2{
    width: 100%;
    height: 14.3%;
    border-top: solid 1px #e4e4e4;
    margin: 0 auto;
    padding-top: 1.3rem;
  }
  .result1_p1{
    width: 90%;
    height: 100%;
    margin: 0 auto 1.3rem;
    font-size: 1rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
