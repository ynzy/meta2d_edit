<script setup lang="ts">
/**
 * 线宽
 */
const lineWidth = reactive({
  'name': '线宽',
  'icon': 't-icon t-curve2',
  number: 1,
  'isShow': true
});
const handleInputChange = () => {
  if (lineWidth.number < 1) {
    lineWidth.number = 1;
  }
};
</script>
<template>
  <MenuItem :menuItem="lineWidth" :isDownIcon="false" :selectable="false">
    <template #title="{ menuItem }">
      <div class="iconItem">
        <div class="icon">
          <span class="num">{{ lineWidth.number }}</span>
          <i class="abs t-icon t-triangle-down rightIcon"></i>
        </div>
        <span class="font">{{ menuItem.name }}</span>
      </div>
    </template>
    <template #menu>
      <a-menu class="lineWidthView">
        <a-input-number v-model:value="lineWidth.number" :min="1" @change="handleInputChange" />
      </a-menu>
    </template>
  </MenuItem>
</template>
<style lang="scss" scoped>
.lineWidthView {
  min-width: 220px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px #0000004d;
  .ant-input-number {
    width: 100%;
  }
}
</style>
