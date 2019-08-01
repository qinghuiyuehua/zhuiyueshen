<template>
    <div class="hot_city">
      <h4 class="hot_city_title">热门城市</h4>
      <span class="hot_city_list" v-for="(cN,index) in hotName">{{cN.name}}</span>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
      name: "HotCity",
      data(){
        return {
          hotName:[],
        }
      },
      created (){
        Vue.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((result)=>{
          this.hotName = result.data;
          this.hotName.forEach(v=>{
            // console.log(v.name);
          })
        }).catch((error)=>{
          console.log(error);
        })
      },
    }
</script>

<style scoped>
  .hot_city{
    border-top: .2rem solid #e4e4e4;
    width:100%;
  }
  .hot_city_title{
    padding-left: .6rem;
    line-height: 1rem;
  }
  .hot_city_list{
    color:blue;
    width:25%;
    line-height:3.9rem;
    text-align:center;
    display:inline-block;
    border: .1rem solid #e4e4e4;
    border-right: 0;
    margin-bottom:-.07rem;
  }
</style>
