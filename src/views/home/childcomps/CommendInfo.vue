<template>
  <div id="commend-info">
    <a
      :href="item.link"
      class="item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <img :src="item.image" />
      <div>{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CommendInfo",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#commend-info {
  display: flex;
  width: 100%;
  padding: 10px 0 30px;
  border-bottom: 10px solid #eee;
  font-size: 14px;
}
.item {
  flex: 1;
  text-align: center;
}
.item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
