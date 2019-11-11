import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import About from "./views/About";
import Materias from "./views/Materias";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/materias",
      name: "materias",
      component: Materias
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
