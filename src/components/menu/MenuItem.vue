<script setup lang="ts">
interface IMenuItemProps {
  isDownIcon?: boolean;
  // active: boolean;
  menuItem: Object;
  // needOperate: boolean;
}
const props = withDefaults(defineProps<IMenuItemProps>(), {
  isDownIcon: true
});
const { menuItem } = toRefs(props);
</script>
<template>
  <a-dropdown class="MenuItem" overlayClassName="dropMenu">
    <div>
      <slot name="title" :menuItem="menuItem">
        <div class="iconItem">
          <div class="icon">
            <i :class="menuItem.icon"> </i>
            <i v-if="isDownIcon && menuItem.children?.length" class="abs t-icon t-triangle-down rightIcon"></i>
          </div>
          <span class="font">{{ menuItem.name }}</span>
        </div>
      </slot>
    </div>
    <template #overlay>
      <slot name="menu" :menuItem="menuItem">
        <a-menu v-if="menuItem.children?.length">
          <template v-for="(child, childIndex) in menuItem.children" :key="childIndex">
            <a-menu-item class="menuItem" :disabled="child.disabled" v-if="child.name">
              <div class="item_content">
                <i class="arrowIcon" :class="child.icon"> </i>
                {{ child.name }}
              </div>
            </a-menu-item>
            <a-menu-divider v-else />
          </template>
        </a-menu>
      </slot>
    </template>
  </a-dropdown>
</template>
<style lang="scss" scoped>
.item_content {
  display: flex;
  align-items: center;
  .arrowIcon {
    margin-right: 20px;
    font-size: 30px;
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

<style lang="scss">
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
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
