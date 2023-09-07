<script setup lang="ts">
/**
 * 视图缩放
 */
const scaleItem = reactive({
  'name': '视图',
  number: 100,
  'isShow': true
});
</script>
<template>
  <MenuItem :menuItem="scaleItem" :isDownIcon="false" :selectable="false">
    <template #title="{ menuItem }">
      <div class="iconItem">
        <div class="icon">
          <span class="num">{{ scaleItem.number }}</span>
          <i class="abs t-icon t-triangle-down rightIcon"></i>
        </div>
        <span class="font">{{ menuItem.name }}</span>
      </div>
    </template>
    <template #menu>
      <a-menu class="scaleView">
        <i class="t-icon t-reduce mr16"></i>
        <i class="t-icon t-add mr16"></i>
        <a-button class="ant-btn mr8">窗口大小</a-button>
        <a-button class="ant-btn">重 置</a-button>
      </a-menu>
    </template>
  </MenuItem>
</template>
<style lang="scss" scoped>
.scaleView {
  i {
    cursor: pointer;
  }
}
</style>
