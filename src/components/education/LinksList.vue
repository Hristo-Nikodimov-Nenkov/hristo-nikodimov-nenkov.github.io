<template>
   <ul class="list-inline">
      <li
         v-for="(link, index) of links"
         :key="index">
         <router-link
            :to="link.url">
            {{ link.text }}
         </router-link>
      </li>
   </ul>
</template>

<script>
export default {
   name: "LinksList",
   props: {
      links: Array
   }
}
</script>

<style scoped>

</style>
