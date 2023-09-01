import { createApp } from 'vue';
import store from './stores';

import App from './App.vue';
import router from './router';
// 引入全局样式
import '@/styles/index.scss';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(router);
app.use(store);

// app.use(Antd);

app.mount('#app');
