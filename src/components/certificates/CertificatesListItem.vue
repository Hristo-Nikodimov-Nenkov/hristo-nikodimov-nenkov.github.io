<template>
  <div class="certificates-list-item">
    <img :src="this.thumbUrl" alt="Certificate thumb image." @click="this.openInNewTab">
  </div>
</template>

<script>

export default {
  name: "CertificatesListItem",
  components:{
  },
  data:function (){
    return {
      expanded:false
    }
  },
  props: {
    certificate: {
      type: Object,
      required: true
    }
  },
  methods:{
    openInNewTab: function (){
      window.open(this.imageUrl, '_blank');
    },
    toggleExpanded: function (){
      this.expanded = !this.expanded
    }
  },
  computed: {
    imageUrl: function () {
      return `https://softuni.bg/certificates/certificates/converttoimage/${this.certificate.id}?code=${this.certificate.code}`
    },
    thumbUrl: function (){
      return `/img/certificates/${this.certificate.id}.jpg`
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
}

.certificates-list-item {
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
  max-width: 100%;
}

.qr-component > img{
  margin: auto;
}

</style>
