// import './assets/main.css'
import "element-plus/dist/index.css";
import "@/styles/main.scss";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

const app = createApp(App);

app.use(pinia);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
app.use(ElementPlus);


import "./permisstion";

app.mount("#app");
