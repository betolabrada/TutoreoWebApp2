<template>
  <div v-if="user" class="container">
    <h1>Completa tu registro</h1>
    <div>
      <h3>Bienvenido(a) {{user}}</h3>
    </div>
    <form class="mt-4">
      <section class="form-group row">
        <label for="dob" class="col-sm-2 col-form-label">Fecha de nacimiento:</label>
        <div class="input-group col-sm-6">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon icon="calendar" />
            </span>
          </div>
          <input id="dob" class="form-control col-sm-10" type="date" v-model="dob" />
        </div>
      </section>
      <section class="form-group row">
        <label for="school" class="col-sm-2 col-form-label">Escolaridad:</label>
        <div class="input-group col-sm-6">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon icon="graduation-cap" />
            </span>
          </div>
          <select id="school" class="form-control" v-model="school">
            <option>Secundaria</option>
            <option>Preparatoria</option>
            <option>Universidad</option>
            <option>Maestría</option>
          </select>
        </div>
      </section>
      <section class="form-group row">
        <label for="area" class="col-sm-2 col-form-label">Área que más te interesa:</label>
        <div class="input-group col-sm-6">
          <select id="area" class="form-control" v-model="area">
            <option>Animación Digital</option>
            <option>Desarrollo Web</option>
            <option>Programación</option>
            <option>Arquitectura</option>
            <option>Derecho</option>
            <option>Comunicación</option>
            <option>Ingeniería Civil</option>
            <option>Ingeniería Mecánica</option>
            <option>Relaciones Internacionales</option>
            <option>Mercadotecnia</option>
            <option>Finanzas</option>
          </select>
        </div>
      </section>
      <EstadoForm />
      <div class="form-group">
        <button @click="finishRegister" class="btn btn-primary">Completar Registro</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../../db";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EstadoForm from "@/components/EstadoForm";
export default {
  name: "student register",
  components: {
    FontAwesomeIcon,
    EstadoForm
  },
  data: function() {
    return {
      dob: null,
      school: "",
      area: "",
      areasDeInteres: [
        
      ],
      user: null
    }
  },
  methods: {
    finishRegister: function() {
      const data = {
        fechaDeNacimiento: this.dob,
        escolaridad: this.school,
        areaDeInteres: this.area,
      };
      this.user = firebase.auth().currentUser;
      if (this.user)
      {
        db.collection("alumnos").doc(this.user.uid).update(data);
      }
    }
  }
};
</script>