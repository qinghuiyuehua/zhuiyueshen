<template>
  <div class="search">
    <van-nav-bar
      :title="cityPage.name"
      right-text="切换城市"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <form class="input">
      <div>
        <input type="search" placeholder="输入学校、商务楼、地址" required="required" class="input_sea" v-model="pageOne">
      </div>
      <div>
        <input type="submit" value="提交" class="input_sub" @click="inputClick">
      </div>
    </form>
    <search-history v-if="type10==='1'"></search-history>
    <search-result v-if="type10==='2'" :image9="cityPage2"></search-result>
  </div>

</template>

<script>
  import Vue from "vue";
  import SearchHistory from "./searchHistory";
  import SearchResult from "./searchResult";
  export default {
    name: "SearchPage",
    components: {SearchResult, SearchHistory},
    data(){
      return{
        cityPage:[],
        pageOne:"",
        cc1:"",
        cityPage2:[],
        type10:'1'
      }
    },
    methods: {
      onClickLeft() {
        window.history.go(-1);
      },
      onClickRight() {
        this.$router.push({path:"/"});
      },
      inputClick(){
        //  获取输入框数据,并根据输入框内容请求出搜索内容
        let url2 = "https://elm.cangdu.org/v1/pois?city_id="+this.cc1+"&keyword="+this.pageOne+"&type=search";
        console.log(url2,'搜索城市的地址');
        Vue.axios.get(url2).then((res)=>{
          console.log(res.data,'根据搜索框获取相应的搜索内容');
          this.cityPage2=res.data;
          this.type10='2';
          // this.$router.push({name:"n",params:{cityPage3:this.cityPage2}});
        }).catch((error)=>{
          console.log(error);
        });
        console.log(this.type10,'3');
      }
    },
    mounted(){
      console.log(this.$route.query.arrObj,'是否能收到第一页传来的id值');
      this.cc1 = this.$route.query.arrObj;
      localStorage.setItem("cityid",this.cc1);
      console.log(localStorage.setItem("cityid",this.cc1));
      // 动态获取城市名
      let url1 = "https://elm.cangdu.org/v1/cities/"+this.cc1;
      Vue.axios.get(url1).then((result)=>{
        // console.log(result.data.name);
        this.cityPage=result.data;
      }).catch((error)=>{
        console.log(error);
      });
      console.log(this.type10,'1');
    }
  }
</script>

<style scoped>
  .van-nav-bar{
    background: #3190e8;
  }
  .van-nav-bar__text{
    color: #fff;
  }
  .van-icon{
    color: #fff;
  }
  .input{
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .5rem;
    margin-top: 3%;
  }
  .input_sub{
    background-color: #3190e8;
    font-size: 1rem;
    color: #fff;
    border-radius: 0.2rem;
    margin-bottom: .6rem;
    width: 100%;
    height:3rem;
  }
  .input div{
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  .input_sea{
    border: 1px solid #e4e4e4;
    padding: .5rem;
    font-size: 1rem;
    color: #333;
    border-radius: 0.2rem;
    margin-bottom: .6rem;
    width: 100%;
    height:3rem;
  }

  .van-ellipsis{
    color: #fff;
  }
</style>
