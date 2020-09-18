<template>
<div class="base-section">
  <div class="section-field"
  v-for="(field, index) in this.fields" :key="index">
    <div class="field-key">{{field.key}}</div>
    <div class="field-value">{{field.value}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "BaseSection",
  props:{
    fields:{
      required:true,
      type: Array
    }
  }
}
</script>

<style scoped>
.field-key, .field-value{
  display: inline-flex;
}

.field-key{
  align-self: flex-start;
}

.field-value {
 margin: auto;
}

.section-field{
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  width: 100%;
}

</style>
