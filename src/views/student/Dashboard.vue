<template>
  <div class="container">
    <div class="col-12 alert alert-danger px-3" v-if="error">
      {{ error }}
    </div>
    <div class="text-secondary text-center">
      ¡Hola <span class="font-weight-bold text-ingo">{{ user.name }}</span
      >!
    </div>
    <table></table>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Dashboard",
  data: function() {
    return {
      user: {
        id: "",
        name: ""
      },
      error: ""
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user.id = user.uid;
        this.user.name = user.displayName ? user.displayName : user.email;
      } else {
        this.error = "Usuario no encontrado, ir a inicio";
      }
    });
  }
};
</script>
