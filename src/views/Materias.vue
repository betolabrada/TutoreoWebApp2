<template>
  <div class="container">
    <router-link v-if="isLoggedIn" class="btn btn-secondary" to="/Dashboard">Dashboard</router-link>
    <ul class="list-group mt-4">
      <li class="list-group-item active text-center">Todas las materias</li>
      <li
        :key="materia.id_curso"
        v-for="materia in available"
        class="list-group-item list-group-item-action"
      >
        <router-link
          :to="{ name: 'DetalleMateria', params: {id_curso: materia.id_curso} } "
        >{{materia.nombre}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/db.js";
export default {
  name: "Materias",
  data: function() {
    return {
      materias: [],
      materias_inscritas: [],
      isLoggedIn: false
    };
  },
  computed: {
    available: function() {
      return this.materias.filter(materia => {
        return !this.materias_inscritas.includes(materia.id_curso);
      });
    }
  },
  mounted() {
    db.collection("cursos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.materias.push(doc.data());
        });
      });

    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      db.collection("alumnos")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then(doc => {
          this.materias_inscritas = doc.data().cursos_inscritos;
        });
    } else {
      this.isLoggedIn = false;
    }
  }
};
</script>