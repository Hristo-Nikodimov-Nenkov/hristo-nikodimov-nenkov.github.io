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
  components:{
    CertificatesListItem
  },
  computed:{
    ...mapState(["certificates"]),
    ...mapGetters([])
  },
  methods:{
    ...mapActions(["loadCertificates"])
  },
  created() {
    this.loadCertificates();
  }
}
</script>

<style scoped>

</style>
