<script setup lang="ts">
/**
 * 起点
 */
// const fromArrow = 't-icon t-line';
// const fromArrows = [
//   { 'name': 'line', 'icon': 't-icon t-line', 'value': '' },
//   { 'name': 'triangle', 'icon': 't-icon t-from-triangle', 'value': 'triangle' },
//   { 'name': 'diamond', 'icon': 't-icon t-from-diamond', 'value': 'diamond' },
//   { 'name': 'circle', 'icon': 't-icon t-from-circle', 'value': 'circle' },
//   { 'name': 'lineDown', 'icon': 't-icon t-from-lineDown', 'value': 'lineDown' },
//   { 'name': 'lineUp', 'icon': 't-icon t-from-lineUp', 'value': 'lineUp' },
//   { 'name': 'triangleSolid', 'icon': 't-icon t-from-triangleSolid', 'value': 'triangleSolid' },
//   { 'name': 'diamondSolid', 'icon': 't-icon t-from-diamondSolid', 'value': 'diamondSolid' },
//   { 'name': 'circleSolid', 'icon': 't-icon t-from-circleSolid', 'value': 'circleSolid' },
//   { 'name': 'lineArrow', 'icon': 't-icon t-from-line', 'value': 'line' }
// ];
const fromArrowMenu = {
  'name': '起点',
  'icon': 't-icon t-line',
  'isShow': true,
  children: [
    { 'name': 'line', 'icon': 't-icon t-line', 'value': '' },
    { 'name': 'triangle', 'icon': 't-icon t-from-triangle', 'value': 'triangle' },
    { 'name': 'diamond', 'icon': 't-icon t-from-diamond', 'value': 'diamond' },
    { 'name': 'circle', 'icon': 't-icon t-from-circle', 'value': 'circle' },
    { 'name': 'lineDown', 'icon': 't-icon t-from-lineDown', 'value': 'lineDown' },
    { 'name': 'lineUp', 'icon': 't-icon t-from-lineUp', 'value': 'lineUp' },
    { 'name': 'triangleSolid', 'icon': 't-icon t-from-triangleSolid', 'value': 'triangleSolid' },
    { 'name': 'diamondSolid', 'icon': 't-icon t-from-diamondSolid', 'value': 'diamondSolid' },
    { 'name': 'circleSolid', 'icon': 't-icon t-from-circleSolid', 'value': 'circleSolid' },
    { 'name': 'lineArrow', 'icon': 't-icon t-from-line', 'value': 'line' }
  ]
};
</script>
<template>
  <MenuItem :menuItem="fromArrowMenu" :isDownIcon="false" />
</template>
<style lang="scss" scoped></style>
