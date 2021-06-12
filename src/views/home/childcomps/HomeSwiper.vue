<template>
  <van-swipe class="van-swiper" :autoplay="3000" indicator-color="#FF8198">
    <van-swipe-item
      class="van-swipe-item"
      v-for="(item, index) in banners"
      :key="index"
    >
      <a :href="item.link"><img v-lazy="item.image"/></a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.van-swiper {
  width: 100%;
  height: 198px;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
