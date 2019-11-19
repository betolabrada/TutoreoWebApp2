<template>
  <div class="about">
    <h1>Materias</h1>
    <ul>
      <li :key="materia.nombre" v-for="materia in materias">
        {{materia.name}}
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
    }
  },
  mounted() {
    db.collection("cursos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.materias = doc.data();
        });
      });
  }        
}
</script>