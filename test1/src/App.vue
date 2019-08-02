<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import City from "./components/city";
  import Login from "./components/login";
export default {
  name: 'App',
  components: {Login, City}
}
</script>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

</head>

<style>
  *{
    margin: 0;
    padding: 0;
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
