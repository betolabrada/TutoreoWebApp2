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
  components: {
    Nav
  }
};
</script>

<style lang="scss">
$primary: #27ae60;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
