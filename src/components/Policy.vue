<template>
  <transition name="fade">
    <div class="policy" v-if="toggle">
      <p class="policy__text u-mr--20 u-text--center">
        Our website uses cookies to improve your experience. To find out more
        about the cookies we use please see our Cookies Policy.
      </p>
      <div class="policy__button" @click="toggle = !toggle">
        <span class="u-text--light">OK</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      toggle: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.policy {
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: $light;
  color: $dark;
  z-index: 5;
  @include u-flex;
  &__text {
    font-size: 10px;
    color: $light-text;
  }
  &__button {
    width: 100px;
    height: 30px;
    @include u-flex;
    background-color: $dark;
    cursor: pointer;
    &:hover {
      background-color: $flash;
      box-shadow: 0 0 1px $flash, 0 0 3px $flash, 0 0 5px $flash;
      color: $light;
    }
  }
}

/****************************************************
  * Responsive
  ****************************************************/

@include mobile {
  .policy {
    height: 60px;
    @include u-flex(column);
    .policy__button {
      width: 80px;
      height: 20px;
      margin: 4px 0;
    }
  }
}

@include small-mobile {
  .policy {
    height: 60px;
    @include u-flex(column);
    .policy__button {
      width: 80px;
      height: 20px;
      margin: 4px 0;
    }
  }
}
</style>
