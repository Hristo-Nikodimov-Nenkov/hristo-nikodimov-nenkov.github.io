import sectionsService from "@/services/sections";

export default {
    namespaced: true,
    state: {
        sections: []
    },
    getters: {},
    mutations: {
        setSections: (state, sections) => state.sections = sections,
    },
    actions: {
        loadSections: sectionsService.loadSections
    }
}
