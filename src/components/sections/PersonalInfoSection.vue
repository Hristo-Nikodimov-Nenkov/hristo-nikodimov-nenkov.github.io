<template>
  <div class="personal-info-section">
    <div class="photo">
      <img :src="this.section.imageUrl" alt="Photo">
    </div>
    <base-section :fields="this.section.fields"/>
  </div>
</template>

<script>
import BaseSection from "@/components/sections/BaseSection";

export default {
  name: "PersonalInfoSection",
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
