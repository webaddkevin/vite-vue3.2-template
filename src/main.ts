import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as CustomPlugins from "./plugins";
import appMixin from './mixin';

const app = createApp(App);
app.use(CustomPlugins);
app.use(router);
app.mount("#app");

appMixin(app);
