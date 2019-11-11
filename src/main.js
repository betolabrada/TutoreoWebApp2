import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "animate.css/animate.css";


import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faEdit,
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope 
} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit,
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope 
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
