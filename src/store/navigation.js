export default {
    namespaced: true,
    state: {
        mergeSectionsItems: true,
        sections: []
    },
    getters: {
        getMergeSectionsItems: (state) => state.mergeSectionsItems
    },
    mutations: {
        setMergeSectionsItems: (state, value) => state.mergeSectionsItems = value,
        toggleMergeSectionsItems: (state) => state.mergeSectionsItems = !state.mergeSectionsItems
    },
    actions: {}
}
