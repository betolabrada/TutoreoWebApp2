<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "app",
  // mounted() {
  //   Firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.user = user.email;
  //     }
  //   });
  // },
  components: {
    Nav
  }
};
</script>

<style lang="scss">
$primary: #27ae60;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
