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
      <searchHistoryBusiness v-if="type20==='1'"></searchHistoryBusiness>
      <searchResultBusiness v-if="type20==='2'" :image10="cityPage5"></searchResultBusiness>
    </div>
</template>

<script>
  import Vue from "vue";
  import searchHistoryBusiness from "./searchHistoryBusiness"
  import searchResultBusiness from "./searchResultBusiness"
    export default {
      name: "Find",
      components: {searchHistoryBusiness, searchResultBusiness},
      data() {
        return {
          pageTwo:"",
          cc3:"",
          cityPage5:[],
          type20:"1"
        }
      },
      created(){
        let geohash=localStorage.getItem('geohash');
        this.cc3 = JSON.parse(geohash);
        console.log(this.cc3,'接收到的geohash值');
      },
      methods:{
        inputClick2(){
          let url3 = "https://elm.cangdu.org/v4/restaurants?geohash="+this.cc3+"&keyword="+this.pageTwo;
          console.log(url3);
          Vue.axios.get(url3).then((result)=>{
            console.log(result.data,'根据geohash值获取餐馆信息');
            this.cityPage5=result.data;
            this.type20="2";
            // console.log(this.cityPage5);
          }).catch((error)=>{
            console.log(error);
          });

          //通过JSON向搜索记录页传递搜索历史记录(搜索的内容)
          if (this.pageTwo!=""){
            let l = JSON.stringify(this.pageTwo);
            let pageTwo=localStorage.getItem('pageTwo');
            if(pageTwo==null){
              localStorage.setItem('pageTwo',l);
            }else {
              let arr = localStorage.getItem('pageTwo');
              // console.log(arr,'arr的值');
              if (arr.indexOf(l) != -1) {
                arr = arr;
              } else {
                arr = l + '|' + arr.split('|').filter(e => e != l).join('|');
              }
              localStorage.setItem('pageTwo', arr);
              console.log(arr,'搜索后是否有值');
            }
          }
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
  input[type=search]{
    border-radius: 5px;
    border: 1px solid #ebebeb;
    outline: none;
  }
  /*input[type=search]::-webkit-input-placeholder{*/
  /*color: blue;*/
  /*}*/
  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #EBEBEB;
  }
  input[type=search]::-webkit-search-cancel-button:after{
    position: absolute;
    content: 'x';
    left: 25%;
    top: -12%;
    font-size: 20px;
    color: #fff;
  }
</style>
