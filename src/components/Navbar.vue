<template>
  <div class="navbar__wrapper">
    <nav class="navbar u-container">
      <!-- Nav left side -->
      <div class="navbar__left">
        <img
          class="navbar__logo"
          src="../assets/images/logo-playground-white.png"
          alt="nav-logo"
          v-scroll-to="'.navbar__wrapper'"
        />
      </div>

      <!-- Nav Right side -->
      <div class="navbar__right">
        <ul class="navbar__list">
          <li class="navbar__item">
            <h4
              :class="{ active: actualPage == 'weAre' }"
              v-scroll-to="{
                el: '.we-are',
                onStart: function(element) {
                  actualPage = 'weAre';
                },
              }"
            >
              we are
            </h4>
          </li>
          <li class="navbar__item">
            <h4
              :class="{ active: actualPage == 'weDo' }"
              v-scroll-to="{
                el: '.we-do',
                onStart: function(element) {
                  actualPage = 'weDo';
                },
              }"
            >
              we do
            </h4>
          </li>
          <li class="navbar__item">
            <h4
              :class="{ active: actualPage == 'careers' }"
              v-scroll-to="{
                el: '.careers',
                onStart: function(element) {
                  actualPage = 'careers';
                },
              }"
            >
              careers
            </h4>
          </li>
          <li class="navbar__item">
            <h4
              :class="{ active: actualPage == 'contact' }"
              v-scroll-to="{
                el: '.contact',
                onStart: function(element) {
                  actualPage = 'contact';
                },
              }"
            >
              contact us
            </h4>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
// Event Bus to get the actual Page from footer
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      actualPage: "",
    };
  },
  created() {
    eventBus.$on("actualPage", (actualPage) => {
      this.actualPage = actualPage;
    });
  },
};
</script>

<style lang="scss" scoped>
.navbar__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
    box-shadow: 0 0.1px 3px rgba(255, 255, 255, 0.25);
  }
  .navbar {
    @include u-flex(column, space-between, center);
    padding: 15px;
    &__left {
      margin-bottom: 10px;
      cursor: pointer;
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
}

/****************************************************
  * Responsive
  ****************************************************/

@include desktop {
  .navbar__wrapper {
    .navbar {
      flex-direction: row;
      &__left {
        margin-bottom: 0;
      }
      &__list {
        @include u-list(20);
      }
    }
  }
}

@include large-desktop {
  .navbar__wrapper {
    .navbar {
      flex-direction: row;
      &__left {
        margin-bottom: 0;
      }
      &__list {
        @include u-list(25);
      }
    }
  }
}
</style>
