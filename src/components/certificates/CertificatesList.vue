<template>
  <div>

  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
const {mapState, mapGetters, mapActions} = createNamespacedHelpers("certificates")

export default {
  name: "CertificatesList",
  computed:{
    ...mapState([]),
    ...mapGetters([])
  },
  methods:{
    ...mapActions([])
  }
}
</script>

<style scoped>

</style>
