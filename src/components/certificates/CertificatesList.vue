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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.certificates-list-item > img {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
  max-width: 100%;
}
</style>
