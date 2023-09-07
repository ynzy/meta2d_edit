<script setup lang="ts">
const menus = reactive({
  'left': [
    {
      'key': 'file',
      'name': '文件',
      'icon': 't-icon t-folder',
      'children': [
        { 'name': '新建文件', 'action': 'newFile', disabled: false },
        { 'name': '打开文件', 'action': 'open', disabled: false },
        { 'name': '导入文件', 'action': 'load', disabled: false },
        {},
        { 'name': '保存', 'action': 'save', disabled: false },
        { 'name': '另存为', 'action': 'saveAsPop', disabled: false },
        { 'name': '下载JSON文件', 'action': 'downloadJson', disabled: false },
        { 'name': '下载zip打包文件', 'action': 'downloadZip', disabled: true },
        {},
        { 'name': '导出为HTML', 'action': 'downloadHtml', disabled: true },
        { 'name': '导出为Vue2组件', 'action': 'downloadVue2', disabled: true },
        { 'name': '导出为Vue3组件', 'action': 'downloadVue3', disabled: true },
        { 'name': '导出为React组件', 'action': 'downloadReact', disabled: true },
        {},
        { 'name': '下载为PNG', 'action': 'downloadPng', disabled: false },
        { 'name': '下载为SVG', 'action': 'downloadSvg', disabled: false }
      ]
    },
    {
      'key': 'edit',
      'name': '编辑',
      'icon': 't-icon t-gongyong--bianji',
      'children': [
        { 'name': '添加/删除锚点（A）', 'action': 'toggleAnchorMode', disabled: true },
        { 'name': '添加手柄（H）', 'action': 'addAnchorHand', disabled: true },
        { 'name': '删除手柄（D）', 'action': 'removeAnchorHand', disabled: true },
        { 'name': '切换手柄类型（Shift）', 'action': 'toggleAnchorHand', disabled: true }
      ]
    },
    { 'key': 'save', 'name': '保存', 'icon': 't-icon t-save', 'action': 'save', disabled: false }
  ],
  'middle': [
    { 'key': 'pen', 'name': '钢笔', 'icon': 't-icon t-curve', 'action': 'drawPen' },
    { 'key': 'pencil', 'name': '铅笔', 'icon': 't-icon t-qianbi', 'action': 'drawingPencil' },
    { 'key': 'magnifier', 'name': '放大镜', 'icon': 't-icon t-fangdajing', 'action': 'showMagnifier' },
    { 'key': 'map', 'name': '缩略图', 'icon': 't-icon t-ditu', 'action': 'showMap' }
  ],
  'right': [
    { 'name': '预览', 'icon': 't-icon t-attention', 'isShow': true, 'action': 'preview' }
    // { 'name': '分享', 'icon': 't-icon t-share', 'isShow': true, 'action': 'share' },
    // {
    //   'name': '社区',
    //   'icon': 't-icon t-shequ',
    //   'isShow': true,
    //   'children': [
    //     { 'name': 'Github', 'url': 'https://github.com/le5le-com', 'target': '_blank' },
    //     { 'name': '核心库', 'url': 'https://github.com/le5le-com/meta2d.js' },
    //     { 'name': '技术交流群', 'url': 'https://doc.le5le.com/document/120479036', 'target': '_blank' }
    //   ]
    // },
    // {
    //   'name': '帮助',
    //   'icon': 't-icon t-help-circle',
    //   'isShow': true,
    //   'children': [
    //     { 'name': '产品介绍', 'url': 'https://doc.le5le.com/document/118756411', 'target': '_blank' },
    //     { 'name': '文档', 'url': 'https://doc.le5le.com/', 'target': '_blank' },
    //     { 'name': '快速入门', 'url': 'https://doc.le5le.com/document/118856436', 'target': '_blank' },
    //     { 'name': '视频教程', 'url': 'https://doc.le5le.com/document/119304389', 'target': '_blank' },
    //     { 'name': '组态教程', 'url': 'https://doc.le5le.com/document/119019399', 'target': '_blank' },
    //     { 'name': '用户手册', 'url': 'https://doc.le5le.com/document/118764244', 'target': '_blank' },
    //     { 'name': '开发教程', 'url': 'https://doc.le5le.com/document/119359590', 'target': '_blank' },
    //     { 'name': 'Meta2d.js API', 'url': 'https://doc.le5le.com/document/119882449', 'target': '_blank' },
    //     { 'name': '常见问题', 'url': 'https://doc.le5le.com/document/119294704', 'target': '_blank' },
    //     {},
    //     { 'name': '企业版价格', 'url': 'https://doc.le5le.com/document/119296274', 'target': '_blank' },
    //     {},
    //     { 'name': '关于我们', 'url': 'https://le5le.com/about.html', 'target': '_blank' }
    //   ]
    // }
  ]
});
</script>
<template>
  <div class="Meta2dMenu flex menu">
    <div class="logo">
      <div class="img"></div>
      编辑器
    </div>
    <div class="menus flex">
      <div class="flex">
        <div class="leftItem mr30" v-for="menu in menus.left" :key="menu.key">
          <MenuItem :menuItem="menu" />
        </div>
      </div>
      <div class="flex">
        <div class="middleItem mr30" v-for="menu in menus.middle" :key="menu.key">
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
        <div class="rightItem ml24 help-menu" v-for="menu in menus.right" :key="menu.key">
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
