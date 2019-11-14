<template>
  <div id="app">
    <Nav />
    <router-view :user="user" />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Firebase from "firebase";
export default {
  name: "app",
  data: function() {
    return {
      user: null
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.email;
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
