<template>
  <div id="personal-info">
    <div id="personal-info-photo">
      <img :src="this.personalInfo.photoUrl" alt="Photo">
    </div>
    <h1 id="personal-info-name">{{ this.personalInfo.name }}</h1>
    <div id="personal-info-fields">
      <div class="personal-info-field" v-for="(field, index) in this.personalInfo.fields" :key="index">
        {{ field.title }}: {{ field.value }}
      </div>
    </div>
    <div id="personal-info-summary">
      {{ this.personalInfo.summary }}
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';

const {mapState, mapActions} = createNamespacedHelpers('sections');

export default {
  name: "PersonalInfo",
  props: {
    personalInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(["sections"])
  },
  methods: {
    ...mapActions(["loadSections"])
  },
  created() {
    if (this.sections.length === 0) {
      this.loadSections()
    }
  }
}
</script>

<style scoped>
#personal-info {
  display: grid;
  grid-template-areas:
      "photo name name name"
      "photo fields fields fields"
      "summary summary summary summary";
  grid-template-columns: 1fr repeat(3, 2fr);
}

#personal-info-photo {
  grid-area: photo;
}

#personal-info-photo > img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 16px;
  border: 1px solid #555555;
  border-radius: 8px;
}

#personal-info-name {
  grid-area: name;
}

#personal-info-fields {
  grid-area: fields;
  display: flex;
  justify-content: space-around;
}

.personal-info-field {
  display: inline-block;
}

#personal-info-summary {
  grid-area: summary;
  height: max-content;
  margin: 1% 0;
  padding: 1% 2%;
  border: 1px solid #555555;
  border-radius: 5px;
}
</style>
