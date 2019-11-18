<template>
  <div class="card-body">
    <h3 class="mb-4">Registro</h3>
    <form>
      <simple-input type="text" id="nombre" placeholder="Nombre completo" v-model="nombre" />
      <simple-input type="email" id="correo" placeholder="Correo electrónico" v-model="correo" />
      <simple-input type="password" id="contra" placeholder="Contraseña" v-model="contra" />
      <simple-switch idSwitch="maestro" labelTxt="Soy maestro" v-model="maestro" />
      <div class="form-group text-center mb-0">
        <button v-on:click="print" class="btn btn-primary" type="submit">
          Registrarse
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";
import SimpleInput from "@/components/SimpleInput.vue";
import SimpleSwitch from "@/components/SimpleSwitch.vue";
import db from "../db";
export default {
  name: "Register",
  components: {
    SimpleInput,
    SimpleSwitch
  },
  data: function() {
    return {
      nombre: "",
      correo: "",
      contra: "",
      maestro: false
    };
  },
  methods: {
    print: function() {
      alert(this.correo);
    },
    register: function(e) {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.correo, this.contra)
        .then(
          user => {
            alert(`Cuenta creada para ${user.user.email}`);
            const userData = {
              nombre: this.nombre,
              correo: this.correo
            };
            if (!this.maestro) {
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
