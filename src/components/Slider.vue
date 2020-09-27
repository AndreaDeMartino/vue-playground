<template>
  <div class="slider">
    <!-- Slider Images -->
    <transition name="fade">
      <img
        class="slider__image"
        src="../assets/images/slide-hello.jpg"
        alt="slider-hello"
        v-if="actualBg == 1"
      />
    </transition>
    <transition name="fade">
      <img
        class="slider__image"
        src="../assets/images/slide-play.jpg"
        alt="slider-play"
        v-if="actualBg == 2"
      />
    </transition>
    <transition name="fade">
      <img
        class="slider__image"
        src="../assets/images/slide-circle.jpg"
        alt="slider-circle"
        v-if="actualBg == 3"
      />
    </transition>

    <!-- Slider Text -->
    <div class="slider__text">
      <h1 class="u-text--light u-mb--30">
        lorem <br />
        ipsum.
      </h1>
      <p class="u-text--light">
        Consectetur adipiscing elit.
      </p>
      <p class="u-text--light u-pt--10 u-pb--10">
        Nulla condimentum tortor sem,
      </p>
      <p class="u-text--light">
        in semper nisl bibendum eu.
      </p>
    </div>

    <!-- Slider Buttons -->
    <i
      class="slider__left fas fa-chevron-left"
      @click.prevent="sliderLeft()"
    ></i>
    <i
      class="slider__right fas fa-chevron-right"
      @click.prevent="sliderRight()"
    ></i>

    <!-- Slider Bottom Selector -->
    <ul class="slider__selector">
      <li v-for="(background, index) in backgrounds" :key="background">
        <i
          class="fas fa-circle u-text--light"
          :class="{ active: index + 1 == actualBg }"
          @click.prevent="actualBg = index + 1"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgrounds: ["hello", "play", "circle"],
      actualBg: 1,
      sliderAnimation: false,
    };
  },
  methods: {
    sliderRight() {
      if (!this.sliderAnimation) {
        this.sliderAnimation = true;
        this.actualBg == this.backgrounds.length
          ? (this.actualBg = 1)
          : (this.actualBg += 1);
        setTimeout(() => {
          this.sliderAnimation = false;
        }, 600);
      }
    },
    sliderLeft() {
      if (!this.sliderAnimation) {
        this.sliderAnimation = true;
        this.actualBg == 1
          ? (this.actualBg = this.backgrounds.length)
          : (this.actualBg -= 1);
        setInterval(() => {
          console.log(this.sliderAnimation);
          this.sliderAnimation = false;
        }, 600);
      }
    },
  },
  mounted() {
    setInterval(() => {
      if (!this.sliderAnimation) {
        this.sliderRight();
      }
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
.slider {
  height: 100vh;
  width: 100%;
  position: relative;
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  &__right,
  &__left {
    position: absolute;
    top: 50%;
    color: $light;
    transform: translateY(-50%);
    font-size: 26px;
    z-index: 5;
    opacity: 0.5;
    transition: opacity 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  &__left {
    left: 5%;
  }
  &__right {
    right: 5%;
  }
  &__text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20%;
    p {
      opacity: 0.7;
    }
  }
  &__selector {
    @include u-list(10);
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    i {
      opacity: 0.5;
      transition: opacity 0.3s;
      cursor: pointer;
    }
    .active {
      opacity: 1;
      @include u-led;
    }
  }
}

/****************************************************
  * Responsive
  ****************************************************/

@include mobile {
  .slider {
    &__text {
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .slider__image {
      filter: blur(2px);
    }
  }
}
@include small-mobile {
  .slider {
    &__text {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .slider__image {
    filter: blur(2px);
  }
}
</style>
