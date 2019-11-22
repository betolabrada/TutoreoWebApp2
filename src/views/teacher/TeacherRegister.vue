<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="text-center">
        <h1>¡Hola profesor: {{userName}}!</h1>
        <p>
          Te damos las gracias por unirte a nuestra plataforma Tuto. Necesitamos que nos proporciones más información
          acerca del curso que estarás impartiendo
        </p>
      </div>
      <div class="container-fluid">
        
        <form>
          <div class="col-10 form-group">
            <h3>Curso:</h3>
            <simple-input
              type="text"
              id="nombreCurso"
              placeholder="escribe aquí un nombre identificador del curso (Ej.'Matemáticas Avanzadas')"
              v-model="curso.nombre"
            ></simple-input>
          </div>
          <div class="col-10 form-group">
            <h3>Descripción</h3>
            <simple-text-area
              type="text"
              id="nombreCurso"
              placeholder="breve descripción de los contenidos cubiertos en el curso"
              v-model="curso.descripcion"
            ></simple-text-area>
          </div>
          <div class="col-10 form-group">
            <h3>Requisitos:</h3>
            <simple-text-area
              type="text"
              id="nombreCurso"
              placeholder="escribe aquí los conocimientos previos para tomar el curso (si es que lo hay) "
              v-model="curso.requisitos"
            ></simple-text-area>
          </div>
          <div class="form-group text-center">
            <button @click="registerCurso" class="btn btn-primary">completar registro</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import SimpleInput from "@/components/SimpleInput.vue";
import SimpleTextArea from "@/components/SimpleTextArea.vue";
import db from "@/db.js";
export default {
  name: "TeacherRegister",
  data: function() {
    return {
      curso: {
        nombre: "",
        descripcion: "",
        requisitos: "",
        contenido: [],
        tareas: [],
      },
      dataSuccess: ""
    };
  },
  components: {
    SimpleInput,
    SimpleTextArea
  },
  methods: {
    registerCurso: function() {
      db.collection("cursos")
        .add(this.curso)
        .then(docRef => {
          this.curso.id_curso = docRef.id;
          // agregar id de curso
          docRef.set({id_curso: this.curso.id_curso}, { merge: true });
          // completar curso a maestro
          db.collection("maestros")
            .doc(this.userID)
            .set({curso: this.curso}, { merge: true })
            .then(() => {
              alert("curso registrado");
              this.$router
                .push({
                  name: "Dashboard"
                })
                .catch(function(error) {
                  alert("Error: ", error);
                });
            });
        });
    }
  },
  computed: {
    userName() {
      return firebase.auth().currentUser.displayName;
    },
    userID: function() {
      return firebase.auth().currentUser.uid;
    }
  }
};
</script>