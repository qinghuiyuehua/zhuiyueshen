<template>
    <div class="header">
      <router-view></router-view>
      <router-view name="hc"></router-view>
      <router-view name="gc"></router-view>
      <router-link :to="{path:'/Login'}"></router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
