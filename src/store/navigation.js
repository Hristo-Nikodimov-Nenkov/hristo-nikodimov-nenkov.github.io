export default {
    namespaced: true,
    state: {
        mergeSectionsItems: true,
        sections: [
            {
                name: 'Home',
                items: [
                    {
                        text: 'Home',
                        url: '/'
                    },
                    {
                        text: 'About',
                        url: '/about'
                    }
                ]
            }
        ]
    },
    getters: {
        getSection: (state) => (sectionName) => state.sections.find(s => s.name === sectionName)
    },
    mutations: {
        setMergeSectionsItems: (state, value) => state.mergeSectionsItems = value,
        toggleMergeSectionsItems: (state) => state.mergeSectionsItems = !state.mergeSectionsItems
    },
    actions: {}
}
