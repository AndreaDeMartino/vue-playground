<template>
  <div class="tabs">
    <div class="tabs__wrapper">
      <div class="tabs__box">
        <div
          class="tab"
          :class="{ 'tab--active': active == 1 }"
          @click="getData(1)"
        >
          Vestibulum at odio sit amet
          <i v-if="active == 1" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </div>
        <div
          class="tab"
          :class="{ 'tab--active': active == 2 }"
          @click="getData(2)"
        >
          Sed vehicula neque
          <i v-if="active == 2" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </div>
        <div
          class="tab"
          :class="{ 'tab--active': active == 3 }"
          @click="getData(3)"
        >
          Nulla id libero pretium
          <i v-if="active == 3" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </div>
      </div>

      <div class="tabs__show">
        <template v-if="loader">
          <div class="tabs__loader">
            <img src="../assets/images/loader.png" alt="loader" />
          </div>
        </template>

        <span v-else v-for="(data, index) in tabData" :key="index">
          <span> {{ data }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tabData: [],
      active: 1,
      loader: false,
    };
  },
  methods: {
    getData(tab) {
      this.loader = true;
      this.active = tab;
      axios
        .get("/tab" + tab)
        .then((res) => {
          this.tabData = res.data.content;
          this.loader = false;
        })
        .catch((err) => {
          // Remember after 3 seconds to launch json-server command if it hasn't already been done
          setTimeout(() => {
            this.tabData =
              "**DevAlert** PLEASE - LAUNCH - THIS - COMMAND: json-server --watch tabs.json ";
            this.loader = false;
          }, 3000);
        });
    },
  },
  mounted() {
    this.getData(1);
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  min-height: 500px;
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
        transition: background-color 0.3s linear;
        @include u-flex;
        cursor: pointer;
        i {
          margin-left: 6px;
        }
      }
      .tab--active {
        background-color: $dark;
        color: $light;
        i {
          color: $light;
        }
      }
    }
    .tabs__show {
      height: 350px;
      width: 650px;
      background-color: $light;
      padding: 50px 100px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      overflow-y: auto;
      span {
        font-family: "gotham-medium";
        font-size: 12px;
        color: $light-text;
      }
    }
    .tabs__loader {
      width: 100%;
      height: 100%;
      @include u-flex;
      img {
        width: 10%;
        animation: rotate 1.5s linear infinite;
      }
    }
  }
}

// Animations
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

// Responsive
@include tablet() {
  .tabs {
    .tabs__wrapper {
      @include u-flex(column, center, center);
      .tabs__box {
        @include u-flex(row, space-between, center);
        .tab {
          width: calc(100% / 3);
          margin: 0 2px;
          padding: 0 40px;
        }
      }
      .tabs__show {
        width: 80%;
      }
    }
  }
}
@include mobile() {
  .tabs {
    .tabs__wrapper {
      @include u-flex(column, center, center);
      .tabs__box {
        @include u-flex(row, space-between, center);
        flex-wrap: wrap;
        padding-top: 30px;
        .tab {
          width: 100%;
          margin: 1px 0;
          padding: 0 40px;
        }
      }
      .tabs__show {
        margin: 30px 0;
        width: 80%;
        padding: 30px;
      }
    }
  }
}

@include small-mobile() {
  .tabs {
    .tabs__wrapper {
      @include u-flex(column, center, center);
      .tabs__box {
        @include u-flex(row, space-between, center);
        flex-wrap: wrap;
        padding-top: 30px;
        .tab {
          width: 100%;
          margin: 1px 0;
          padding: 0 40px;
        }
      }
      .tabs__show {
        margin: 30px 0;
        width: 80%;
        padding: 30px;
      }
    }
  }
}
</style>
