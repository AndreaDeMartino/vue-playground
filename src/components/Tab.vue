<template>
  <div class="tabs" :class="{ iexploer: this.$browserDetect.isIE }">
    <div class="tabs__wrapper">
      <div class="tabs__box">
        <!-- First Tab -->
        <div
          class="tab"
          :class="{ 'tab--active': active == 1 }"
          @click="getData(1)"
        >
          <p class="tab__text">Vestibulum at odio sit amet</p>
          <i v-if="active == 1" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </div>

        <!-- Second Tab -->
        <div
          class="tab"
          :class="{ 'tab--active': active == 2 }"
          @click="getData(2)"
        >
          <p class="tab__text">Sed vehicula neque</p>
          <i v-if="active == 2" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </div>

        <!-- Third tab -->
        <div
          class="tab"
          :class="{ 'tab--active': active == 3 }"
          @click="getData(3)"
        >
          <p class="tab__text">Nulla id libero pretium</p>
          <i v-if="active == 3" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </div>
      </div>

      <!-- Tabs Show Box -->
      <div class="tabs__show">
        <transition name="fade">
          <div class="tabs__loader" v-if="loader">
            <img src="../assets/images/loader.png" alt="loader" />
          </div>
        </transition>

        <transition name="fade">
          <div v-if="!loader" class="show__area">
            <span v-for="(data, index) in tabData" :key="index">
              {{ data }}
            </span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// Import Axios
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
        .get("/tab" + tab + ".json")
        .then((res) => {
          this.tabData = res.data.content;
          this.loader = false;
        })
        .catch((err) => {
          this.tabData = "Error to load this tab";
          setTimeout(() => {
            this.loader = false;
          }, 1000);
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
        display: flex;
        align-items: center;
        cursor: pointer;
        .tab__text {
          padding-left: 70px;
          color: $dark;
          text-align: left;
        }
        i {
          margin-left: 6px;
        }
      }
      .tab--active {
        background-color: $dark;
        .tab__text {
          color: $light;
        }
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
      position: relative;
      .show__area {
        span {
          font-family: "gotham-book";
          font-size: 14px;
          color: $dark;
        }
      }
    }
    .tabs__loader {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 50px;
        height: 50px;
        animation: rotate 1.5s linear infinite;
      }
    }
  }
}
.tabs.iexploer {
  height: 500px;
}

/****************************************************
  * Responsive
  ****************************************************/

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
          &__text {
            padding-left: 0;
          }
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
          @include u-flex;
          &__text {
            padding-left: 0;
          }
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
          @include u-flex;
          &__text {
            padding-left: 0;
          }
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
