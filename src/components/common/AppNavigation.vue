<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Portfolio</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navigation">
         <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item" v-for="(link, index) in links" :key="index">
               <router-link class="nav-link" :to="link.url">{{ link.text }}</router-link>
            </li>
         </ul>
         <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
         </form>
      </div>
   </nav>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapGetters} = createNamespacedHelpers("navigation");

export default {
   name: "AppNavigation",
   data() {
      return {
         links: []
      }
   },
   computed: {
      ...mapGetters(["getLinksForRoute"])
   },
   created() {
      this.links = this.getLinksForRoute(this.$route.name)
   },
   watch: {
      $route(to) {
         this.links = this.getLinksForRoute(to.name)
      }
   }
}
</script>

<style scoped>

</style>
