<template>
	<div>
		<router-link class="btn btn-secondary" :to="{ name: 'DashboardMateria', params: {id_curso: $route.params.id_curso} }">Regresar</router-link>
	 	<div class="card bg-light">
	 		<div class="card-body">
	 			<div class="about text-center">
	 				<h1>{{name}}</h1>
        	<h3>Descripción: {{descripcion}}</h3>
	 			</div>
	 		</div>
	 	</div>
	</div>
</template>

<script>
import db from "@/db.js";

export default {
  name: "DetalleTarea",
  data: function() {
  	return {
  		id_tarea: '',
  		name: '',
      descripcion: ""
  	}
	},
	props: ['vistaMaestro'],
	goBack: function() {
	  if (this.$route.fullPath.includes("materias")) {
	    this.$router.push({ path: `/materias` });
	  } else {
	    this.$router.push({ path: `/dashboard` });
	  }
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