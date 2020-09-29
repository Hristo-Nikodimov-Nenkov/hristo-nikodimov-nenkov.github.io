<template>
  <div id="courses-names">
    <div class="course-name" v-for="(course, index) in courses" :key="index">
      <router-link :to="getCourseUrl(course.id)">{{ course.name }}</router-link>
      <img src="/img/icons/right-arrow.svg" v-show="$route.params.id === course.id"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificatesSideBar",
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
  methods: {
    getCourseUrl: (id) => `/certificates/${id}`
  }
}
</script>

<style scoped>
div.course-name {
  padding: 5px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

div.course-name:nth-child(odd) {
  background-color: #ffffff;
}

div.course-name:nth-child(even) {
  background-color: #aaaaaa;
}

div.course-name > img {
  max-height: 30px;
  align-self: flex-end;
  margin: auto 5px;
}

div.course-name > a {
  width: 100%;
  margin: auto;
}
</style>
