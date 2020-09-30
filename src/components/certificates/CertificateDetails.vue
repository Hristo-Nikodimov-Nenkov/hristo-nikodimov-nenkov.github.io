<template>
  <div id="details">
    <div id="thumb">
      <img :src="getCertificateUrl" alt="Certificate preview image">
    </div>
    <div id="info">
      <div id="course-name">  Course: {{getCertificate.courseName}}</div>
      <div id="issued-on">Issued On: {{ getCertificate.issuedOn }}</div>
      <div id="summary">
        {{getCertificate.summary}}
      </div>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapState, mapActions} = createNamespacedHelpers('certificates');

export default {
  name: "CertificateDetails",
  components:{
  },
  computed: {
    ...mapState(['certificates']),
    getCertificate:function (){
      return this.certificates.find(c => c.id === this.$route.params.id)
    },
    getCertificateUrl:function (){
      return `https://softuni.bg/certificates/certificates/converttoimage/${this.getCertificate.id}?code=${this.getCertificate.code}`
    }
  },
  methods: {
    ...mapActions(["loadCertificates"])
  },
  created() {
    this.certificate = this.certificates.find(c => c.id === this.$route.params.id)
  }
}
</script>

<style scoped>
#details {
  display: grid;
  grid-template-areas: "thumb info";
  grid-template-columns: 2fr 4fr;
}

#thumb {
  grid-area: thumb;
}

#thumb>img{
  width: max-content;
  max-width: 90%;
  border: 1px solid #555555;
  border-radius: 7px;
  margin: 5px;
  padding: 5px;
}

#info {
  grid-area: info;
  padding-top: 4vh;
}
#info>div{
  margin: 1vh 0;
}
</style>
