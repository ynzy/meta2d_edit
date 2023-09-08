<script setup lang="ts">
/**
 * 面板通用组件
 */
interface IMenuItemProps {
  /** 激活的tab */
  factiveKey?: Array<string>;
  list: Array<any>;
  // showList: boolean;
  // type: number;
}
const props = withDefaults(defineProps<IMenuItemProps>(), {
  factiveKey: () => []
});
const { factiveKey, list } = toRefs(props);

const emit = defineEmits(['update:factive-key']);

const activeKeyOnChanged = (key: any) => {
  emit('update:factive-key', key);
};

// 拖拽进行画布绘制
const drag = (data: any, e: any) => {
  const json = JSON.stringify(data);
  e.dataTransfer.setData('meta2d', json);
};
</script>
<template>
  <a-collapse v-model:activeKey="factiveKey" :bordered="false" expandIconPosition="end" @change="activeKeyOnChanged">
    <a-collapse-panel v-for="item in list" :key="item.name">
      <!-- v-if="item.show" -->
      <template #header>
        <div class="header">
          <FolderOpenOutlined class="mr8" v-if="factiveKey?.includes(item.name)" />
          <FolderOutlined class="mr8" v-else />
          <span class="text">{{ item.name }}</span>
          <span>({{ item.list.length }})</span>
        </div>
      </template>
      <div class="thumbs" v-if="item.list.length">
        <div class="thumb" v-for="child in item.list" :key="child.name" draggable="true" @dragstart="drag(child.data, $event)">
          <div class="center hover" :title="child.name">
            <i class="icon-size t-icon" :class="child.icon"></i>
          </div>
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>
<style lang="scss" scoped>
:deep(.ant-collapse-borderless) {
  background-color: #fafafa;
  border: 0;
}
.header {
  display: flex;
  align-items: center;
  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 84px;
    display: inline-block;
  }
}
.thumbs {
  display: flex;
  flex-wrap: wrap;
  margin-left: 8px;
  width: 100%;
  .thumb {
    width: 25%;
    .center {
      width: 100%;
      text-align: center;
      margin: auto;
    }
    .icon-size {
      font-size: 25px !important;
      width: 25px;
    }
  }
}
</style>
