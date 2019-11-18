<template>
  <div class="custom-control custom-switch">
    <input
      type="checkbox"
      class="custom-control-input"
      :id="idSwitch"
    />
    <label class="custom-control-label" :for="idSwitch">{{ labelTxt }}</label>
  </div>
</template>

<script>
export default {
  name: "SimpleSwitch",
  props: ["idSwitch", "labelTxt"]
};
</script>
