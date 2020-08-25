<template>
  <nav>
    <template v-if="(this.mergeSectionsItems)">
      <div class="nav-item" v-for="(item, index) in this.getNavItems" :key="index">
        <router-link :to="item.url">{{ item.text }}</router-link>
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
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  padding: 5px 15px;
}
.nav-section{
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
}

.nav-item {
  margin: 5px auto;
}

.nav-item a {
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
}

.nav-item a.router-link-exact-active {
  color: lime;
}

</style>
