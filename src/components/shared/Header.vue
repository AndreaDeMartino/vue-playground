<template>
  <header>
    <app-navbar></app-navbar>
    <app-slider></app-slider>
  </header>
</template>

<script>
//Components
import Navbar from "../Navbar.vue";
import Slider from "../Slider.vue";

export default {
  components: {
    appNavbar: Navbar,
    appSlider: Slider,
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 100vh;
  width: 100%;
}
</style>
