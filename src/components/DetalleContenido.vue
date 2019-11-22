<template>
  <div>
    <router-link class="btn btn-secondary" :to="{ name: 'DashboardMateria', params: {id_curso: $route.params.id_curso} }">Regresar</router-link>
    <div class="card bg-light">
      <div class="card-body">
        <div class="about text-center">
          <h1>{{name}}</h1>
          <h3>{{descripcion}}</h3>
              <!--button @click="upload" class="btn btn-primary"> Subir Tarea</button-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db.js";
export default {
  name: "DetalleContenido",
  data: function() {
  	return {
      name: "",
      descripcion: "",
  	}
  },
  mounted() {
    db.collection("cursos")
      .doc(this.$route.params.id_curso)
      .get()
      .then(doc => {
        if (doc.exists) {
          const contenidos = doc.data().contenidos;
          contenidos.forEach(contenido => {
            if (contenido.id_contenido == this.$route.params.id_contenido) {
              this.name = contenido.titulo;
              this.descripcion = contenido.descripcion;
            }
          });
        }
      });
  }
}
</script>