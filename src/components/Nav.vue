<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Tuto</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" :to="{ name: 'Login' }">ingresar</router-link>
          <router-link class="nav-item nav-link" to="/signup">regístrate</router-link>
          <button @click="logout" class="btn btn-primary">cerrar sesión</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import firebase from "firebase";
export default {
  name: "NavBar",
  data: function() {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  methods: {

  }
}
</script>