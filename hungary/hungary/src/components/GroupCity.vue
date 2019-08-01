<template>
    <div class="group_city">
      <h4 class="sortWord">按字母排序</h4>
      <div class="Cap_father">
        <!--大写字母-->
        <span class="f" v-for="(c,index) in CapCity">
          <div class="Cap">{{c[0]}}</div>
          <!--大写字母的城市-->
          <div>
            <span class="CapName" v-for="(cName,key) in c[1]">{{cName.name}}</span>
          </div>
        </span>
      </div>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
      name: "GroupCity",
      data(){
        return {
          CapCity:[],
        }
      },
      created (){
        Vue.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((result)=>{
          let a = result.data;

          //获取 26个首字母,用Object内置类的keys方法获取要排序对象的属性名，再用Array原型上的sort方法对获取的属性名进行排序，
          //  获取  分类城市
            let b = Object.keys(a).sort();
            let objValue = [];
            for (let i = 0; i < b.length; i ++) {
              let index = b[i];
              if(result.data[index]){
                objValue.push([index,result.data[index]]);
              }
          }
          this.CapCity = objValue;
            console.log(this.CapCity);
        }).catch((error)=>{
          console.log(error);
        })
      },
    }
</script>

<style scoped>
  .sortWord{
    border-top: .2rem solid #e4e4e4;
    width:100%;
    margin-top:1.6rem;
    display: inline-block;
    line-height:2rem;
  }
  .f{
    line-height: 0;
  }
  .Cap{
    border-top: .2rem solid #e4e4e4;
    width:100%;
    line-height:2.5rem;
    font-size: 2rem;
  }
  .CapName{
    width: 25%;
    line-height: 3rem;
    font-size: 1.5rem;
    text-align:center;
    display:inline-block;
    border: .1rem solid #e4e4e4;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    margin-bottom:-.07rem;
    border-left:0;
  }
</style>
