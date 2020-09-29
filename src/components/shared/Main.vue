<template>
  <main>
    <!-- CARDS -->
    <section class="cards">
      <div class="u-container" :class="{ iexploer: this.$browserDetect.isIE }">
        <app-card
          v-for="(info, index) in cardInfo"
          :key="index"
          :info="info"
        ></app-card>
      </div>
    </section>

    <!-- WE ARE -->
    <section class="we-are">
      <component
        :is="!this.$browserDetect.isIE ? 'appBannerIE' : 'appBanner'"
        :darkTheme="true"
      >
        <template slot="title">
          we <br />
          are.
        </template>
        <template slot="button">
          THE PLAYERS <i class="fas fa-chevron-right u-text--light"></i>
        </template>
      </component>
    </section>

    <!-- WE DO -->
    <section class="we-do">
      <component
        :is="!this.$browserDetect.isIE ? 'appBannerIE' : 'appBanner'"
        :darkTheme="false"
      >
        <template slot="title">
          we <br />
          do.
        </template>
        <template slot="button">
          THE PROJECTS <i class="fas fa-chevron-right u-text--dark"></i>
        </template>
      </component>
    </section>

    <!-- CAREERS -->
    <section class="careers">
      <component
        :is="!this.$browserDetect.isIE ? 'appBannerIE' : 'appBanner'"
        :darkTheme="true"
      >
        <template slot="title">
          careers
        </template>
        <template slot="button">
          THE POSITIONS <i class="fas fa-chevron-right u-text--light"></i>
        </template>
      </component>
    </section>

    <!-- TABS -->
    <section class="tabs">
      <app-tab></app-tab>
    </section>

    <!-- CONTACT US -->
    <section class="contact">
      <app-form></app-form>
    </section>
  </main>
</template>

<script>
// Components
import Card from "../Card.vue";
import Banner from "../Banner.vue";
import Bannerie from "../BannerIE.vue";
import Tab from "../Tab.vue";
import Form from "../Form.vue";

export default {
  components: {
    appCard: Card,
    appBanner: Banner,
    appBannerIE: Bannerie,
    appTab: Tab,
    appForm: Form,
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
            "Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.",
          img: this.simplicity(),
        },
        {
          text:
            "Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.",
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
  .u-container.iexploer {
    height: 500px;
  }
}

.we-are {
  height: 600px;
  width: 100%;
  background-image: url("../../assets/images/banner-we-are.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.we-do {
  height: 600px;
  width: 100%;
  background-image: url("../../assets/images/banner-we-do.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.careers {
  height: 600px;
  width: 100%;
  background-image: url("../../assets/images/banner-carrers.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
