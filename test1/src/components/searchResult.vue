<template>
    <div class="result">
      <ul>
        <li v-for="(page4,index) in cityPage4" class="result1">
          <h4 class="result1_h4">{{page4.name}}</h4>
          <p class="result1_p">{{page4.address}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "searchResult",
      data(){
        return{
          cityPage4:[],

        }
      },
      props:{
        image9:{
          type:Array
        }
      },
      mounted(){
        console.log(this.image9,'23');
        this.cityPage4 = this.image9;
        // console.log( this.image9,'是否能接到搜索产生的值');
        this.cityPage4.forEach((v,index)=>{
          console.log(v.name,v.address);
        });
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
</style>
