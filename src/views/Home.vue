<template>
  <div id="home-page">
    <personal-info-section :section="this.personalInfoSection"/>
    <div v-for="(section, index) in this.namedSections" :key="index">
      <SectionWithTitle :section="section"/>
    </div>
  </div>
</template>

<script>
import PersonalInfoSection from "@/components/sections/PersonalInfoSection";
import SectionWithTitle from "@/components/sections/SectionWithTitle";

export default {
  name: 'Home',
  components: {
    SectionWithTitle,
    PersonalInfoSection
  },
  data: function () {
    return {
      personalInfoSection: {
        imageUrl: "",
        fields: [
          {
            key: "Name: ",
            value: "Hristo Nikodimov Nenkov"
          },
          {
            key: "E-Mail: ",
            value: "hristo.nikodimov.nenkov@gmail.com"
          }
        ]
      },
      namedSections: [
        {
          title: "Education and Experience",
          fields: [
            {
              key: "SoftUni",
              value: "2016 - 2020"
            }
          ]
        },
        {
          title: "Languages",
          fields: [
            {
              key:"Bulgarian",
              value: "Native language"
            },
            {
              key:"English",
              value: "B3"
            }
          ]
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
