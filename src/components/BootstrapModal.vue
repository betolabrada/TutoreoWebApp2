<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Mensaje de confirmación</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="$emit('close', false)">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>¿Deseas unirte al curso: {{nombreCurso}}?</p>
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
export default {
  props: {
    nombreCurso: String
  },
  data: function() {
    return {};
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