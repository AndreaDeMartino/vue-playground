<template>
  <div class="tabs">
    <div class="tabs__wrapper">
      <div class="tabs__box">
        <div class="tab tab--active">Vestibulum at odio sit amet</div>
        <div class="tab">Sed vehicula neque</div>
        <div class="tab">Nulla id libero pretium</div>
      </div>

      <div class="tabs__show">
        Vestibulum at odio sit amet diam consectetur congue. Donec imperdiet
        tincidunt nisi non dignissim. Maecenas diam metus, fermentum a velit ut,
        auctor consequat ligula. In ultrices lobortis venenatis. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Quisque dignissim sit amet lectus ac tincidunt. Quisque bibendum mi at
        tempus tempus. Suspendisse pretium, quam eu faucibus cursus, nunc leo
        pharetra justo, ut rutrum lorem ipsum quis velit. Aenean imperdiet
        molestie dignissim. Curabitur faucibus nulla metus, vel ornare libero
        accumsan eget.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  height: 500px;
  width: 100%;
  background-color: $bg_light;
  @include u-flex;
  &__wrapper {
    @include u-flex(row, center, flex-start);
    .tabs__box {
      .tab {
        height: 60px;
        width: 400px;
        background-color: $bg_dark;
        font-family: "gotham-book";
        margin: 1px 0;
        @include u-flex;
        cursor: pointer;
      }
      .tab--active {
        background-color: $dark;
        color: $light;
      }
    }
    .tabs__show {
      height: 350px;
      width: 750px;
      background-color: $light;
      padding: 50px 100px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
