<template>
  <div>
  	<h1>{{name}}</h1>
  </div>
</template>

<script>
import db from "@/db.js";

export default {
  name: "DetalleMateria",
  data: function() {
  	return {
  		id_tarea: '',
  		name: ''
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
  }
}
</script>