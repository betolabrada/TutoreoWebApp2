<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Nuevo {{tipo}}</h5>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="col-10 form-group">
                    <simple-input
                      type="text"
                      id="titulo"
                      :placeholder="'ingresa un titulo para: ' + tipo"
                      v-model="dataToAdd.titulo"
                    />
                  </div>
                </div>
                <div class="container">
                  <div class="col-10 form-group">
                    <simple-text-area
                      type="text"
                      id="titulo"
                      :placeholder="'Escribe  descripcion de: ' + tipo"
                      v-model="dataToAdd.descripcion"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="ingresado"
                >agregar</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="$emit('close', false)"
                >cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
import SimpleTextArea from "@/components/SimpleTextArea.vue";
export default {
  data:function() {
    return {
      dataToAdd: {
        tipo: "",
        titulo: "",
        descripcion: ""
      }
    }
  },
    
  props: {
    tipo: String
  },
  components: {
    SimpleInput,
    SimpleTextArea
  },
  methods: {
    ingresado: function() {
      if (this.tipo == "contenido") {
        this.$emit('contenidoIngresado', this.dataToAdd);
      }
      else {
        this.$emit('tareaIngresada', this.dataToAdd);
      }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>