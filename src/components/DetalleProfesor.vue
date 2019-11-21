<template>
  <div>
    <div class="container animated slideInRight">
      <div class="card bg-light">
        <div class="card-body">

          <router-link :to="{ name: 'DetalleMateria', params: {id_curso: $route.params.id_curso} }" class="btn btn-primary">
            <font-awesome-icon icon="arrow-left">Back</font-awesome-icon>
          </router-link>

          <div class="about text-center">
            <h1>{{nombre}}</h1>
            <h3>{{correo}}</h3>
            </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
  import db from "@/db.js";
  export default {
  name: "DetalleProfesor",
  data: function() {
    return {
      nombre: '',
      correo: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection("maestros")
      .where("curso.id_curso", "==", to.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.nombre = doc.data().nombre;
            vm.correo = doc.data().correo;
          });
        });
      });
  },
  goBack: function() {
    if (this.$route.fullPath.includes("materias")) {
      this.$router.push({ path: `/materias` });
    } 
    else {
      this.$router.push({ path: `/dashboard` });
    }
  }
}
</script>