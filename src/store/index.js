import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import navigation from "@/store/navigation";
import contacts from "@/store/contacts";
import education from "@/store/education";

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        navigation,
        contacts,
        education
    }
})
