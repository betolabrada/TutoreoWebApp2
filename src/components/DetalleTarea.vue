<template>
	<div>
		<router-link class="btn btn-secondary" :to="{ name: 'DashboardMateria', params: {id_curso: $route.params.id_curso} }">Regresar</router-link>
	 	<div class="card bg-light">
	 		<div class="card-body">
	 			<div class="about text-center">
	 				<h1>{{name}}</h1>
        			<h3>Descripción:</h3>
        			<h3>Requisitos:</h3>
        			<h3>Profesor:</h3>
        			<button @click="upload" class="btn btn-primary"> Subir Tarea</button>
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
  		name: ''
  	}
  },
  methods: {
    upload: function() {
      alert("Tarea subida");
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection("tareas")
      .where("id_tarea", "==", to.params.id_tarea)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id_tarea = doc.data().id_tarea;
            vm.name = doc.data().nombre;
          });
        });
      });
  },
	goBack: function() {
	  if (this.$route.fullPath.includes("materias")) {
	    this.$router.push({ path: `/materias` });
	  } else {
	    this.$router.push({ path: `/dashboard` });
	  }
}
}
</script>