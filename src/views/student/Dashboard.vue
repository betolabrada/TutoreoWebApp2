<template>
  <div class="container">
    <div class="col-12 alert alert-danger px-3" v-if="error">{{ error }}</div>
    <div v-if="user.name">
      <div class="text-secondary text-center">
        ¡Hola
        <span class="font-weight-bold text-ingo">{{ user.name }}</span>!
      </div>
      <div class="list-group">
        <router-link v-if="!vistaMaestro" class="btn btn-secondary" :to="{name:'Materias', params: {materiasDeAlumno: materias}}">Añadir Materia</router-link>
        <a href="#" class="list-group-item list-group-item-action active text-center">Tus materias</a>
        <li
          :key="materia.id_curso"
          v-for="materia in materias"
          class="list-group-item list-group-item-action"
        >
          <router-link
            :to="{ name: 'DashboardMateria', params: {id_curso: materia.id_curso, vista_maestro: vistaMaestro} } "
          >{{materia.nombre}}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/db.js";
export default {
  name: "Dashboard",
  data: function() {
    return {
      user: {
        id: "",
        name: "",
        email: ""
      },
      error: "",
      materias: [],
      vistaMaestro: false
    };
  },
  methods: {
    redirect: function() {
      alert("redireccionando");
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      this.user.id = firebase.auth().currentUser.uid;
      this.user.name = firebase.auth().currentUser.displayName
        ? firebase.auth().currentUser.displayName
        : firebase.auth().currentUser.email;
      this.error = "";

      let idsStudentInCurso = [];
      db.collection("alumnos")
        .doc(this.user.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.vistaMaestro = false;
            idsStudentInCurso = doc.data().cursos_inscritos;
            db.collection("cursos")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  idsStudentInCurso.forEach(id => {
                    if (doc.id === id) {
                      this.materias.push({
                        id_curso: doc.id,
                        nombre: doc.data().nombre
                      });
                    }
                  });
                });
              });
          }

          else {
            db.collection("maestros")
              .doc(this.user.id)
              .get()
              .then(doc => {
                this.materias.push(doc.data().curso);
                this.vistaMaestro = true;
              });
          }
        });
        
    } else {
      this.error = "Inicia Sesión para ver esta página";
      this.user = {};
    }
  }
  // created() {
  //   db.collection("cursos")
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         this.materias.push({
  //           id_curso: doc.id,
  //           nombre: doc.data().nombre
  //         });
  //       });
  //     });
  // }
};
</script>
