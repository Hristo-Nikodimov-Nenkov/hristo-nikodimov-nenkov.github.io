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
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

body {
  max-height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 10px;
  height: calc(100% - 20px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 2vw;
  height: calc(100% - 4vw);

  border: 1px solid #333333;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
}

header {
  height: max-content;
  flex: 0;
}

main{
  flex: auto;
  height: 100%;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
}
.app-page{
  height: 100%;
}

footer {
  height: max-content;
  margin: 1vh;
  flex: 0;
}
</style>
