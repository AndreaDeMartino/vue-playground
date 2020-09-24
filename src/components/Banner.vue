<template>
  <div class="u-row">
    <!-- Check on Theme -->
    <div class="banner" :class="[darkTheme ? BannerDark : BannerLight]">

      <h2 class="banner__title u-mb--30">
        <slot name="title"></slot>
      </h2>

      <p class="banner__sub-title">
        Consectetur adipiscing elit.
      </p>
      
      <p class="banner__sub-title u-pt--10 u-pb--35">
        Nulla condimentum tortor sem,
      </p>

      <div class="banner__button u-text--center">
        <slot name="button"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Theme
    darkTheme: {
      type: Boolean,
    },
  },
  data() {
    return {
      // Dark Theme on rx grid config
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
      // Light Theme on lx grid config
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
  .banner {
    height: 100%;
    padding-left: 100px;
    @include u-flex(column, center, flex-start);
    &__sub-title {
      font-size: 14px;
      letter-spacing: 0.1em;
      max-width: 220px;
    }
    &__button {
      font-size: 14px;
      letter-spacing: 0.2em;
      padding: 15px 25px;
      max-width: 250px;
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
    }
    .banner__sub-title {
      color: $light;
    }
  }
    // Banner Light Style
  .banner.light-mode {
    background-color: $light;
    .banner__button {
      color: $dark;
      border: 1px solid $dark;
    }
    .banner__sub-title {
      color: $dark;
    }
  }
}

// Responsive

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
    .banner {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
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
    .banner {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
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
    .banner {
      background-color: transparent;
      z-index: 5;
      padding-left: 0;
      @include u-flex(column);
    }
  }
}
</style>
