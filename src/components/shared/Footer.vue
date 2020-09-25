<template>
  <footer class="footer">
    <div class="footer__logo">
      <img src="../../assets/images/logo-footer.png" alt="" />
    </div>
    <div class="footer__sections">
      <p v-scroll-to="'.we-are'">we are</p>
      <p v-scroll-to="'.we-do'">we do</p>
      <p v-scroll-to="'.careers'">careers</p>
      <p v-scroll-to="'.contact'">contact us</p>
    </div>
    <div class="footer__icons u-mb--5">
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-linkedin-in"></i>
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
  border-top: 1px solid $border;
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
      margin-right: 100px;
      white-space: nowrap;
      position: relative;
      transition: color 0.6s linear;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: $gold;
        &:before {
          content: "";
          position: absolute;
          bottom: -5px;
          height: 1px;
          width: 150%;
          background: linear-gradient(90deg, transparent, $gold);
          animation: button-animate 1.5s forwards;
        }
      }
    }
  }
  &__icons {
    i {
      color: $icons;
      padding: 10px;
      font-size: 20px;
      &:hover {
        @include u-led($light);
        cursor: pointer;
      }
    }
  }
}

//Animation
@keyframes button-animate {
  0% {
    left: -150%;
  }

  100% {
    left: 0%;
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
        &:last-child {
          margin-right: 80px;
        }
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
        &:last-child {
          margin-right: 80px;
        }
      }
    }
  }
}
</style>
