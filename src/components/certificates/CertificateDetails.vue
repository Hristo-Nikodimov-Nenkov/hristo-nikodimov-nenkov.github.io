<template>
  <div class="container">
    <img :src="this.certificate.certificateThumb" alt="Certificate preview image.">
    <div class="">{{ this.certificate.courseName }}</div>
    <div class="">{{ this.certificate.courseGrade }}</div>
    <qrcode-vue :value="this.certificate.verificationUrl"/>
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
    return {}
  },
  props: {
    certificate: {
      type: Object,
      required: true,
      validator: function (value) {
        const courseNameCheck = !!value.courseName;
        const certificateThumbCheck = !!value.certificateThumb;
        const courseGradeCheck= !!value.courseGrade
            && +value.courseGrade >= 5.0
            && +value.courseGrade <= 6.0;
        const verificationUrlCheck = !! value.verificationUrl;

        return courseNameCheck && certificateThumbCheck && courseGradeCheck && verificationUrlCheck
      }
    }
  }
}
</script>

<style scoped>

</style>
