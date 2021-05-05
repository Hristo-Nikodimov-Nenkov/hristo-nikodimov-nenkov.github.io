export default {
    namespaced: true,
    state: {
        navigation: {
            "default": [
                {
                    text: "Contacts",
                    url: "/contacts"
                }
            ],
            "Contacts": []
        }
    },
    getters: {
        getLinksForRoute: (state) => (route) => {
            return state.navigation[route] || state.navigation["default"]
        }
    },
    mutations: {},
    actions: {}
}
