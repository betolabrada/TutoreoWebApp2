<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="text-center">
        <h1>¡Hola alumno: {{userName}}!</h1>
        <p>Te damos las gracias por unirte a nuestra plataforma Tuto.</p>
      </div>
      <div class="col-10 form-group text-center">
        <button @click="finishRegister" class="btn btn-primary">comenzar a aprender</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/db.js";
export default {
  name: "StudentRegister",
  data: function() {
    return {
      cursos_inscritos: []
    };
  },
  methods: {
    finishRegister: function() {
      db.collection("alumnos")
        .doc(this.userID)
        .set({ cursos_inscritos: this.cursos_inscritos }, { merge: true })
        .then(() => {
          alert("Bienvenido");
          this.$router.push("/dashboard");
        });
    }
  },
  computed: {
    userName: function() {
      return firebase.auth().currentUser.displayName;
    },
    userID: function() {
      return firebase.auth().currentUser.uid;
    }
  }
};
</script>