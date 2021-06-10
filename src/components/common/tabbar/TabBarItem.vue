<template>
  <div id="tab-bar-item">
    <div>
      <router-link to="/home">
        <div class="item-icon"><slot name="icon"></slot></div>
        <div class="item-text"><slot name="text"></slot></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
}
.item-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.item-text span {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>
