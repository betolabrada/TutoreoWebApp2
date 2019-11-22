<template>
  <div>
    <router-link router-link class="btn btn-primary ml-3 mt-3 mb-3" :to="{ name: 'DashboardMateria', params: {id_curso: $route.params.id_curso} } ">Back</router-link>
    <h1>{{name}}</h1>
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01">
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
  </div>
  
</template>

<script>
  import db from "@/db.js";
  export default {
  name: "SubirTarea",
  data: function() {
    return {
      descripcion: "",
      name: ""
    };
  },
  mounted(){

    db.collection("cursos")
      .doc(this.$route.params.id_curso)
      .get()
      .then(doc => {
        if (doc.exists) {
          const tarea = doc.data().tareas;
          tarea.forEach(tareas => {
            if (tareas.id_tarea == this.$route.params.id_tarea) {
              this.name = tareas.nombre;
              this.descripcion = tareas.descripcion;
            }
          });
        }
      });
  }
}
</script>