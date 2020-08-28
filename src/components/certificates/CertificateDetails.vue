<template>
  <div class="container">
    <img :src="this.certificateThumb" alt="Certificate preview image.">
    <div class="">{{ this.courseName }}</div>
    <div class="">{{ this.grade }}</div>
    <qrcode-vue :value="this.url"/>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
  name: "CertificateDetails",
  components: {
    QrcodeVue
  },
  data: function () {
    return {
      url: ""
    }
  },
  props: {
    courseName: String,
    certificateThumb: String,
    grade: Number,
    verificationUrl: String
  }
}
</script>

<style scoped>

</style>
