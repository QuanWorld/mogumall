<template>
  <div id="app">
    <!-- 容器 -->
    <keep-alive><router-view></router-view></keep-alive>
    <!-- tabbar -->
    <tab-bar>
      <tab-bar-item>
        <img slot="icon" src="~assets/img/tabbar/home.svg" />
        <span slot="text">首页</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="icon" src="~assets/img/tabbar/home.svg" />
        <span slot="text">首页</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="icon" src="~assets/img/tabbar/home.svg" />
        <span slot="text">首页</span>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="icon" src="~assets/img/tabbar/home.svg" />
        <span slot="text">首页</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style>
@import "assets/css/base.css";
</style>
