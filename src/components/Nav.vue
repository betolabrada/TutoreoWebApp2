<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Tuto</router-link>
        <div class="navbar-nav ml-auto">
          <router-link v-if="isLoggedIn" class="nav-item nav-link" :to="{ name: 'Dashboard' }">aprender</router-link>
          <router-link v-if="!isLoggedIn" class="nav-item nav-link" :to="{ name: 'Login' }">ingresar</router-link>
          <router-link v-if="!isLoggedIn" class="nav-item nav-link" to="/signup">regístrate</router-link>
          <button v-if="isLoggedIn" @click="logout" class="btn btn-primary">cerrar sesión</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NavBar",
  data: function() {
    return {
      isLoggedIn: false,
      email: ""
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/');
        });
      this.isLoggedIn = false,
      this.email = "";
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.email = firebase.auth().currentUser.email;
    }
  }
  
}
</script>