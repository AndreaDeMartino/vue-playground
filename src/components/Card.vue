<template>
  <div class="card">
    <!-- Card Image -->
    <div class="card__image">
      <img :src="info.img" alt="card-logo" />
    </div>

    <!-- Card Content -->
    <div class="card__content">
      <p class="card__text u-text--center">
        {{ info.text }}
      </p>
    </div>

    <!-- Card Button -->
    <div class="card__button">
      <h4 class="button__text">READ MORE</h4>
      <span class="button--effect"></span>
    </div>
  </div>
</template>

<script>
export default {
  // The images and text of the card are added by this props
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  width: 350px;
  margin: 15px;
  background-color: $light;
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
      max-height: 90%;
      padding: 0 50px;
      font-size: 16px;
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
    &:hover,
    &:active,
    &:focus {
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
</style>
