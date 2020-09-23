<template>
  <div class="navbar__wrapper">
    <nav class="navbar u-container">
      <div class="navbar__left">
        <img
          class="navbar__logo"
          src="../assets/images/logo-playground-white.png"
          alt="nav-logo"
        />
      </div>

      <div class="navbar__right">
        <ul class="navbar__list">
          <li class="navbar__item"><h4>we are</h4></li>
          <li class="navbar__item"><h4>we do</h4></li>
          <li class="navbar__item"><h4>careers</h4></li>
          <li class="navbar__item"><h4>contact us</h4></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
  z-index: 10;
  .navbar {
    @include u-flex(row, space-between, center);
    padding: 20px 0;
    &__left {
      .navbar__logo {
        width: 150px;
      }
    }
    &__right {
      .navbar__list {
        @include u-list(25);
        h4 {
          color: $light;
        }
      }
    }
  }
}
</style>
