<script setup lang="ts">
import { useMeta2dCanvas } from '@/hooks/useMeta2dCanvas';
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

/**
 * 创建meta2d实例
 */
const meta2dCanvas = useMeta2dCanvas({ id: 'meta2d' });
</script>
<template>
  <div class="Meta2dCanvas">
    <Contextmenu>
      <div id="meta2d"></div>
    </Contextmenu>
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
    // background: pink;
  }
}
</style>
