<template>
  <div class="container">
    <router-link class="btn btn-secondary mt-2" to="/Dashboard">Dashboard</router-link>
    <div v-if="$route.params.vista_maestro" class="wrapper control">
      <button
        @click="showModal = true; tipo='tarea'"
        data-toggle="modal"
        data-target="#tareaModal"
        class="btn btn-primary ml-3 mt-2"
      >Nueva Tarea</button>
      <button
        @click="showModal = true; tipo='contenido'"
        data-toggle="modal"
        data-target="#contenidoModal"
        class="btn btn-primary ml-3 mt-2"
      >Nuevo Contenido</button>
    </div>
    <h1>{{name}}</h1>
    <h2>Profesor: {{maestro}}</h2>
    <div class="col-xs-6">
      <h2 class="sub-header">Contenido</h2>
      <div class="table-responsive">
        <table class="table table-striped">
          <tbody>
            <tr :key="contenido.id_contenido" v-for="contenido in contenidos">
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
              <td class="col-md-1">
                <router-link
                  class="btn btn-secondary"
                  :to="{ name: 'DetalleTarea', params: {id_curso: id_curso, id_tarea: tarea.id_tarea} } "
                >{{tarea.titulo}}</router-link>
              </td>
              <td class="col-md-1">nota</td>
              <td class="col-md-1" v-if="!$route.params.vista_maestro">
                <router-link
                  class="btn btn-info"
                  :to="{ name: 'SubirTarea', params: {id_curso: id_curso, id_tarea: tarea.id_tarea}}"
                >subir tarea</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="push"></div>
      <bootstrap-modal-input
        id="contenidoModal"
        v-if="showModal"
        @close="showModal=false"
        @contenidoIngresado="subirContenido"
        @tareaIngresada="subirTarea"
        :tipo="tipo"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/db.js";
import BootstrapModalInput from "@/components/BootstrapModalInput.vue";
export default {
  name: "DashboardMateria",
  data: function() {
    return {
      id_curso: "",
      name: "",
      tareas: [],
      contenidos: [],
      maestro: "",
      showModal: false,
      tipo: ""
    };
  },
  components: {
    BootstrapModalInput
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
    db.collection("cursos")
      .where("id_curso", "==", this.$route.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.exists) {
            this.id_curso = doc.data().id_curso;
            this.name = doc.data().nombre;
            this.contenidos = doc.data().contenidos;
            this.tareas = doc.data().tareas;
          }
        });
      });

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
    subirContenido: function(dataToAdd) {
      const contenido = {
        titulo: dataToAdd.titulo,
        descripcion: dataToAdd.descripcion
      };
      db.collection("cursos")
        .doc(this.$route.params.id_curso)
        .update({
          contenidos: firebase.firestore.FieldValue.arrayUnion(contenido)
        })
        .then(() => {
          alert("materal subido exitosamente a sistema");
          this.$router.push({
            name: "DashboardMateria",
            params: {
              id_curso: this.$route.params.id_curso,
              vista_maestro: true
            }
          });
        });
    },
    subirTarea: function(dataToAdd) {
      const tarea = {
        titulo: dataToAdd.titulo,
        descripcion: dataToAdd.descripcion
      };
      db.collection("cursos")
        .doc(this.$route.params.id_curso)
        .update({
          tareas: firebase.firestore.FieldValue.arrayUnion(tarea)
        })
        .then(() => {
          alert("tarea subida exitosamente a sistema");
          this.$router.push({
            name: "DashboardMateria",
            params: {
              id_curso: this.$route.params.id_curso,
              vista_maestro: true
            }
          });
        });
    },
    subirTareaAlumno: function() {
      alert("Se subirá tarea");
    }
  }
};
</script>