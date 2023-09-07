<script setup lang="ts">
interface IMenuItemProps {
  // active: boolean;
  menuItem: Object;
  // needOperate: boolean;
}
const props = defineProps<IMenuItemProps>();
const { menuItem } = toRefs(props);
</script>
<template>
  <a-dropdown class="MenuItem" overlayClassName="dropMenu">
    <div>
      <div class="iconItem">
        <div class="icon">
          <i :class="menuItem.icon"> </i>
          <i v-if="menuItem.children?.length" class="abs t-icon t-triangle-down rightIcon"></i>
        </div>
        <span class="font">{{ menuItem.name }}</span>
      </div>
    </div>
    <template #overlay v-if="menuItem.children?.length">
      <a-menu>
        <template v-for="(child, childIndex) in menuItem.children" :key="childIndex">
          <a-menu-item class="menuItem" :disabled="child.disabled" v-if="child.name">
            {{ child.name }}
          </a-menu-item>
          <a-menu-divider v-else />
        </template>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<style lang="scss" scoped>
.MenuItem {
  .iconItem {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      height: 24px;
      line-height: 24px;
      position: relative;
      i {
        font-size: 18px;
      }
      .rightIcon {
        font-size: 10px;
      }
    }
  }
}

.ant-dropdown-menu {
  padding: 0;
  border-radius: 0;
  :deep(.menuItem) {
    border-radius: 0;
    padding-left: 28px;
    min-width: 187px;
    height: 40px;
    background: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    line-height: 14px;
    color: #444649;
    &:hover {
      background-color: #1890ff;
      color: #fff;
    }
  }
  :deep(.ant-dropdown-menu-item-disabled) {
    color: rgba(0, 0, 0, 0.25);
    &:hover {
      color: rgba(0, 0, 0, 0.25);
      background-color: #ffffff;
    }
  }
}
</style>

<style>
/* :is(.ant-dropdown) .ant-dropdown-menu .ant-dropdown-menu-item:hover {
  background-color: #1890ff;
  color: #fff;
} */
</style>
