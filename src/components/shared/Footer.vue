<template>
  <footer class="footer">
    <div class="footer__logo">
      <img src="../../assets/images/logo-footer.png" alt="" />
    </div>
    <div class="footer__sections">
      <p>we are</p>
      <p>we do</p>
      <p>we careers</p>
      <p>we contact us</p>
    </div>
    <div class="footer__icons">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-instagram"></i>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  min-height: 350px;
  width: 100%;
  background-color: $dark;
  @include u-flex(column, center, center);
  &__logo {
    img {
      max-width: 250px;
    }
  }
  &__sections {
    max-width: 450px;
    @include u-flex();
    margin: 60px 0;
    p {
      color: $light;
      padding-right: 100px;
      white-space: nowrap;
      &:last-child {
        padding-right: 0;
      }
    }
  }
  &__icons {
    i {
      color: $light;
      padding: 10px;
      font-size: 20px;
    }
  }
}

//Responsive

@include mobile {
  footer {
    .footer__logo {
      margin-top: 50px;
    }
    .footer__sections {
      margin: 40px 0;
      @include u-flex(column, center, center);
      p {
        padding-right: 0;
        padding: 10px 0;
      }
    }
  }
}

@include small-mobile {
  footer {
    .footer__logo {
      margin-top: 50px;
    }
    .footer__sections {
      margin: 40px 0;
      @include u-flex(column, center, center);
      p {
        padding-right: 0;
        padding: 10px 0;
      }
    }
  }
}
</style>
