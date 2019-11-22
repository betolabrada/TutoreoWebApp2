<template>
  <div>
    <router-link class="btn btn-secondary" :to="{ name: 'DashboardMateria', params: {id_curso: $route.params.id_curso} }">Regresar</router-link>
    <div class="card bg-light">
      <div class="card-body">
        <div class="about text-center">
          <!-- <h1>{{contenidos[0].nombre}}</h1> -->
              <h3>Descripción:</h3>
              <!--button @click="upload" class="btn btn-primary"> Subir Tarea</button-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	// import db from "@/db.js";
export default {
  name: "DetalleContenido",
  // data: function() {
  // 	return {
  // 		contenidos: []
  // 	}
  // },
  // mounted() {
  //   db.collection("contenidos")
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         const contenidoData = {
  //         	id_contenido: doc.id,
  //         	nombre: doc.data().nombre
  //         	}
  //         this.contenidos.push(contenidoData);
  //       });
  //     });
  // }
}
</script>