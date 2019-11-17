<template>
  <div class="card-body">
    <h3 class="mb-4">Registro</h3>
    <form>
      <section class="form-group">
        <label class="form-control-label sr-only" for="nombre"></label>
        <input
          required
          class="form-control"
          type="text"
          id="nombre"
          placeholder="Nombre(s)"
          v-model="nombre"
        />
      </section>
      <section class="form-group">
        <input
          required
          class="form-control"
          type="email"
          id="correo"
          placeholder="Correo Electrónico"
          v-model="correo"
        />
      </section>
      <section class="form-group">
        <input
          required
          class="form-control"
          type="password"
          id="contrasenia"
          placeholder="Contraseña"
          v-model="contra"
        />
      </section>
      <div class="custom-control custom-switch">
        <input
          v-model="maestroActivo"
          type="checkbox"
          class="custom-control-input"
          id="togglerMaestro"
        />
        <label class="custom-control-label" for="togglerMaestro">Soy maestro</label>
      </div>
      <div class="form-group text-center mb-0">
        <button v-on:click="register" class="btn btn-primary" type="submit">Registrarse</button>
      </div>
    </form>
  </div>
</template>
<script>
import Firebase from "firebase";
import db from "../db";
export default {
  name: "Register",
  data: function() {
    return {
      nombre: "",
      correo: "",
      contra: "",
      maestroActivo: false
    };
  },
  methods: {
    register: function(e) {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.correo, this.contra)
        .then(
          user => {
            alert(`Cuenta creada para ${user.user.email}`);
            const userData = {
              nombre: this.nombre,
              correo: this.correo,
            };
            if (!this.maestroActivo) {
              db.collection("alumnos")
                .doc(user.user.uid)
                .set(userData);
              this.$router.push("student/register");
            } else {
              db.collection("maestros")
                .doc(user.user.uid)
                .set(userData);
              this.$router.push("teacher/register");
            }
          },
          err => {
            alert(err);
          }
        );
      e.preventDefault();
    }
  }
};
</script>