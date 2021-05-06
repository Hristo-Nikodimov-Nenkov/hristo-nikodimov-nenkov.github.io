<template>
   <div>
      <div class="d-flex justify-content-center" v-for="(contact, index) in contacts" :key="index">
         <div class="mx-2"><i :class="contact.icon" aria-hidden="true"></i></div>
         <div>{{ contact.text }} : {{ contact.value }}</div>
      </div>
   </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapState} = createNamespacedHelpers("contacts");

export default {
   name: "Contacts",
   computed: {
      ...mapState(["contacts"])
   }
}
</script>

<style scoped>

</style>
