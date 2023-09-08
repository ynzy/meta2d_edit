<script setup lang="ts">
import { menus } from '@/defaultConfig/menu';
const menusRef = ref(menus);
</script>
<template>
  <div class="Meta2dMenu flex menu">
    <div class="logo">
      <div class="img"></div>
      编辑器
    </div>
    <div class="menus flex">
      <div class="flex">
        <div class="leftItem mr30" v-for="menu in menusRef.left" :key="menu.key">
          <MenuItem :menuItem="menu" />
        </div>
      </div>
      <div class="flex">
        <div class="middleItem mr30" v-for="menu in menusRef.middle" :key="menu.key">
          <MenuItem :menuItem="menu" />
        </div>
        <FromArrow class="mr30" />
        <ToArrow class="mr30" />
        <DefaultLineStyle class="mr30" />
        <LineWidth class="mr30" />
        <ViewScale class="mr30" />
        <AutoAnchor class="mr30" />
        <DisableAnchor class="mr30" />
      </div>
      <div class="flex ml16">
        <Lock class="MenuItem" />
        <div class="rightItem ml24 help-menu" v-for="menu in menusRef.right" :key="menu.key">
          <MenuItem :menuItem="menu" />
        </div>
      </div>
    </div>
    <div class="loginArea"></div>
  </div>
</template>
<style lang="scss" scoped>
.Meta2dMenu {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  background: #ffffff;
  z-index: 2;
  flex-shrink: 0;
  .logo {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 40px;
    color: #171b27;
    cursor: pointer;
    .img {
      margin-left: 8px;
      margin-right: 8px;
      width: 30px;
      height: 30px;
    }
  }
  .menus {
    flex-grow: 1;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
  }
  .loginArea {
    width: 80px;
  }
}
</style>
