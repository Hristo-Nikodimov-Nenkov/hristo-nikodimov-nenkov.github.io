<template>
  <div id="app">
    <header class="mx-3">
      <nav-bar/>
    </header>
    <main class="pt-5">
      <router-view class="app-page"/>
    </main>
    <footer class="text-center fixed-bottom">
      <page-footer/>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import PageFooter from "@/components/common/PageFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    PageFooter
  }
}
</script>

<style>
html, body {
   margin: 0;
   padding: 0;
}

#app{
   height: 100vh;
}
</style>
