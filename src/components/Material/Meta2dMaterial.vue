<script setup lang="ts">
import { defaultIcons } from '@/defaultConfig/icons';

const searchKey = ref('');
const activeKey = ref('系统组件');
const list = ref(defaultIcons);
const panelActive = ref([]); // 打开的菜单
const panelH = ref('calc(100% - 100px)');

const showModal = ref(false); // 显示弹框
const plainOptions = reactive(list.value.map((item) => item.name));
const checkedState = reactive({
  indeterminate: true,
  checkAll: false,
  // 选中列表
  checkedList: computed({
    get() {
      return list.value.filter((item) => item.show).map((item) => item.name);
    },
    set(value) {
      list.value.map((item) => {
        if (value.includes(item.name)) {
          item.show = true;
        } else {
          item.show = false;
        }
      });

      return value;
    }
  })
});

/**
 * 监听选中状态
 */
watch(
  () => checkedState.checkedList,
  (val) => {
    checkedState.indeterminate = !!val.length && val.length < plainOptions.length;
    checkedState.checkAll = val.length === plainOptions.length;
  },
  {
    deep: true,
    immediate: true
  }
);

// 打开更多弹框
const openModalMore = () => {
  showModal.value = !showModal.value;
};

// 更多确认
const onModalOk = () => {
  showModal.value = !showModal.value;
};

// 显示所有图标
const onShowMaterialAll = (e: any) => {
  Object.assign(checkedState, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false
  });
};
</script>
<template>
  <div class="Meta2dMaterial">
    <div class="search">
      <a-input v-model:value="searchKey" placeholder="搜索" />
    </div>
    <a-tabs class="PropsTabs" v-model:activeKey="activeKey" size="small">
      <a-tab-pane key="图纸" tab="图纸">图纸</a-tab-pane>
      <a-tab-pane key="系统组件" tab="系统组件" force-render>
        <div class="content">
          <SystemPanel v-model:factiveKey="panelActive" :list="list" />
        </div>
        <div class="more-graphical">
          <a-button class="btn-more" @click="openModalMore">
            <i class="t-icon t-app mr4"></i>
            <span>图形库管理</span>
          </a-button>
        </div>
      </a-tab-pane>
      <a-tab-pane key="我的组件" tab="我的组件">我的组件</a-tab-pane>
    </a-tabs>
    <!-- 图形库管理 -->
    <a-modal v-model:open="showModal" title="图形库管理" cancelText="取消" okText="确定" @ok="onModalOk">
      <div>
        <a-checkbox v-model:checked="checkedState.checkAll" :indeterminate="checkedState.indeterminate" @change="onShowMaterialAll"> 全选 </a-checkbox>
      </div>
      <a-divider />
      <a-checkbox-group v-model:value="checkedState.checkedList" :options="plainOptions" />
    </a-modal>
  </div>
</template>
<style lang="scss" scoped>
.Meta2dMaterial {
  overflow: auto;
  overflow-y: hidden;
  .search {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 4px;
    padding: 0 10px;
    :deep(.ant-input) {
      width: 180px !important;
      background: #f3f3f3 !important;
      border-radius: 0;
    }
  }
}

.content {
  margin-bottom: 40px;
}
.more-graphical {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  background: white;
  .btn-more {
    width: 170px;
    height: 30px;
    border-radius: 1;
    color: #434343;
    border-radius: 0;
  }
}
.ant-checkbox-group {
  display: flex;
  flex-direction: column;
}
.ant-tabs-tabpane {
  height: calc(100% - 100px);
  overflow-y: auto;
}
</style>
<style lang="scss">
.PropsTabs {
  position: relative;
  height: 100%;
  background: #ffffff;
  .ant-tabs-nav {
    .ant-tabs-nav-wrap {
      .ant-tabs-nav-list {
        .ant-tabs-tab {
          margin-right: 0;
          margin-left: 16px;
          padding: 20px 0 10px;
          .ant-tabs-tab-btn {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #7f838c;
          }
        }
        .ant-tabs-tab-active {
          .ant-tabs-tab-btn {
            color: #000;
          }
        }
        .ant-tabs-ink-bar {
          background-color: #000;
        }
      }
    }
  }
  .ant-tabs-content {
    height: 100%;
    .ant-tabs-tabpane {
      height: calc(100% - 100px);
      overflow-y: auto;
    }
  }
}
</style>
