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
            },
            {
                name: 'Education',
                items: [
                    {
                        text: 'Courses',
                        url: '/courses'
                    }, {
                        text: 'Certificates',
                        url: '/certificates'
                    }
                ]
            }
        ]
    },
    getters: {
        getSection: (state) => (sectionName) => state.sections.find(s => s.name.toLowerCase() === sectionName.toLowerCase())
    },
    mutations: {
        setMergeSectionsItems: (state, value) => state.mergeSectionsItems = value,
        toggleMergeSectionsItems: (state) => state.mergeSectionsItems = !state.mergeSectionsItems
    },
    actions: {}
}
