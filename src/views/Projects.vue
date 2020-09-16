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
    <h3>Projects by language</h3>
    <form>
      <label for="language">Language</label>
      <input type="text" id="language" v-model="language">
    </form>
    <div v-for="(p, i) in this.projects.filter(p => p.language === this.language)" :key="i">
      <div class="project">
        <div>{{p.name}}</div>
        <div>{{p.description}}</div>
        <div>Writen on {{p.language}} using {{p.techStack}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"

const {mapState, mapActions} = createNamespacedHelpers("projects")

export default {
  name: "Projects",
  data:function (){
    return{
      language:"",
      filteredProjects:[]
    }
  },
  computed:{
    ...mapState(['projects'])
  },
  methods:{
    ...mapActions(['loadProjects']),
  },
  created() {
    this.loadProjects()
  }
}
</script>

<style scoped>

</style>
