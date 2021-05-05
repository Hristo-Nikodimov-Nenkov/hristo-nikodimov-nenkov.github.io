<template>
   <div id="app">
      <header>
         <app-navigation/>
      </header>
      <main>
         <router-view/>
      </main>
      <footer class="fixed-bottom">
         <app-footer/>
      </footer>
   </div>
</template>

<script>
import AppNavigation from "@/components/common/AppNavigation";
import AppFooter from "@/components/common/AppFooter";

export default {
   name: "App",
   components:{
      AppNavigation,
      AppFooter
   },
}
</script>

<style>
html, body {
   margin: 0;
   padding: 0;
}

#app {
   height: 100vh;
}

</style>
