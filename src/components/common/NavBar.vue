<template>
  <nav>
    <div class="nav-item" v-for="(item, index) in this.getNavItems" :key="index">
      <router-link :to="item.url">{{ item.text }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      sections: [
        {
          items: [
            {
              text: "Home",
              url: "/"
            }
          ]
        },
        {
          items: [
            {
              text: "Education",
              url: "/education"
            },
            {
              text: "Certificates",
              url: "/certificates"
            },
            {
              text: "Interests",
              url: "/interests"
            },
            {
              text: "Hobbies",
              url: "/hobbies"
            }
          ]
        },
        {
          items: [
            {
              text: "About",
              url: "/about"
            },
            {
              text: "Contacts",
              url: "/contacts"
            },
            {
              text: "Repos",
              url: "/repos"
            }
          ]
        }
      ]
    }
  },
  computed: {
    getNavItems: function () {
      return this.sections.reduce((acc, sec) => acc.concat(sec.items), []);
    }
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
