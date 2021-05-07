<template>
   <div class="form-group">
      <h4>{{ section.name }}</h4>
      <select>
         <option v-for="(course, index) in section.courses"
                 :key="index">
            <course :name="course.name"
                    :instance="course.instance"
                    :grade="course.grade"
                    :certificate-url="course.certificateUrl"/>
         </option>
      </select>
   </div>
</template>

<script>
import Course from "@/components/education/Course";

export default {
   name: "EducationSection",
   components: {
      Course
   },
   props: {
      section: Object
   }
}
</script>

<style scoped>

</style>
