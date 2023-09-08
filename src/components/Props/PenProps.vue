<script setup lang="ts">
/**
 * 单个物体设置
 */
const activeKey = ref('外观');
</script>
<template>
  <a-tabs v-model:activeKey="activeKey" class="PropsTabs" size="small">
    <a-tab-pane key="外观" tab="外观">外观</a-tab-pane>
    <a-tab-pane key="事件" tab="事件">事件 </a-tab-pane>
    <a-tab-pane key="动效" tab="动效">动效</a-tab-pane>
    <a-tab-pane key="数据" tab="数据">数据</a-tab-pane>
    <a-tab-pane key="结构" tab="结构">结构</a-tab-pane>
  </a-tabs>
</template>
<style lang="scss" scoped></style>
