<template>
   <div id="app">
      <header>
         <app-navigation/>
      </header>
      <main>
         <router-view/>
      </main>
   </div>
</template>

<script>
import AppNavigation from "@/components/common/AppNavigation";
export default {
   name: "App",
   components:{
      AppNavigation
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
