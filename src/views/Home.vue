<template>
<div class="home">
  <app-header></app-header>
  <div class="section"></div>
</div>

  
</template>

<script>
// Components
import Header from "../components/shared/Header.vue";


export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  width: 100%;
}
.section{
  background: #ccc;
  height: 100vh;
  width: 100%;
}
</style>
