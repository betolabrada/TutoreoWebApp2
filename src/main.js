import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import db from "./db";

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
  faEnvelope,
  faCalendar,
  faGraduationCap,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faEdit,
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope,
  faCalendar,
  faGraduationCap,
  faArrowLeft
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  db
}).$mount("#app");
