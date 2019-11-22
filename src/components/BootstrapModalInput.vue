<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Nuevo {{titulo}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="$emit('close', false)">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <simple-input type="text" id="titulo" placeholder="ingresa un titulo para el {{titulo}}"  />
                <simple-input type="text" id="titulo" placeholder="ingresa una descripcion para el {{titulo}}"  />
                <simple-text-area type="text" id="titulo" placeholder="ingresa una descripcion para el {{titulo}}"  />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary"  @click="$emit('close', false)">cancelar</button>
                <button type="button" class="btn btn-primary" @click="$emit('confirmed', true)">registrarme</button>
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
  data: {

  },
  props: {
    titulo: String,
  },
  data: function() {
    return {};
  },
  components: {
    SimpleInput,
    SimpleTextArea
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