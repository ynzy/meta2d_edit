<script setup lang="ts"></script>
<template>
  <div class="meta2d_container">
    <Meta2dMenu />
    <div class="editor">
      <Meta2dMaterial class="material" />
      <Meta2dCanvas class="canvas" />
      <Meta2dProps class="props" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.meta2d_container {
  height: 100%;
  padding-top: 50px;
  overflow: hidden;
  .editor {
    display: flex;
    height: calc(100vh - 50px);
    overflow-x: hidden;
    .material {
      width: 200px;
      height: 100%;
      border-right: 1px solid #ddd;
    }
    .canvas {
      flex: 1;
    }
    .props {
      width: 240px;
      height: 100%;
      border-left: 1px solid #ddd;
    }
  }
}
</style>
