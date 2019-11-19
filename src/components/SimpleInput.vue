<template>
  <section class="form-group">
    <label class="form-control-label sr-only" :for="id"></label>
    <input
      required
      class="form-control"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value);"
      autocomplete="off"
    />
  </section>
</template>

<script>
export default {
  name: "simpleInput",
  props: ["type", "id", "placeholder","value"],
}
</script>
