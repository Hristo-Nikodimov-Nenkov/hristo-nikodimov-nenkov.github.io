<template>
   <div>
      <h1>Page not found.</h1>
      <h5>Auto redirect to home page in {{ this.secondsLeft }} seconds.</h5>
   </div>
</template>

<script>
const countDownStartValue = 3;

export default {
   name: "NotFound",
   data: function () {
      return {
         secondsLeft: countDownStartValue,
      }
   },
   methods: {
      countDownTimer: async function () {
         while (this.secondsLeft > 0) {
            await new Promise(r => setTimeout(r, 1000));
            this.secondsLeft--
         }

         if (this.$route.name === "NotFound") {
            await this.$router.push("/")
         }
      },
   },
   created() {
      this.countDownTimer();
   }
}
</script>

<style scoped>
h1, h5 {
   text-align: center;
}
</style>
