import projectsService from "@/services/projects";

export default {
    namespaced: true,
    state:{
        projects:[]
    },
    getters:{
        getByLanguage: (state) => (language) => {
            return state.projects.filter(p => p.language === language)
        }
    },
    mutations:{
        setProjects: (state, projects) => state.projects = projects
    },
    actions:{
        loadProjects: projectsService.loadProjects
    }
}
