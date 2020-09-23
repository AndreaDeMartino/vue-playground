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
  z-index: 10;
  .navbar {
    @include u-flex(column, space-between, center);
    padding: 20px 0;
    &__left {
      margin-bottom: 10px;
      .navbar__logo {
        width: 150px;
      }
    }
    &__right {
      .navbar__list {
        @include u-list(10);
        h4 {
          color: $light;
          font-weight: 300;
          letter-spacing: 0.1em;
          &:hover {
            @include u-led;
          }
        }
      }
    }
  }
  @include desktop {
    .navbar {
      flex-direction: row;
    }
    .navbar__left {
      margin-bottom: 0;
    }
    .navbar__list {
      @include u-list(20);
    }
  }
  @include large-desktop {
    .navbar {
      flex-direction: row;
    }
    .navbar__left {
      margin-bottom: 0;
    }
    .navbar__list {
      @include u-list(25);
    }
  }
}
</style>
