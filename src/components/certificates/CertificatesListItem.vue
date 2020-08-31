<template>
<div class="certificates-list-item">
  <div>
    {{this.certificate.courseName}}
  </div>
  <div>
    {{this.certificate.certificateThumb}}
  </div>
  <div>
    {{this.certificate.courseGrade}}
  </div>
  <div>
    {{this.certificate.verificationUrl}}
  </div>
</div>
</template>

<script>
export default {
name: "CertificatesListItem",
  props:{
    certificate: {
      type:Object,
      required:true
    }
  }
}
</script>

<style scoped>

</style>
