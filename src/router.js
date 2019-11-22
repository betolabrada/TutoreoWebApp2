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
import DashboardMateria from "./components/DashboardMateria.vue";
import DetalleTarea from "./components/DetalleTarea.vue";
import DetalleContenido from "./components/DetalleContenido.vue";
import DetalleProfesor from "./components/DetalleProfesor.vue";
import SubirTarea from "./components/SubirTarea.vue";

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
      path: "/dashboard/materia/:id_curso/:vista_maestro",
      name: "DashboardMateria",
      component: DashboardMateria
    },
    {
      path: "/materias/materia/:id_curso",
      name: "DetalleMateria",
      component: DetalleMateria
    },
    {
      path: "/dashboard/materia/:id_curso/tarea/:id_tarea",
      name: "DetalleTarea",
      component: DetalleTarea
    },
    {
      path: "/dashboard/profesor/:id_profesor",
      name: "DetalleProfesor",
      component: DetalleProfesor
    },
    {
      path: "/dashboard/materia/:id_curso/contenido/:id_contenido",
      name: "DetalleContenido",
      component: DetalleContenido
    },
    {
      path: "/dashboard/materia/:id_curso/tarea/:id_tarea",
      name: "SubirTarea",
      component: SubirTarea
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

