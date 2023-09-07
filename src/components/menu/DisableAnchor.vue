<script setup lang="ts">
/**
 * 禁用锚点
 */
const disableAnchorItem = reactive({
  'name': '禁用锚点',
  'isShow': true
});
const disableAnchor = ref(false);
const handleDisableAnchor = () => {
  disableAnchor.value = !disableAnchor.value;
};
</script>
<template>
  <MenuItem :menuItem="disableAnchorItem" :isDownIcon="false" :selectable="false">
    <template #title="{ menuItem }">
      <div class="iconItem" @click="handleDisableAnchor">
        <div class="icon" :class="{ 'disable': disableAnchor }">
          <i class="t-icon t-maodian"></i>
        </div>
        <span class="font" :class="{ 'disable': disableAnchor }">{{ menuItem.name }}</span>
      </div>
    </template>
  </MenuItem>
</template>
<style lang="scss" scoped>
.disable {
  color: rgb(198, 200, 203);
}
</style>
