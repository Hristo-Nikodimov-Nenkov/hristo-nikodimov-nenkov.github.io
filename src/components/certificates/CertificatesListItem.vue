<template>
  <div class="certificates-list-item">
    <img :src="this.imageUrl" :alt="this.certificate.courseName">
  </div>
</template>

<script>
export default {
  name: "CertificatesListItem",
  props: {
    certificate: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl: function () {
      return `https://softuni.bg/certificates/certificates/converttoimage/${this.certificate.id}?code=${this.certificate.code}`
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
