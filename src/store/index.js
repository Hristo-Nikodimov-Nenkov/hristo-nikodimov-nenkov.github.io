import Vue from 'vue'
import Vuex from 'vuex'

import navigation from "./navigation";
import certificates from "./certificates";
import projects from "@/store/projects";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    navigation,
    certificates,
    projects
  }
})
