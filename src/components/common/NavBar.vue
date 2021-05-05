<template>
  <nav class="navbar navbar-nav navbar-expand-md fixed-top px-3">
    <template v-if="(this.mergeSectionsItems)">
      <div class="nav-item" v-for="(item, index) in this.getNavItems" :key="index">
        <router-link class="nav-link" :to="item.url">{{ item.text }}</router-link>
      </div>
    </template>
    <template class="nav-section" v-else>
      <div class="nav-section" v-for="(section, sectionIndex) in this.sections" :key="sectionIndex">
        <div class="nav-item" v-for="(item, itemIndex) in section.items" :key="itemIndex">
          <router-link :to="item.url">{{ item.text }}</router-link>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters} = createNamespacedHelpers('navigation');

export default {
  name: "NavBar",
  computed: {
    getNavItems: function () {
      return this.sections.reduce((acc, sec) => acc.concat(sec.items), []);
    },
    ...mapState(['mergeSectionsItems','sections']),
    ...mapGetters(['getSection'])
  }
}
</script>

<style scoped>
</style>
