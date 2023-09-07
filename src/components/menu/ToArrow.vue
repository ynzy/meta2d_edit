<script setup lang="ts">
/**
 * 终点
 */
const toArrowMenu = {
  'name': '终点',
  'icon': 't-icon t-line',
  'isShow': true,
  children: [
    { 'name': 'line', 'icon': 't-icon t-line', 'value': '' },
    { 'name': 'triangle', 'icon': 't-icon t-to-triangle', 'value': 'triangle' },
    { 'name': 'diamond', 'icon': 't-icon t-to-diamond', 'value': 'diamond' },
    { 'name': 'circle', 'icon': 't-icon t-to-circle', 'value': 'circle' },
    { 'name': 'lineDown', 'icon': 't-icon t-to-lineDown', 'value': 'lineDown' },
    { 'name': 'lineUp', 'icon': 't-icon t-to-lineUp', 'value': 'lineUp' },
    { 'name': 'triangleSolid', 'icon': 't-icon t-to-triangleSolid', 'value': 'triangleSolid' },
    { 'name': 'diamondSolid', 'icon': 't-icon t-to-diamondSolid', 'value': 'diamondSolid' },
    { 'name': 'circleSolid', 'icon': 't-icon t-to-circleSolid', 'value': 'circleSolid' },
    { 'name': 'lineArrow', 'icon': 't-icon t-to-line', 'value': 'line' }
  ]
};
</script>
<template>
  <MenuItem :menuItem="toArrowMenu" :isDownIcon="false" />
</template>
<style lang="scss" scoped></style>
