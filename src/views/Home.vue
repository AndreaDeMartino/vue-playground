<template>
<div class="home">
  <app-header></app-header>
  <app-main></app-main>
</div>

  
</template>

<script>
// Components
import Header from "../components/shared/Header.vue";
import Main from "../components/shared/Main.vue";


export default {
  components: {
    appHeader: Header,
    appMain: Main,
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
