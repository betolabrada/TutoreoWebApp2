<template>
  <h1>tarea</h1>
</template>

<script>
  //import db from "@/db.js";
  export default {
  name: "SubirTarea",
  data: function() {
    return {
      id_curso: "",
      name: "",
      tareas: [],
      contenidos: [],
      maestro: "",
    };
  }
}
</script>