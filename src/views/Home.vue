<template>
  <div id="home-page">
    <personal-info-section :section="this.sections.personalInfoSection"/>
    <div v-for="(section, index) in this.sections.namedSections" :key="index">
      <SectionWithTitle :section="section"/>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
const {mapState, mapActions} = createNamespacedHelpers("sections")

import PersonalInfoSection from "@/components/sections/PersonalInfoSection";
import SectionWithTitle from "@/components/sections/SectionWithTitle";

export default {
  name: 'Home',
  components: {
    SectionWithTitle,
    PersonalInfoSection
  },
  computed:{
    ...mapState(["sections"])
  },
  methods:{
    ...mapActions(["loadSections"])
  },
  created() {
    this.loadSections();
  }
}
</script>

<style scoped>

</style>
