<template>
  <div class="section-with-title">
    <h3>{{ this.section.title }}</h3>
    <base-section :fields="this.section.fields"/>
  </div>
</template>

<script>
import BaseSection from "@/components/sections/BaseSection";

export default {
  name: "SectionWithTitle",
  components: {
    BaseSection
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
