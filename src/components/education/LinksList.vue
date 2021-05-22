<template>
   <ul>
      <links-list-item
         v-for="(item, index) in getModulesAsLinks"
         :key="index"
         :item="item"/>
   </ul>
</template>

<script>
import LinksListItem from "@/components/education/LinksListItem";
import {createNamespacedHelpers} from "vuex";

const {mapGetters} = createNamespacedHelpers("education");

export default {
   name: "LinksList",
   components: {
      LinksListItem
   },
   computed: {
      ...mapGetters(["getModulesAsLinks"])
   }
}
</script>

<style scoped>

</style>
