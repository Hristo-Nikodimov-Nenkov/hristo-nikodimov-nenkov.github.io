export default {
    namespaced: true,
    state: {
        mergeSectionsItems: true,
        sections: []
    },
    getters: {
        getMergeSectionsItems: (state) => state.mergeSectionsItems,
        getSections:(state) => state.sections
    },
    mutations: {
        setMergeSectionsItems: (state, value) => state.mergeSectionsItems = value,
        toggleMergeSectionsItems: (state) => state.mergeSectionsItems = !state.mergeSectionsItems
    },
    actions: {}
}
