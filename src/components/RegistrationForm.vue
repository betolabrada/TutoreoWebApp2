<template>
  <div class="card-body">
    <h3 class="mb-4">Registro</h3>
    <form>
      <simple-input type="text" id="nombre" placeholder="Nombre completo" v-model="nombre" />
      <simple-input type="email" id="correo" placeholder="Correo electrónico" v-model="correo" />
      <simple-input type="password" id="contra" placeholder="Contraseña" v-model="contra" />
      <simple-switch idSwitch="maestro" labelTxt="Soy maestro" v-model="maestro" />
      <div class="form-group text-center mb-0">
        <button v-on:click="register" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Registrarse
        </button>
      </div>
      <bootstrap-modal email="correo"></bootstrap-modal>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";
import SimpleInput from "@/components/SimpleInput.vue";
import SimpleSwitch from "@/components/SimpleSwitch.vue";
import BootstrapModal from "@/components/BootstrapModal.vue";
import db from "../db";
export default {
  name: "Register",
  components: {
    SimpleInput,
    SimpleSwitch,
    BootstrapModal
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
      alert(this.nombre + '\n' + this.correo + '\n' + this.contra + '\n' + "Maestro? " + this.maestro);
    },
    register: function(e) {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.correo, this.contra)
        .then(
          user => {
            const userData = {
              nombre: this.nombre,
              correo: this.correo
            };

            const coll = !this.maestro ? "alumnos" : "maestros";
            const pathName = !this.maestro ? "StudentRegister" : "TeacherRegister";

            user.user.updateProfile({
              displayName: this.nombre
            });

            db.collection(coll)
              .doc(user.user.uid)
              .set(userData);

            this.$router.push({ name: pathName })
              .catch(function(error) {alert("Error: ", error)});
            
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
