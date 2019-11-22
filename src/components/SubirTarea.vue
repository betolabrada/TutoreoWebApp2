<template>
  <div>
    <router-link router-link class="btn btn-primary ml-3 mt-3" :to="{ name: 'DashboardMateria', params: {id_curso: $route.params.id_curso} } ">Back</router-link>
    <h1>tarea</h1>

  </div>
  
</template>

<script>
  import db from "@/db.js";
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
  },
  beforeRouteEnter(to, from, next) {
    db.collection("cursos")
      .where("id_curso", "==", to.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id_curso = doc.data().id_curso;
            vm.name = doc.data().nombre;
            vm.contenidos = doc.data().contenidos;
            vm.tareas = doc.data().tareas;
          });
        });
      });
  }
}
</script>