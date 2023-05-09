import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18n } from "@/plugins/i18n";
import "swiper/css";
import "swiper/css/autoplay";
import OhVueIcons from "@/plugins/icons";

const app = createApp(App);
app.use(i18n);
app.component("v-icon", OhVueIcons);
app.mount("#app");
