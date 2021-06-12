<template>
  <div id="Home">
    <!-- 头部 -->
    <nav-bar class="nav-bar">
      <span slot="center">蘑菇街</span>
    </nav-bar>
    <!-- banner -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐信息 -->
    <commend-info :recommends="recommends"></commend-info>
    <!-- 海报 -->
    <home-view></home-view>
    <!-- 标签栏 -->
    <tab-control></tab-control>
    <!-- 商品list -->
    <div style="width:100%;height:800px;"></div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childcomps/HomeSwiper.vue";
import CommendInfo from "views/home/childcomps/CommendInfo.vue";
import HomeView from "views/home/childcomps/HomeView.vue";
import TabControl from "views/home/childcomps/TabControl.vue";
import { getHomeMultidata, getHomeData } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    CommendInfo,
    HomeView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData("pop", 1);
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeData(type, page) {
      getHomeData(type, page).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style scoped>
#Home {
  padding-top: 44px;
}
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
}
</style>
