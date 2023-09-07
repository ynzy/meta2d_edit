<script setup lang="ts">
/**
 * 默认线路样式
 */
const defaultLine = {
  'name': '连线',
  'icon': 't-icon t-curve2',
  'isShow': true,
  children: [
    { 'name': '曲线', 'icon': 't-icon t-curve2', 'value': 'curve' },
    { 'name': '线段', 'icon': 't-icon t-polyline', 'value': 'polyline' },
    { 'name': '直线', 'icon': 't-icon t-line', 'value': 'line' },
    { 'name': '脑图曲线', 'icon': 't-icon t-mind', 'value': 'mind' }
  ]
};
</script>
<template>
  <MenuItem :menuItem="defaultLine" :isDownIcon="false" />
</template>
<style lang="scss" scoped></style>
