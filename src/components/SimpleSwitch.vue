<template>
  <div class="custom-control custom-switch">
    <input
      type="checkbox"
      class="custom-control-input"
      :id="idSwitch"
      :checked="checked"
      @change="$emit('change', $event.target.checked);"
    />
    <label class="custom-control-label" :for="idSwitch">{{ labelTxt }}</label>
  </div>
</template>

<script>
export default {
  name: "SimpleSwitch",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    idSwitch: String,
    labelTxt: String,
    checked: Boolean
  }
};
</script>
