<script setup lang="ts">
/**
 * 锁
 */
const lockItem = reactive({
  'name': '编辑',
  'isShow': true
});
const isLock = ref(0); // 0编辑 1预览 2锁定
const handleLock = () => {
  isLock.value++;
  if (isLock.value > 2) {
    isLock.value = 0;
  }
};

const lockStatus = computed(() => {
  if (isLock.value == 0) {
    return {
      name: '编辑',
      icon: 't-unlock',
      statusClass: ''
    };
  }
  if (isLock.value === 1) {
    return {
      name: '预览',
      icon: 't-lock',
      statusClass: 'warning'
    };
  }
  if (isLock.value === 2) {
    return {
      name: '锁定',
      icon: 't-wufayidong',
      statusClass: 'error'
    };
  }
  return {
    name: '编辑',
    icon: 't-unlock',
    statusClass: ''
  };
});
</script>
<template>
  <MenuItem :menuItem="lockItem" :isDownIcon="false" :selectable="false">
    <template #title>
      <div class="iconItem" @click="handleLock">
        <div class="icon" :class="lockStatus.statusClass">
          <i class="t-icon" :class="lockStatus.icon"></i>
        </div>
        <span class="font" :class="lockStatus.statusClass">{{ lockStatus.name }}</span>
      </div>
    </template>
  </MenuItem>
</template>
<style lang="scss" scoped></style>
