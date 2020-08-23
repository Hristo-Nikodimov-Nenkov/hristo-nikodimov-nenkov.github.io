<template>
<div>
 <h1>Page not found.</h1>
  <h5>Auto redirect to home page in 5 seconds.</h5>
</div>
</template>
<script>
export default {
  name:"NotFound",
  created() {
    setTimeout(()=>{
      this.$router.push("/")
      .then(() => console.log('Auto redirect to Home page.'))
    }, 5000)
  }
}
</script>
<style scoped>
  h1, h5{
    text-align: center;
  }
</style>
