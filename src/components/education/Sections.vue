<template>
   <div>
      <Section v-for="(section, index) in modules"
               :key="index"
               :section="section"/>
   </div>
</template>

<script>
import Section from "@/components/education/Section";
import {createNamespacedHelpers} from "vuex"

const {mapState} = createNamespacedHelpers("education")

export default {
   name: "Sections",
   components: {
      Section
   },
   data() {
      return {
         modules: []
      }
   },
   computed: {
      ...mapState(["softuni"])
   },
   created() {
      this.modules = this.softuni.modules
   }
}
</script>

<style scoped>

</style>
