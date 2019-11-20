import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import About from "./views/About.vue";
import Materias from "./views/Materias.vue";
import Dashboard from "./views/student/Dashboard.vue";
import TeacherRegister from "./views/teacher/TeacherRegister.vue";
import StudentRegister from "./views/student/StudentRegister.vue";
import DetalleMateria from "./components/DetalleMateria.vue";
import BootstrapModal from "./components/BootstrapModal.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/materias",
      name: "Materias",
      component: Materias
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/teacher/register",
      name: "TeacherRegister",
      component: TeacherRegister,
    },
    {
      path: "/student/register",
      name: "StudentRegister",
      component: StudentRegister,
    },
    {
      path: "/dashboard/materia/:id_curso",
      name: "DetalleMateria",
      component: DetalleMateria
    },
    {
      path: "/materias/materia/:id_curso",
      name: "DetalleMateria",
      component: DetalleMateria
    },
    {
      path:"/pruebitas",
      name:"PruebaModal",
      component: BootstrapModal
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

