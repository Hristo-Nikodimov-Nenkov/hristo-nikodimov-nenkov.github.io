export default {
    namespaced: true,
    state: {
        navigation: {
            "default": [
                {
                    text: "Contacts",
                    url: "/contacts"
                },
                {
                    text:"Education",
                    url:"/education"
                }
            ],
            "Contacts": [],
            "Education":[
                {
                    text:"Modules",
                    url:"/education/modules"
                },
                {
                    text:"Open Courses",
                    url:"/education/opencourses"
                }
            ]
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
