<template>
   <ul>
      <li
         v-for="(link, index) of links"
         :key="index">
         <router-link
            :to="link.url">
            {{ link.text }}
         </router-link>
         <links-list :links="link.items"/>
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
