<template>
  <div id="certificates-page">
    <div id="certificates-side-bar">
      <certificates-side-bar :courses="this.getCoursesNames"/>
    </div>
    <div id="certificates-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CertificatesSideBar from "@/components/certificates/CertificatesSideBar.vue";

import {createNamespacedHelpers} from "vuex"

const {mapState, mapActions} = createNamespacedHelpers('certificates')

export default {
  name: "Certificates",
  components: {
    CertificatesSideBar
  },
  computed: {
    ...mapState(["certificates"]),
    getCoursesNames: function () {
      return this.certificates.map(c => ({
        id: c.id,
        name: c.courseName
      }))
    }
  },
  created() {
    if (this.certificates.keys.length === 0) {
      this.loadCertificates();
    }
  },
  methods: {
    ...mapActions(["loadCertificates"])
  }
}
</script>

<style scoped>
#certificates-page{
  display: grid;
  grid-template-areas: "side-bar content";
  grid-template-columns: 1fr 2fr;
  height: calc(100% - 2vh);
}

#certificates-side-bar{
  grid-area: side-bar;
}

#certificates-content{
  grid-area: content;
}
</style>
