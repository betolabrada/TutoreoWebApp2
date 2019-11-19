<template>
  <div>
    <div class="animated slideInRight">
      <form class="mt-3" @submit.prevent="login">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card bg-light">
                <div class="card-body">
                  <h3 class="font-weight-light mb-4">Inicia Sesión</h3>
                  <section class="form-group">
                    <div
                      class="col-12 alert alert-danger px-3"
                      v-if="error"
                    >
                      {{error}}
                    </div>
                    <label
                      class="form-control-label sr-only"
                      for="email"
                    >Correo Electrónico</label>
                    <input
                      required
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Correo Electrónico"
                      v-model="correo"
                    />
                  </section>
                  <section class="form-group">
                    <input
                      required
                      class="form-control"
                      type="password"
                      placeholder="Contraseña"
                      v-model="contrasenia"
                    />
                  </section>
                  <div class="form-group text-right mb-0">
                    <button
                      class="btn btn-primary"
                      type="submit"
                    >Log in</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <p class="text-center mt-2">
        or
        <router-link to="/register">register</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "Login",
  data: function() {
    return {
      correo: "",
      contrasenia: "",
      error: "",
    };
  },
  methods: {
    login: function() {
      const info = {
        email: this.correo,
        password: this.contrasenia
      }

      Firebase.auth()
      .signInWithEmailAndPassword(info.email, info.password)
      .then(
        () => {
          this.$router.push("materias")
        }, error => {
          this.error = error.message;
        }
      )
    }


  }
};
</script>
