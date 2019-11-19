<template>
  <div>
    <div class="animated slideInRight">
      <form class="mt-3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card bg-light">
                <div class="card-body">
                  <RegistrationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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
