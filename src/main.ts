import { createApp } from "vue";
import App from "./App.vue";
import "./_preflight.css";
import authorModal from "./_authorModal";
import projectConfig from "./_projectConfig";

createApp(App).use(projectConfig).use(authorModal).mount("#app");
