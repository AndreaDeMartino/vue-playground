<template>
  <div class="u-row">
    <!-- Check on Theme Setup (Dark or Light)-->
    <div
      class="banner"
      :class="[darkTheme ? BannerDark : BannerLight]"
      id="theme"
    >
      <div class="banner__wrapper" v-in-viewport>
        <h2 class="banner__title u-mb--25">
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
          <slot name="button" class="button__text"></slot>
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
    @include u-flex(column, center, flex-start);
    &__sub-title {
      min-width: 220px;
      font-size: 14px;
      letter-spacing: 0.35px;
    }
    &__button {
      max-width: 250px;
      @include u-flex;
      font-size: 14px;
      letter-spacing: 2.1px;
      transition: color 0.3s linear, box-shadow 0.3s linear,
        background-color 0.3s linear;
      cursor: pointer;
      i {
        padding-left: 5px;
      }
    }
  }
  // Banner Dark Style
  .banner.dark-mode {
    // padding-left: 75px;
    background-color: $dark;
    .banner__title {
      color: $light;
      font-size: 80px;
    }
    .banner__sub-title {
      color: $light;
    }
    .banner__wrapper {
      padding-left: 50%;
      text-align: left;
      transition: transform 0.5s ease-in, opacity 0.7s ease-in;
      opacity: 0;
    }
    .banner__wrapper.in-viewport {
      transform: translateX(-30%);
      opacity: 1;
    }
    .banner__button {
      height: 50px;
      width: 180px;
      color: $light;
      border: 1px solid $light;
      font-size: 14px;
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
    @include u-flex(column, center, center);
    .banner__wrapper {
      text-align: right;
      @include u-flex(column, center, flex-end);
      transition: transform 0.5s ease-in, opacity 0.7s ease-in;
      opacity: 0;
    }
    .banner__wrapper.in-viewport {
      transform: translateX(30%);
      opacity: 1;
    }
    .banner__title {
      width: 100%;
      text-align: right;
    }
    .banner__sub-title {
      color: $dark;
      width: 100%;
      text-align: right;
    }
    .banner__button {
      height: 50px;
      width: 180px;
      color: $dark;
      border: 1px solid $dark;
      .button__text {
        font-size: 14px;
      }
    }
    .banner__button:hover {
      color: $flash;
    }
  }
}

/****************************************************
  * Responsive
  ****************************************************/

@include large-desktop {
  .banner {
    min-width: 400px;
  }
}

@include desktop {
  .banner {
    min-width: 400px;
  }
}

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
    #theme {
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
        @include u-flex(column, center, center);
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
        text-align: center;
        color: $light;
      }
      .banner__sub-title {
        text-align: center;
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
    #theme {
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
        @include u-flex(column, center, center);
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
        font-size: 60px;
        text-align: center;
        color: $light;
      }
      .banner__sub-title {
        text-align: center;
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
    #theme {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
      .banner__wrapper {
        width: 100px;
        padding-right: 0;
        padding-left: 0;
        margin-right: 0;
        margin-left: 0;
        transform: none;
        @include u-flex(column, center, center);
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
        font-size: 60px;
        text-align: center;
        color: $light;
      }
      .banner__sub-title {
        text-align: center;
        color: $light;
      }
    }
  }
}
</style>
