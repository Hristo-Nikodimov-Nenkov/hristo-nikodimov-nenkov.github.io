<template>
<div>
  <div class="personal-info-section">
    <img src="" alt="Photo">
    <div class="fields">
      <div>Name: </div>
      <div>E-Mail: </div>
      <div>GitHub: </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
name: "PersonalInfo"
}
</script>

<style scoped>
.personal-info-section{
  display: grid;
  width: 100%;
  grid-template-areas: "photo fields";
  grid-template-columns: 1fr 5fr;
}

.personal-info-section>image{
  grid-area: photo;
}

.personal-info-section>div.fields{
  grid-area: fields;
}

</style>
