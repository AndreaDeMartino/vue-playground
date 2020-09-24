<template>
  <div class="card">
    <div class="card__image">
      <img :src="info.img" alt="card-logo" />
    </div>

    <div class="card__content">
      <p class="card__text u-text--center">
        {{ info.text }}
      </p>
    </div>

    <div class="card__button">
      <h4 class="button__text">READ MORE</h4>
      <span class="button--effect"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $light;
  height: 350px;
  width: 350px;
  margin: 15px;
  @include u-flex(column);
  &__image img {
    height: 100px;
    width: 100%;
    object-fit: cover;
  }
  &__content {
    height: 200px;
    width: 100%;
    @include u-flex();
    .card__text {
      padding: 0 50px;
      font-size: 16px;
      max-height: 90%;
      overflow-y: auto;
    }
  }
  &__button {
    height: 50px;
    width: 100%;
    background: #000;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    @include u-flex;
    &:hover {
      .button--effect {
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 3px;
        background: linear-gradient(270deg, transparent, $gold);
        animation: button-animate 1.5s linear;
        animation-delay: 0s;
      }
      .button__text {
        color: $gold;
        text-shadow: 1px 1px 1px rgba(119, 115, 60, 0.795);
      }
    }
    .button__text {
      font-size: 14px;
      letter-spacing: 0.1em;
      color: $light;
      transition: color 0.7s ease-in, text-shadow 0.7s linear;
    }
  }
}

//KeyFrames
@keyframes button-animate {
  0% {
    left: 100%;
  }

  100% {
    left: -100%;
  }
}
</style>
