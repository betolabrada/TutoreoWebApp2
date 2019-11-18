<template>
  <section class="form-group">
    <label class="form-control-label sr-only" :for="id"></label>
    <input
      required
      class="form-control"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      @input="updateValue($event.target.value)"
    />
  </section>
</template>

<script>
export default {
  name: "simpleInput",
  props: ["type", "id", "placeholder","value"],
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    }
  }
}
</script>
