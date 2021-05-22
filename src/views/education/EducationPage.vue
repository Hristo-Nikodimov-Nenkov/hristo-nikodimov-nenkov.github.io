<template>
   <div class="d-flex">
      <links-list class="d-inline-block px-2"/>
      <router-view class="d-inline-block px-3"/>
   </div>
</template>

<script>
import LinksList from "@/components/education/LinksList";

export default {
   name: "EducationPage",
   components: {
      LinksList
   }
}
</script>

<style scoped>

</style>
