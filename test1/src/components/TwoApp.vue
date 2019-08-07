<template>
    <div class="two_app">
      <Nav></Nav>
      <router-view></router-view>
    </div>
</template>

<script>
    import Nav from "./Nav";
    export default {
        name: "TwoApp",
      components: {Nav}
    }
</script>

<style scoped>

</style>
