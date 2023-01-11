import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./index.css";
//
import LearnVueButtons from "lv-buttons";
import "lv-buttons/dist/style.css";
// import "../node_modules/lv-buttons/dist/style.css";
// E:\Explain\explain-vue-cli\vue-dark-mode\node_modules\lv-buttons\dist\style.css
createApp(App).use(store).use(LearnVueButtons).use(router).mount("#app");
