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
      secondsLeft: countDownStartValue
    }
  },
  methods: {
    countDownTimer() {
      if (this.secondsLeft < 1) {
        this.$router.push('/')
            .then(() => {
              console.log('Auto redirect to Home page.');
            })
            .catch((err) => console.log(err));
      } else {
        setTimeout(() => {
          this.secondsLeft--
          this.countDownTimer()
        }, 1000);
      }
    }
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
