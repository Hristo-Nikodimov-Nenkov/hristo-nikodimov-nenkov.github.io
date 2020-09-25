<template>
  <div id="home-page">
    <personal-info :personal-info="this.sections.personalInfo"/>
    <div v-for="(section, index) in this.sections.namedSections" :key="index">
      <titled-section :section="section"/>
    </div>
  </div>
</template>

<script>
import PersonalInfo from "@/components/sections/PersonalInfo";
import TitledSection from "@/components/sections/TitledSection";

import {createNamespacedHelpers} from "vuex"

const {mapState, mapActions} = createNamespacedHelpers("sections");

export default {
  name: 'Home',
  components: {
    PersonalInfo,
    TitledSection
  },
  computed: {
    ...mapState(["sections"])
  },
  methods: {
    ...mapActions(["loadSections"])
  },
  created() {
    this.loadSections();
  }
}
</script>

<style scoped>

</style>
