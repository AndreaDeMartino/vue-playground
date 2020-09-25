<template>
  <div class="home">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
    <app-policy></app-policy>
  </div>
</template>

<script>
// Components
import Header from "../components/shared/Header.vue";
import Main from "../components/shared/Main.vue";
import Footer from "../components/shared/Footer.vue";
import Policy from "../components/Policy.vue";

export default {
  components: {
    appHeader: Header,
    appMain: Main,
    appFooter: Footer,
    appPolicy: Policy,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
}
</style>
