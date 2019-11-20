<template>
  <div class="container">
    <router-link class="btn btn-secondary" to="/Dashboard">Dashboard</router-link>
    <ul class="list-group mt-4">
      <li class="list-group-item active text-center">Todas las materias</li>
      <li
        :key="materia.id_curso"
        v-for="materia in materias"
        class="list-group-item list-group-item-action"
      >
        <router-link
          :to="{ path: `/materias/materia/${materia.id_curso}` } "
        >{{materia.nombre}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import firebase from "firebase";
import db from "@/db.js";
export default {
  data: function() {
    return {
      materias: []
    };
  },
  mounted() {
    db.collection("cursos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.materias.push(doc.data());
        });
      });
  }
};
</script>