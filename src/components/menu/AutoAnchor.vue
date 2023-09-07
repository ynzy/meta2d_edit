<script setup lang="ts">
/**
 * 自动锚点
 */
const autoAnchorItem = reactive({
  'name': '自动锚点',
  'isShow': true
});
const autoAnchor = ref(true);
const handleAutoAnchor = () => {
  autoAnchor.value = !autoAnchor.value;
};
</script>
<template>
  <MenuItem :menuItem="autoAnchorItem" :isDownIcon="false" :selectable="false">
    <template #title="{ menuItem }">
      <div class="iconItem" @click="handleAutoAnchor">
        <div class="icon" :class="{ 'warning': autoAnchor }">
          <i class="t-icon t-maodian"></i>
        </div>
        <span class="font" :class="{ 'warning': autoAnchor }">{{ menuItem.name }}</span>
      </div>
    </template>
  </MenuItem>
</template>
<style lang="scss" scoped></style>
