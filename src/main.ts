import { createApp } from "vue";
import App from "./App.vue";
import "./_preflight.css";
import authorModal from "./_authorModal";

createApp(App).use(authorModal).mount("#app");
