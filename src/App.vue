<template>
  <div class="container">
    <img alt="logo" class="logo" src="./assets/Factory_Bucket_Logo_Horiz_Light.svg">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img.logo {
  width: 350px;
}
</style>
