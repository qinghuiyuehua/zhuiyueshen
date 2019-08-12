<template>
  <div id="app">
    <!--<transition enter-active-class="animated fadeIn" leave-active-class="opacity 0" >-->
    <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import "../node_modules/animate.css/animate.css"

export default {
  name: 'App',
  components: {},

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
  #app{
    width: 100%;
    height: 100%;
  }

</style>
