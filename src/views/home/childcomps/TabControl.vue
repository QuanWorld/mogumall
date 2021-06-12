<template>
  <div id="tab-control">
    <van-tabs
      class="control"
      v-model="active"
      title-active-color="#ff8198"
      color="#ff8198"
    >
      <van-tab title="流行"></van-tab>
      <van-tab title="新款"></van-tab>
      <van-tab title="精选"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style scoped>
#tab-control {
  position: sticky;
  top: 44px;
}
</style>
