<template>
  <header>
    <app-navbar></app-navbar>
  </header>
</template>

<script>
import Navbar from "../Navbar.vue";
export default {
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style lang="scss" scoped>
header {
}
</style>
