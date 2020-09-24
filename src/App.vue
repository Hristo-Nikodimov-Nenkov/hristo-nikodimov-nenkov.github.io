<template>
  <div id="app">
    <header>
      <nav-bar/>
    </header>
    <main>
      <router-view class="app-page"/>
    </main>
    <footer>
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
html {
  padding: 2vh;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-areas: "header" "content" "footer";
  grid-auto-rows: max-content auto max-content;
  height: 94vh;
  margin: 1vh 1vw;
}

header {
  width: 100%;
  grid-area: header;
}

main {
  grid-area: content;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  overflow: auto;
}

.app-page{
  margin: 2vh 3vw;
}

footer {
  grid-area: footer;
  width: 100%;
  z-index: 10;
}

footer > div {
  padding: 1vh;
  text-align: center;
}
</style>
