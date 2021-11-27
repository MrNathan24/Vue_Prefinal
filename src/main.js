import { createApp } from "vue";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// .component("fa", FontAwesomeIcon)
library.add(fas);
createApp(App).use(store).use(router).mount("#app");

