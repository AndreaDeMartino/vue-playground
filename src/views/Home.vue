<template>
<div class="home">
  <app-header></app-header>
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
  width: 100vw;
}
</style>
