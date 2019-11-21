<template>
  <div>
    <div class="container animated slideInRight">
      <div class="card bg-light">
        <div class="card-body">
          <button @click="goBack" class="btn btn-primary">
            <font-awesome-icon icon="arrow-left"></font-awesome-icon>
          </button>
          <div class="about text-center">
            <div class="col-12 alert alert-danger px-3" v-if="error">{{error}}</div>
            <h1>{{name}}</h1>
            <h3>Descripción:</h3>
            <p>{{descripcion}}</p>
            <h3>Requisitos:</h3>
            <p>{{requisitos}}</p>
            <h3>Profesor:</h3>
            <p>{{profesor}}</p>
            <simple-switch
              idSwitch="leido"
              labelTxt="He leido y acepto los requisitos"
              v-model="haLeido"
            ></simple-switch>
            <div class="mt-3">
              <button
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#confirma"
                @click="openModal(haLeido)"
                :disabled="!isLoggedIn"
              >quiero inscribirme a este curso</button>
              <button class="btn btn-secondary ml-4">ver profesor</button>
            </div>
            <p v-if="!isLoggedIn" class="text-center mt-2 mb-0">
              <router-link to="/login">inicia sesión</router-link>para poder registrarte
            </p>
          </div>
        </div>
      </div>
    </div>
    <bootstrap-modal v-if="showModal && haLeido" @close="showModal=false" @confirmed="addCurso" :nombreCurso="name"></bootstrap-modal>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/db.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SimpleSwitch from "@/components/SimpleSwitch.vue";
import BootstrapModal from "@/components/BootstrapModal.vue";
export default {
  name: "DetalleMateria",
  data() {
    return {
      id_curso: null,
      name: null,
      descripcion: null,
      requisitos: null,
      profesor: null,

      haLeido: false,
      showModal: false,
      error: "",

      isLoggedIn: false,
      user: {
        id: "",
        name: ""
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("cursos")
      .where("id_curso", "==", to.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id_curso = doc.data().id_curso;
            vm.name = doc.data().nombre;
            vm.descripcion = doc.data().descripcion;
            vm.requisitos = doc.data().requisitos;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    goBack: function() {
      if (this.$route.fullPath.includes("materias")) {
        this.$router.push({ path: `/materias` });
      } else {
        this.$router.push({ path: `/dashboard` });
      }
    },
    openModal: function() {
      if (this.haLeido) {
        this.showModal = true;
        this.error = "";
      } else {
        this.error = "Por favor confirme si está de acuerdo con los requisitos";
      }
    },
    addCurso: function() {
      db.collection("alumnos")
        .doc(this.user.id)
        .update({
          cursos_inscritos: firebase.firestore.FieldValue.arrayUnion(this.id_curso)
        })
        .then(() => {
          alert("te has inscrito al curso");
          this.$router.push("/dashboard");
        });
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      this.user.id = firebase.auth().currentUser.uid;
      this.user.name = firebase.auth().currentUser.displayName
        ? firebase.auth().currentUser.displayName
        : firebase.auth().currentUser.email;
      this.isLoggedIn = true;
    } else {
      this.user = {};
      this.isLoggedIn = false;
    }

    db.collection("maestros")
      .where("curso.id_curso", "==", this.$route.params.id_curso)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.profesor = doc.data().nombre;
        });
      });
  },
  components: {
    FontAwesomeIcon,
    SimpleSwitch,
    BootstrapModal
  }
};
</script>