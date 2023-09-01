<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
const options = [
  {
    content: '选项一',
    value: 1,
    children: [
      {
        content: '选项九',
        value: 9
      }
    ]
  },
  {
    content: '选项二',
    value: 3,
    children: [
      {
        content: '选项十',
        value: 10
      }
    ]
  },
  {
    content: '危险操作',
    value: 4,
    theme: 'error',
    children: [
      {
        content: '危险操作一',
        value: 11,
        theme: 'error',
        children: [
          {
            content: '危险操作项',
            value: 13,
            theme: 'error'
          },
          {
            content: '操作项',
            value: 12
          }
        ]
      }
    ]
  }
];

const clickHandler = (data) => {
  MessagePlugin.success(`选中【${data.content}】`);
};
</script>
<template>
  <div class="Meta2dCanvas">
    <a-dropdown :trigger="['contextmenu']">
      <div id="meta2d"></div>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<style lang="scss" scoped>
.Meta2dCanvas {
  position: relative;
  background-color: #f4f4f4;
  #meta2d {
    position: absolute !important;
    width: 100%;
    height: 100%;
    touch-action: none;
    overflow: hidden;
    background: pink;
  }
}
</style>
