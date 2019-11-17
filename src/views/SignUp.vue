<template>
  <div class="container">
    <h1>Registro</h1>
    
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card bg-light">
          <RegistrationForm />
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
import RegistrationForm from "../components/RegistrationForm.vue"
export default {
  name: "SignUp",
  components: {
    RegistrationForm
  }
};
</script>

<style></style>
