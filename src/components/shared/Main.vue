<template>
  <section class="cards u-pt--15">
    <div class="u-container">
      <app-card
        v-for="(info, index) in cardInfo"
        :key="index"
        :info="info"
      ></app-card>
    </div>
  </section>
</template>

<script>
// Components
import Card from "../Card.vue";

export default {
  components: {
    appCard: Card,
  },
  data() {
    return {
      cardInfo: [
        {
          text:
            "Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.",
          img: this.playHarder(),
        },
        {
          text:
            "Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.",
          img: this.simplicity(),
        },
        {
          text:
            "Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.",
          img: this.innovation(),
        },
      ],
    };
  },
  methods: {
    playHarder() {
      return require("../../assets/images/card-play-harder.png");
    },
    innovation() {
      return require("../../assets/images/card-innovation.png");
    },
    simplicity() {
      return require("../../assets/images/card-simplicity.png");
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  background-color: $bg_light;
  .u-container {
    min-height: 500px;
    @include u-flex;
    flex-wrap: wrap;
  }
}
</style>
