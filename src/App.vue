<template>
  <div id="app">
    <Nav :key="$route.fullPath" />
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
import Nav from "./components/Nav";
export default {
  name: "app",
  data: function() {
    return {
      user: {},
      userIsLoggedIn: false,
      email: "",
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.userIsLoggedIn = true;
        this.email = user.email;
      }
      else {
        this.user = {};
        this.userIsLoggedIn = false;
        this.email = "";
      }
    });
  },
  components: {
    Nav
  }
};
</script>

<style lang="scss">
$primary: #27ae60;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
