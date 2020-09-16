import projectsService from "@/services/projects";

export default {
    namespaced: true,
    state:{
        projects:[]
    },
    getters:{},
    mutations:{
        setProjects: (state, projects) => state.projects = projects
    },
    actions:{
        loadProjects: projectsService.loadProjects
    }
}
