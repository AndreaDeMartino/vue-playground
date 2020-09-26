<template>
  <footer class="footer">
    <!-- Footer Logo -->
    <div class="footer__logo">
      <img src="../../assets/images/logo-footer.png" alt="" />
    </div>

    <!-- Footer Sections -->
    <div class="footer__sections">
      <p
        v-scroll-to="{
          el: '.we-are',
          onStart: function(element) {
            editAge('weAre');
          },
        }"
      >
        we are
      </p>
      <p
        v-scroll-to="{
          el: '.we-do',
          onStart: function(element) {
            editAge('weDo');
          },
        }"
      >
        we do
      </p>
      <p
        v-scroll-to="{
          el: '.careers',
          onStart: function(element) {
            editAge('careers');
          },
        }"
      >
        careers
      </p>
      <p
        v-scroll-to="{
          el: '.contact',
          onStart: function(element) {
            editAge('contact');
          },
        }"
      >
        contact us
      </p>
    </div>

    <!-- Footer socials -->
    <div class="footer__icons u-mb--5">
      <a href="https://www.facebook.com/playground.digital.agency"
        ><i class="fab fa-facebook-square"></i
      ></a>
      <a href="https://www.linkedin.com/company/playground-digital-agency/"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="https://www.instagram.com/playground_agency/?hl=it"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>
  </footer>
</template>

<script>
// Event Bus to get the actual Page from Navbar
import { eventBus } from "../../main.js";

export default {
  data() {
    return {
      actualPage: "",
    };
  },
  methods: {
    editAge(page) {
      this.actualPage = page;
      eventBus.$emit("actualPage", this.actualPage);
    },
  },
};
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
    margin: 60px 0;
    @include u-flex();
    p {
      color: $light;
      margin-right: 100px;
      white-space: nowrap;
      position: relative;
      transition: color 0.6s linear;
      font-family: "gotham-medium";
      letter-spacing: 0.1em;
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
          animation: bottom-animate 1.5s forwards;
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

/****************************************************
  * RESPONSIVE
  ****************************************************/

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
        margin-right: 0;
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
        margin-right: 0;
      }
    }
  }
}
</style>
