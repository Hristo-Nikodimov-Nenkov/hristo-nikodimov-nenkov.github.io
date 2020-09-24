<template>
  <div class="certificates-list">
    <div v-for="(certificate, certificateIndex) in this.certificates" :key="certificateIndex">
      <certificates-list-item :certificate="certificate"/>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"

const {mapState, mapGetters, mapActions} = createNamespacedHelpers("certificates")

import CertificatesListItem from "./CertificatesListItem.vue"

export default {
  name: "CertificatesList",
  components: {
    CertificatesListItem
  },
  computed: {
    ...mapState(["certificates"]),
    ...mapGetters([])
  },
  methods: {
    ...mapActions(["loadCertificates"])
  },
  mounted() {
    this.loadCertificates()
  }
}
</script>

<style scoped>
.certificates-list {
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
</style>
