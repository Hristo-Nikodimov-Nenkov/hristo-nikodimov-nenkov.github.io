export default {
    namespaced: true,
    state: {
        sections: []
    },
    getters: {
        getSections: (state) => state.sections,
        getSection: (state) => (name) => state.sections[name]
    },
    mutations: {
        setSections: (state, sections) => state.sections = sections,
        setSection: (state, name, value) => state.sections[name] = value
    },
    actions: {
        loadSections({commit}, sections) {
            commit('setSections', sections);
        },
        loadSectionsFromStorage({commit}) {
            const sectionsStr = sessionStorage.getItem('navSections') ?? '[]';
            const sections = JSON.parse(sectionsStr);

            commit('setSections', sections);
        },
        saveSectionsToStorage({state}) {
            sessionStorage.setItem('navSections', JSON.stringify(state.sections));
        },
        updateSection({commit}, section) {
            commit('setSection', section.name, section.value);
        }
    }
}
