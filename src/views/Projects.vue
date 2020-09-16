<template>
  <div>
    <h1>Projects page.</h1>
    <div v-for="(project, index) in this.projects" :key="index">
      <div class="project">
        <div>{{project.name}}</div>
        <div>{{project.description}}</div>
        <div>Writen on {{project.language}} using {{project.techStack}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"

const {mapState, mapActions} = createNamespacedHelpers("projects")

export default {
  name: "Projects",
  computed:{
    ...mapState(['projects'])
  },
  methods:{
    ...mapActions(['loadProjects'])
  },
  created() {
    this.loadProjects()
  }
}
</script>

<style scoped>

</style>
