<template>
<div class="mt-3">
  <div class="container text-center animated slideInUp">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h4 class="display-4 text-primary mt-3 mb-2">Bienvenido a Tuto</h4>
        <p class="lead">
          Tuto es una aplicación web de tutoreo entre alumnos y profesores. Podrás aprender algo nuevo o reforzar
          los conceptos que ya has visto anteriormente en tus materias favoritas. ¡Pulsa el botón de registrar para 
          comenzar a aprender!
        </p>

        <router-link
          class="btn btn-outline-primary mr-2"
          to="/signup"
        >Registrarse</router-link>
        <router-link
          class="btn btn-outline-primary mr-2"
          to="/login"
        >Iniciar Sesión</router-link>
        <router-link
          class="btn btn-primary"
          to="/materias"
        >Materias Disponibles</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home"
};
</script>

