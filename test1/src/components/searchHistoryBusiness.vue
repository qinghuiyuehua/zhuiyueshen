<template>
    <div class="HistoryBusiness">
      <h4 class="qwer">搜索历史</h4>
      <ul v-if="type22==='1'">
        <li v-for="(page6,index) in history8" class="result5" :key="index" @click="inputClick3(page6)">
          <span class="span1">{{page6}}</span>
          <van-icon name="cross" @click="empty3(index)" />
        </li>
      </ul>
      <div class="footer1" v-if="type21==='1'" @click="empty2">清空搜索历史</div>
    </div>
</template>

<script>
  import Vue from "vue";
    export default {
        name: "searchHistoryBusiness",
      data(){
          return{
            type21:"1",
            type22:"1",
            history8:[],
            page7:[],
            page8:[]
          }
      },
      methods:{
        empty2(){
          localStorage.removeItem('pageTwo');
          let history1=localStorage.getItem('pageTwo');
          if(history1==null){
            this.type21="2";
            this.type22="2"
          }
        },
        empty3(i) {
          this.page8=[];
            this.history8.splice(i, 1);
            if (this.history8.length<1) {
                this.type21 = "2";
                this.type22 = "2"
            }
            for (let i=0;i<this.history8.length;i++){
              this.page8.push(JSON.stringify(this.history8[i]));
            }
            let arr1= this.page8.join('|');
          localStorage.setItem('pageTwo', arr1);
        },
        inputClick3(v){
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('childByValue', v)
        }
      },
      created() {
        let history = localStorage.getItem('pageTwo');
        // console.log(historyWord,'接收到的历史记录');
        if (history == null) {
          this.type21 = "2";
        } else {
          this.type21 = "1";
          let appI = history.split('|');//将字符串转成数组
          // console.log(appI,'快让开让开');
          for (let i = 0; i < appI.length; i++) {
            let asdL = JSON.parse(appI[i]);
            // console.log(asdL);
            this.history8.push(asdL);
          }
          console.log(this.history8, '数组是否存到值');
        }
        let geohash=localStorage.getItem('geohash');
        this.cc13 = JSON.parse(geohash);
        console.log(this.cc13,'接收到的geohash值');
      }

    }
</script>

<style scoped>
  .qwer{
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    color: #666;
  }
  .result5{
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    font: .9rem/2rem Microsoft YaHei;
    padding:1.3rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  .footer1{
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
    border-top: solid 1px #e4e4e4;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    background-color: #fff;
    color: #3190e8;
    font-weight: 700;
  }
  .span1{
    display: inline-block;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
