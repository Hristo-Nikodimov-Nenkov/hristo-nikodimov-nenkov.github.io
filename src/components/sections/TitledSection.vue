<template>
  <div class="titled-section">
    <h2 class="section-name">{{section.title}}</h2>
    <hr>
    <div class="section-fields">
      <div class="section-field" v-for="(field, index) in this.section.fields" :key="index">
        {{ field.title }} - {{ field.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitledSection",
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.section-name{
  background-color: #cccccc;
  margin-bottom: 0;
}

hr{
  margin-top: 0px;
  border: 1px solid #222222;
}
</style>
