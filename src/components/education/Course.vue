<template>
   <div>
      {{ name }} -
      {{ instance.toLocaleDateString("en-US", {year: "numeric", month: "long"}) }} -
      {{grade.toFixed(2)}} -
      <a v-if="certificateUrl" :href="certificateUrl">Certificate</a>
   </div>
</template>

<script>
export default {
   name: "EducationCourse",
   props: {
      name: String,
      instance: Date,
      grade: Number,
      certificateUrl: String
   }
}
</script>

<style scoped>

</style>
