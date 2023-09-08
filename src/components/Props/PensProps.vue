<script setup lang="ts">
/**
 * 多个物体设置
 */
const activeKey = ref('外观');
</script>
<template>
  <a-tabs v-model:activeKey="activeKey" class="PropsTabs" size="small">
    <a-tab-pane key="外观" tab="外观">外观</a-tab-pane>
    <a-tab-pane key="布局" tab="布局">布局 </a-tab-pane>
    <a-tab-pane key="结构" tab="结构">结构</a-tab-pane>
  </a-tabs>
</template>
<style lang="scss" scoped></style>
