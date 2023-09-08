<script setup lang="ts">
const activeKey = ref('图纸');
const firstTabTitle = ref('图纸');

const emit = defineEmits(['update-hidden']);

watch(activeKey, (val) => {
  if (val === '结构') {
    emit('update-hidden', true);
  } else {
    emit('update-hidden', false);
  }
});
</script>
<template>
  <a-tabs v-model:activeKey="activeKey" class="PropsTabs" size="small">
    <a-tab-pane key="图纸" tab="图纸">图纸</a-tab-pane>
    <a-tab-pane key="通信" tab="通信">通信 </a-tab-pane>
    <a-tab-pane key="布局" tab="布局">布局</a-tab-pane>
    <a-tab-pane key="结构" tab="结构"></a-tab-pane>
  </a-tabs>
</template>
<style lang="scss" scoped></style>
