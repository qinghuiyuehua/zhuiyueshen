<template>
    <div class="find">
      <div class="head">
        <i class="el-icon-arrow-left arrow-left"></i>
        <span class="search_find">搜索</span>
      </div>

      <el-row class="input_btn">
        <input type="search" placeholder="请输入商家或美食名称" class="search_input">
        <input type="submit" class="search_submit">
      </el-row>

    </div>
</template>

<script>
    export default {
      name: "Find",
      data() {
        return {
          input: '',
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
</style>
