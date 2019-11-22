<template>
  <div class="container">
    <router-link class="btn btn-secondary mt-2" to="/Dashboard">Dashboard</router-link>
    <div v-if="$route.params.vista_maestro" class="wrapper control">
      <button @click="subirTarea" class="btn btn-primary ml-3 mt-2">Nueva Tarea</button>
      <button @click="subirContenido" class="btn btn-primary ml-3 mt-2">Nuevo Contenido</button>
    </div>
    <h1>{{name}}</h1>
    <h2>Profesor: {{maestro}}</h2>
    <div class="col-xs-6">
      <h2 class="sub-header">Contenido</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <tbody>
            <tr :key="contenido.id_contenido" v-for="contenido in contenidos" >
              <!--repetir con v-for -->
              <td class="col-md-1">
                <router-link
                  class="btn btn-secondary"
                  :to="{ name: 'DetalleContenido', params: {id_curso: id_curso, id_contenido: contenido.id_contenido} } "
                >{{contenido.titulo}}</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-6">
      <h2 class="sub-header">Tareas</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="col-md-1">Nombre Tarea</th>
              <th class="col-md-2">Calificacion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!tareas">De momento no hay tareas disponibles para este curso</tr>
            <tr :key="tarea.id_tarea" v-for="tarea in tareas">
              <!--repetir con v-for -->
              <td  class="col-md-1">
                <router-link
                  class="btn btn-secondary"
                  :to="{ name: 'DetalleTarea', params: {id_curso: id_curso, id_tarea: tarea.id_tarea} } "
                >{{tarea.nombre}}</router-link>
              </td>
              <td class="col-md-1">nota</td>
              <td class="col-md-1" v-if="!$route.params.vista_maestro">
                <router-link class="btn btn-info" :to="{ name: 'SubirTarea', params: {id_curso: id_curso, id_tarea: tarea.id_tarea}}">subir tarea</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="push"></div>
    </div>
  </div>
</template>

<script>
import db from "@/db.js";
export default {
  name: "DashboardMateria",
  data: function() {
    return {
      id_curso: "",
      name: "",
      tareas: [],
      contenidos: [],
      maestro: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("cursos")
      .where("id_curso", "==", to.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id_curso = doc.data().id_curso;
            vm.name = doc.data().nombre;
            vm.contenidos = doc.data().contenidos;
            vm.tareas = doc.data().tareas;
          });
        });
      });
  },
  mounted() {

    db.collection("maestros")
      .where("curso.id_curso", "==", this.$route.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.maestro = doc.data().nombre;
        });
      });
  },
  methods: {
    subirTarea: function() {
      alert("se ha subido la tarea");
    },
    subirContenido: function() {
      alert("se ha subido el contenido");
    },
    subirTareaAlumno: function() {
      alert("Se subirá tarea");
    }
  }
};
</script>