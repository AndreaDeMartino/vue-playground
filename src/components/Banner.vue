<template>
  <div class="u-row">
    <!-- Check on Theme Setup (Dark or Light)-->
    <div
      class="banner"
      :class="[darkTheme ? BannerDark : BannerLight]"
      id="responsive"
    >
      <div class="banner__wrapper u-text--center" v-in-viewport>
        <h2 class="banner__title u-mb--30">
          <!-- Dynamic Title -->
          <slot name="title"></slot>
        </h2>

        <p class="banner__sub-title">
          Consectetur adipiscing elit.
        </p>

        <p class="banner__sub-title u-pt--10 u-pb--35">
          Nulla condimentum tortor sem,
        </p>

        <div class="banner__button u-text--center">
          <!-- Dynamic Button -->
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Theme are managed by this props (if darkTheme = false the theme will be Light)
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
  data() {
    return {
      // Dark Theme Grid Classes Configuration
      BannerDark: [
        "dark-mode",
        "u-col__xs--4",
        "u-offset__xs--4",
        "u-col__sm--4",
        "u-offset__sm--4",
        "u-col__md--4",
        "u-offset__md--4",
        "u-col__lg--4",
        "u-offset__lg--8",
        "u-col__xl--4",
        "u-offset__xl--8",
      ],
      // Light Theme Grid Classes Configuration
      BannerLight: [
        "light-mode",
        "u-col__xs--4",
        "u-offset__xs--4",
        "u-col__sm--4",
        "u-offset__sm--4",
        "u-col__md--4",
        "u-offset__md--4",
        "u-col__lg--4",
        "u-col__xl--4",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.u-row {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .banner {
    height: 100%;
    padding-left: 80px;
    padding-left: 100px;
    @include u-flex(column, center, flex-start);
    &__sub-title {
      max-width: 220px;
      font-size: 14px;
      letter-spacing: 0.1em;
    }
    &__button {
      max-width: 250px;
      padding: 15px 25px;
      font-size: 14px;
      letter-spacing: 0.2em;
      transition: color 0.3s linear, box-shadow 0.3s linear,
        background-color 0.3s linear;
      cursor: pointer;
    }
  }
  // Banner Dark Style
  .banner.dark-mode {
    background-color: $dark;
    .banner__button {
      color: $light;
      border: 1px solid $light;
    }
    .banner__title {
      color: $light;
      font-size: 80px;
    }
    .banner__wrapper {
      padding-left: 50%;
      transition: transform 0.5s ease-in, opacity 0.7s ease-in;
      opacity: 0;
    }
    .banner__wrapper.in-viewport {
      transform: translateX(-50%);
      opacity: 1;
    }
    .banner__sub-title {
      color: $light;
    }
    .banner__button:hover {
      background-color: $flash;
      box-shadow: 0 0 5px $flash, 0 0 10px $flash, 0 0 20px $flash,
        0 0 30px $flash;
    }
  }
  // Banner Light Style
  .banner.light-mode {
    background-color: $light;
    .banner__wrapper {
      margin-right: 50%;
      transition: transform 0.5s ease-in, opacity 0.7s ease-in;
      opacity: 0;
    }
    .banner__wrapper.in-viewport {
      transform: translateX(50%);
      opacity: 1;
    }
    .banner__button {
      color: $dark;
      border: 1px solid $dark;
    }
    .banner__sub-title {
      color: $dark;
    }
    .banner__button:hover {
      color: $flash;
    }
  }
}

/****************************************************
  * Responsive
  ****************************************************/

@include tablet {
  .u-row {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.6;
    }
    #responsive {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
      .banner__wrapper {
        padding-right: 0;
        padding-left: 0;
        margin-right: 0;
        margin-left: 0;
        transform: none;
      }
      .banner__button {
        color: $light;
        border: 1px solid $light;
        &:hover {
          background-color: $flash;
          box-shadow: 0 0 5px $flash, 0 0 10px $flash, 0 0 20px $flash,
            0 0 30px $flash;
        }
        i {
          color: $light;
        }
      }
      .banner__title {
        color: $light;
      }
      .banner__sub-title {
        color: $light;
      }
    }
  }
}

@include mobile {
  .u-row {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.6;
    }
    #responsive {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
      .banner__wrapper {
        padding-right: 0;
        padding-left: 0;
        margin-right: 0;
        margin-left: 0;
        transform: none;
      }
      .banner__button {
        color: $light;
        border: 1px solid $light;
        &:hover {
          background-color: $flash;
          box-shadow: 0 0 5px $flash, 0 0 10px $flash, 0 0 20px $flash,
            0 0 30px $flash;
        }
        i {
          color: $light;
        }
      }
      .banner__title {
        font-size: 40px;
        color: $light;
      }
      .banner__sub-title {
        color: $light;
      }
    }
  }
}

@include small-mobile {
  .u-row {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.6;
    }
    #responsive {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
      .banner__wrapper {
        padding-right: 0;
        padding-left: 0;
        margin-right: 0;
        margin-left: 0;
        transform: none;
      }
      .banner__button {
        color: $light;
        border: 1px solid $light;
        &:hover {
          background-color: $flash;
          box-shadow: 0 0 5px $flash, 0 0 10px $flash, 0 0 20px $flash,
            0 0 30px $flash;
        }
        i {
          color: $light;
        }
      }
      .banner__title {
        font-size: 40px;
        color: $light;
      }
      .banner__sub-title {
        color: $light;
      }
    }
  }
}
</style>
