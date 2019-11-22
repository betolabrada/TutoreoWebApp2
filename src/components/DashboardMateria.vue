<<<<<<< HEAD
<template> 
	<div class="container">
  	<router-link class="btn btn-secondary mt-2" to="/Dashboard">Dashboard</router-link>
    <button @click="subirTarea" class="btn btn-primary ml-3 mt-2">
      Agregar Tarea
    </button>
    <button @click="subirContenido" class="btn btn-primary ml-3 mt-2">
      Agregar Contenido
    </button>
  	<h1>{{name}}</h1>
  	<div class="col-xs-6">
<h2 class="sub-header">Contenido</h2>
  <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr><!--repetir con v-for -->
                  <td class="col-md-1"><router-link class="btn btn-secondary" :to="{ name: 'DetalleContenido', params: {id_curso: id_curso, id_contenido: contenidos[0].id_contenido} } " >nombre del contenido</router-link></td>
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
                  <th class="col-md-1">#</th>
                  <th class="col-md-2">Calificacion</th>
                </tr>
              </thead>
              <tbody>
                <tr><!--repetir con v-for -->
                  <td class="col-md-1"><router-link class="btn btn-secondary" :to="{ name: 'DetalleTarea', params: {id_curso: id_curso, id_tarea: tareas[0].id_tarea} } " >nombre de la tarea</router-link></td>
                  <td class="col-md-1">nota</td>
                </tr>
              </tbody>
            </table></div>
=======
<template>
  <div class="container">
    <router-link class="btn btn-secondary" to="/Dashboard">Dashboard</router-link>
    <h1>{{name}}</h1>
    <div class="col-xs-6">
      <h2 class="sub-header">Contenido</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <tbody>
            <tr>
              <!--repetir con v-for -->
              <td class="col-md-1">
                <router-link
                  class="btn btn-secondary"
                  :to="{ name: 'DetalleContenido', params: {id_curso: id_curso, id_contenido: contenidos[0].id_contenido} } "
                >nombre del contenido</router-link>
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
              <th class="col-md-1">#</th>
              <th class="col-md-2">Calificacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!--repetir con v-for -->
              <td class="col-md-1">
                <router-link
                  class="btn btn-secondary"
                  :to="{ name: 'DetalleTarea', params: {id_curso: id_curso, id_tarea: tareas[0].id_tarea} } "
                >nombre de la tarea</router-link>
              </td>
              <td class="col-md-1">nota</td>
            </tr>
          </tbody>
        </table>
      </div>
>>>>>>> f4803e86e13cd1327097d9ec5647670ce10abc73

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
      contenidos: []
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
          });
        });
      });
  },
  mounted() {
    db.collection("tareas")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.tareas.push(doc.data());
        });
      });
    db.collection("contenidos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const contenidoData = {
            id_contenido: doc.id,
            nombre: doc.data().nombre
          };
          this.contenidos.push(contenidoData);
        });
      });
<<<<<<< HEAD

  },
  methods:{
    subirTarea: function() {
        alert("se ha subido la tarea");
      },
    subirContenido: function() {
      alert("se ha subido el contenido");
    }
=======
>>>>>>> f4803e86e13cd1327097d9ec5647670ce10abc73
  }
};
</script>