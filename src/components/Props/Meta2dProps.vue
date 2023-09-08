<script setup lang="ts">
/**
 * 配置类型
 * 图纸 0
 * 单物体 1
 * 多物体 2
 */
const type = ref(0);
const isHidden = ref(false);
/**
 * 隐藏切换结构
 */
const hiddenChange = (e: boolean) => {
  isHidden.value = e;
};
</script>
<template>
  <div class="Meta2dProps">
    <FileProps v-show="type === 0" @update-hidden="hiddenChange" />
    <PenProps v-show="type === 1" />
    <PensProps v-show="type === 2" />
    <Structure v-show="isHidden" class="structure" />
  </div>
</template>
<style lang="scss" scoped>
.Meta2dProps {
  position: relative;
  background: #ffffff;
  box-shadow: 0 2px 4px #dad7d7;
  .structure {
    position: absolute;
    top: 50px;
    width: 100%;
    max-height: calc(100% - 50px);
    overflow-y: auto;
    background: pink;
  }
}
</style>
