<template>
  <div>
  	<h1>{{contenidos[0].nombre}}</h1>
  </div>
</template>

<script>
	import db from "@/db.js";
export default {
  name: "DetalleContenido",
  data: function() {
  	return {
  		contenidos: []
  	}
  },
  mounted() {
    db.collection("contenidos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const contenidoData = {
          	id_contenido: doc.id,
          	nombre: doc.data().nombre
          	}
          this.contenidos.push(contenidoData);
        });
      });
  }
}
</script>