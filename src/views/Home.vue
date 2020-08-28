<template>
  <div id="home-page">
    <h1>Portfolio</h1>
    <h1>Hristo Nikodimov Nenkov</h1>
    <certificate-details verification-url="https://softuni.bg"/>
  </div>
</template>

<script>
import CertificateDetails from "@/components/certificates/CertificateDetails";

export default {
  name: 'Home',
  components: {
    CertificateDetails
  }
}
</script>

<style scoped>
</style>
