<template>
  <div id="app">
    <!--<div id="appLoading">-->
      <!--<LoadingPage></LoadingPage>-->
    <!--</div>-->
    <div id="app1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import "../node_modules/animate.css/animate.css"
  import LoadingPage from "./components/LoadingPage"
  import Vue from "vue";
export default {
  name: 'App',
  components: {LoadingPage}
}
</script>

<head>

</head>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  body,html{
   width: 100%;
   height: 100%;
 }
#app {
  width: 100%;
  height: 100%;
}
  html,body{
    width: 100%;
    height: 100%;
  }

</style>
