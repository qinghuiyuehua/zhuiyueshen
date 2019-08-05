<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import City from "./components/city";
  import Login from "./components/login";
  import Nav from "./components/Nav";
  import Person from "./components/Person";
  import UpdateName from "./components/UpdateName";
export default {
  name: 'App',
  components: {Nav, Login, City,Person,UpdateName},

}
</script>

<head>
  <!--<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">-->

</head>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
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
