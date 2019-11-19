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
        name: "",
        email: ""
      },
      error: ""
    };
  },
  mounted() {
    this.user.id = firebase.auth().currentUser.uid;
    this.user.name = firebase.auth().currentUser.displayName
      ? firebase.auth().currentUser.displayName
      : firebase.auth().currentUser.email;
  }
};
</script>
