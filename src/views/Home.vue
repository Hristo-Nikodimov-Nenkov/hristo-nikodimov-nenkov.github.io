<template>
  <div id="home-page">
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
const {mapState, mapActions} = createNamespacedHelpers("sections");

export default {
  name: 'Home',
  components: {
  },
  computed:{
    ...mapState(["sections"])
  },
  methods:{
    ...mapActions(["loadSections"])
  },
  created() {
    this.loadSections();
  }
}
</script>

<style scoped>

</style>
