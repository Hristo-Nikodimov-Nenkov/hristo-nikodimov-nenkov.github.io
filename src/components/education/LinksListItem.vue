<template>
   <li>
      <div class="d-flex justify-content-between">
         <router-link
            class="px-2 mr-2"
            :to="item.url">
            {{ item.text }}
         </router-link>
         <i @click="toggleExpanded"
            :class="expanded?'fa fa-arrow-up':'fa fa-arrow-down'"/>
      </div>
      <ul v-show="expanded"
          class="pl-2">
         <li v-for="(subItem, index) of items"
             :key="index"
             class="d-flex justify-content-between pl-2">
            <router-link :to="subItem.url">
               {{ subItem.text }}
            </router-link>
         </li>
      </ul>
   </li>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapGetters} = createNamespacedHelpers("education");

export default {
   name: "LinksListItem",
   props: {
      item: Object
   },
   data() {
      return {
         expanded: false,
         items: []
      }
   },
   computed: {
      ...mapGetters(["getModuleCoursesAsLinks"])
   },
   methods: {
      toggleExpanded() {
         this.expanded = !this.expanded
      }
   },
   created() {
      this.items = this.getModuleCoursesAsLinks(this.item.text)
   }
}
</script>

<style scoped>

</style>
