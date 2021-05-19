<template>
   <div class="d-flex">
      <links-list
         class="d-inline-block px-2"
         :links="getModulesAsLinks"/>
      <router-view class="d-inline-block px-3"/>
   </div>
</template>

<script>
import LinksList from "@/components/education/LinksList";
import {createNamespacedHelpers} from "vuex";

const {mapGetters} = createNamespacedHelpers("education");

export default {
   name: "EducationPage",
   components: {
      LinksList
   },
   computed: {
      ...mapGetters(["getModulesAsLinks"])
   }
}
</script>

<style scoped>

</style>
