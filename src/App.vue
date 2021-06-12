<template>
  <div id="app">
    <!-- 容器 -->
    <router-view></router-view>
    <!-- maintabbar -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar.vue"

export default {
  name: "App",
  components: {
    MainTabBar,
  },
}
</script>

<style>
@import "assets/css/base.css";
</style>
