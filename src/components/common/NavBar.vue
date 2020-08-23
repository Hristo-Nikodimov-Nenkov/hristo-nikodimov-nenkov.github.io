<template>
  <nav>
    <div class="nav-section" v-for="(section, sectionIndex) in sections" :key="sectionIndex">
      <div class="nav-item" v-for="(item, index) in section.items" :key="index">
        <router-link :to="item.url">{{ item.text }}</router-link>
      </div>
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
            }
          ]
        },
        {
          items: [
            {
              text: "About",
              url: "/about"
            }
          ]
        }
      ]
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

.nav-section {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav-item{
  margin: 5px auto;
}

.nav-item a{
  text-align: center;
  text-decoration: none;
}
</style>
