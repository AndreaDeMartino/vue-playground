<template>
  <div class="contact">
    <div class="contact__wrapper u-container">
      <div class="contact__text">
        <h1 class="u-text--light u-mb--30">
          contact <br />
          us.
        </h1>
        <p class="contact__subtext">
          Playground srl <br />Via G. Mazzini 3/C, <br />
          Cernusco Sul Naviglio (Milano) <br />-<br />
          T +39 0240706003
        </p>
      </div>

      <div class="contact__form u-ml--10 u-mr--10">
        <div class="u-row">
          <div
            class="name u-col__xs--12 u-col__sm--12 u-col__md--5 u-col__lg--5 u-col__xl--5 u-mt--10 u-mb--10"
          >
            <label>
              <input
                @click="selectedName = true"
                :class="{ active: selectedName }"
                type="text"
                v-model="user.name"
              />
              <p>name</p>
            </label>
          </div>

          <div
            class="lastname u-col__xs--12 u-col__sm--12 u-col__md--6 u-col__lg--6 u-col__xl--6 u-offset__md--1 u-offset__lg--1 u-offset__xl--1 u-mt--10 u-mb--10"
          >
            <label>
              <input
                @click="selectedLastName = true"
                :class="{ active: selectedLastName }"
                type="text"
                v-model="user.lastname"
              />
              <p>lastname</p>
            </label>
          </div>
        </div>

        <div class="u-row u-mt--10 u-mb--10">
          <label class="email">
            <input
              @click="selectedEmail = true"
              :class="{ active: selectedEmail }"
              type="text"
              v-model="user.email"
            />
            <p>email</p>
          </label>
        </div>

        <div class="u-row">
          <textarea
            name="message"
            v-model="user.message"
            @click="selectedMessage = true"
            :class="{ active: selectedMessage }"
            id="message"
            rows="10"
            placeholder="message"
          >
          </textarea>
        </div>

        <div class="u-row">
          <div class="button">
            <span>SEND <i class="fas fa-chevron-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        lastName: "",
        email: "",
        message: "",
      },
      selectedName: false,
      selectedLastName: false,
      selectedEmail: false,
      selectedMessage: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  min-height: 500px;
  background-color: $dark;
  color: $light;
  @include u-flex;
  &__wrapper {
    @include u-flex;
    flex-wrap: wrap;
    .contact__text {
      height: 350px;
      margin-right: 50px;
      .contact__subtext {
        max-width: 50%;
        color: $light;
      }
    }
    .contact__form {
      min-height: 350px;
      width: 600px;
      @include u-flex(column, center, normal);
      // border: 1px solid $light;
      .name,
      .lastname,
      .email {
        position: relative;
      }
      input {
        width: 100%;
        background-color: $dark;
        color: $bg_light;
        padding: 9px;
        border: 1px solid $border;
        outline: none;
        transition: border-color 0.3s linear;
        letter-spacing: 1px;
      }
      label {
        width: 100%;
      }
      p {
        position: absolute;
        height: 12px;
        font-size: 12px;
        padding: 0 3px;
        top: calc(50% - 6px);
        left: 10px;
        color: $border;
        background-color: $dark;
        pointer-events: none;
      }
      input.active + p {
        animation: inputMove 0.1s linear forwards;
        color: $gold;
        text-shadow: 0.3px 0.3px 1.5px #b4a484;
      }
      input.active,
      textarea.active {
        border: 1px solid $gold;
        box-shadow: 0px 2px 3px 0px #c59917;
      }
      textarea {
        width: 100%;
        background-color: $dark;
        color: $light;
        padding: 10px;
        letter-spacing: 0.1rem;
        outline: none;
        resize: none;
      }
      .button {
        width: 30%;
        background-color: $light;
        color: $dark;
        margin: 8px 0 50px 0;
        padding: 14px;
        font-family: "gotham-medium";
        @include u-flex;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
          background-color: $gold;
          box-shadow: 0 0 1px $gold, 0 0 3px $gold, 0 0 5px $gold;
          color: $light;
        }
      }
    }
  }
}

//Animations
@keyframes inputMove {
  from {
    top: 0%;
    left: 10px;
  }
  to {
    top: -25%;
    left: 7px;
  }
}

// Responsive

@include mobile {
  .contact {
    .contact__text {
      margin-bottom: 0;
      margin: 20px;
    }
  }
}

@include small-mobile {
  .contact {
    .contact__text {
      margin-bottom: 0;
      margin: 20px;
    }
  }
}
</style>
