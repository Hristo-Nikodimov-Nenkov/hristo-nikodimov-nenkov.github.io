<template>
  <div id="home-page">
    <personal-info/>
  </div>
</template>

<script>
import PersonalInfo from "@/components/sections/PersonalInfo";

export default {
  name: 'Home',
  components: {
    PersonalInfo
  },
  data: function () {
    return {}
  },
}
</script>

<style scoped>
</style>
