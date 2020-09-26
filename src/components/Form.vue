<template>
  <div class="contact" :class="{ sent: formValidate }">
    <div class="contact__wrapper u-container">
      <!-- Contact Title -->
      <div class="contact__text">
        <h2
          class="u-text--light u-mb--30"
          :class="{
            validated:
              !$v.message.$invalid &&
              !$v.email.$invalid &&
              !$v.name.$error &&
              !$v.lastname.$error,
          }"
        >
          contact <br />
          us.
        </h2>
        <p class="contact__subtext">
          Playground srl <br />Via G. Mazzini 3/C, <br />
          Cernusco Sul Naviglio (Milano) <br />-<br />
          T +39 0240706003
        </p>
      </div>

      <!-- Contact Form -->
      <form class="contact__form u-ml--10 u-mr--10">
        <!-- Name -->
        <div class="u-row">
          <div
            class="name u-col__xs--12 u-col__sm--12 u-col__md--5 u-col__lg--5 u-col__xl--5 u-mt--10 u-mb--10"
          >
            <label>
              <input
                @click="selectedName = true"
                v-model="$v.name.$model"
                :class="{ active: selectedName, invalid: $v.name.$invalid }"
                type="text"
              />
              <p>name</p>
              <span class="validation__error" v-if="!$v.name.minLength"
                >The name must be at least 4 characters</span
              >
            </label>
          </div>

          <!-- Last Name -->
          <div
            class="lastname u-col__xs--12 u-col__sm--12 u-col__md--6 u-col__lg--6 u-col__xl--6 u-offset__md--1 u-offset__lg--1 u-offset__xl--1 u-mt--10 u-mb--10"
          >
            <label>
              <input
                @focus="selectedLastName = true"
                v-model="$v.lastname.$model"
                :class="{
                  active: selectedLastName,
                  invalid: $v.lastname.$invalid,
                }"
                type="text"
              />
              <p>lastname</p>
              <span class="validation__error" v-if="!$v.lastname.minLength"
                >The last name must be at least 4 characters</span
              >
            </label>
          </div>
        </div>

        <!-- Email -->
        <div class="u-row u-mt--15 u-mb--20">
          <label class="email">
            <input
              @focus="selectedEmail = true"
              v-model.trim="$v.email.$model"
              :class="{ active: selectedEmail, invalid: $v.email.$invalid }"
              type="text"
            />
            <p>email</p>
            <span class="validation__error" v-if="!$v.email.email"
              >Incorrect email
            </span>
            <span class="validation__error" v-if="!$v.email.required"
              >*This field is required</span
            >
          </label>
        </div>

        <!-- Message -->
        <div class="validation__area u-row u-mb--10">
          <textarea
            name="message"
            @focus="selectedMessage = true"
            v-model="$v.message.$model"
            :class="{ active: selectedMessage, invalid: $v.message.$invalid }"
            id="message"
            rows="10"
            placeholder="message"
          >
          </textarea>
          <span class="validation__error" v-if="!$v.message.required"
            >*This field is required</span
          >
          <span class="validation__error" v-if="!$v.message.minLength"
            >The message must be at least 10 characters</span
          >
        </div>

        <!-- Subtmit Button -->
        <div class="u-row">
          <button
            @click.prevent="formValidate = true"
            class="button"
            :class="{
              disabled:
                $v.message.$invalid ||
                $v.email.$invalid ||
                $v.name.$error ||
                $v.lastname.$error,
            }"
          >
            <span>SEND <i class="fas fa-chevron-right"></i></span>
          </button>
        </div>
      </form>
    </div>

    <!-- Alert Message Was Sent -->
    <transition name="fade">
      <h4 class="sent__message" v-if="formValidate">
        MESSAGE SENT
      </h4>
    </transition>
  </div>
</template>

<script>
// Validation list
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      message: "",
      selectedName: false,
      selectedLastName: false,
      selectedEmail: false,
      selectedMessage: false,
      formValidate: false,
    };
  },
  watch: {
    // Reset Form
    formValidate: function() {
      this.name = "";
      this.lastname = "";
      this.email = "";
      this.message = "";
      this.selectedName = false;
      this.selectedLastName = false;
      this.selectedEmail = false;
      this.selectedMessage = false;
    },
  },
  validations: {
    name: {
      minLength: minLength(4),
    },
    lastname: {
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    message: {
      required,
      minLength: minLength(10),
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  min-height: 500px;
  background-color: $dark;
  color: $light;
  position: relative;
  overflow-x: hidden;
  @include u-flex;
  .sent__message {
    position: absolute;
    bottom: 12px;
    width: 100%;
    @include u-flex;
    color: $gold;
    font-family: "gotham-medium";
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 3px rgba(219, 206, 87, 0.5);
    opacity: 0;
    animation: display 2.5s ease-in;
    animation-delay: 1s;
  }
  .validation__error {
    position: absolute;
    left: 0;
    bottom: -15px;
    color: $gold;
    font-size: 10px;
    font-family: "gotham-medium";
  }
  &__wrapper {
    @include u-flex;
    flex-wrap: wrap;
    .contact__text {
      height: 350px;
      margin-right: 50px;
      h2 {
        transition: text-shadow 0.3s linear;
      }
      h2.validated {
        text-shadow: 0 0 5px rgb(192, 175, 102), 0 0 10px rgb(197, 186, 83),
          0 0 15px #000, 0 0 20px #ccc, 0 0 23px #fff, 0 0 25px $gold,
          0 0 30px $gold, 0 0 35px $gold, 2px 2px 1px rgba(206, 199, 37, 0);
      }
      .contact__subtext {
        max-width: 50%;
        color: $light;
      }
    }
    .contact__form {
      min-height: 350px;
      width: 600px;
      @include u-flex(column, center, normal);
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
        position: relative;
      }
      input.invalid.active {
        border: 1px solid $gold;
        box-shadow: 0px 2px 3px 0px rgb(119, 119, 61);
      }
      input.invalid.active + p {
        animation: inputMove 0.1s linear forwards;
        color: $gold;
        text-shadow: 0.3px 0.3px 1.5px $gold;
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
      }
      textarea {
        width: 100%;
        background-color: $dark;
        color: $light;
        padding: 10px;
        outline: none;
        resize: none;
      }
      .validation__area {
        position: relative;
      }
      textarea.invalid.active {
        border: 1px solid $gold;
        box-shadow: 0px 2px 3px 0px rgb(119, 119, 61);
      }
      textarea.invalid.active + p {
        animation: inputMove 0.1s linear forwards;
        color: $gold;
        text-shadow: 0.3px 0.3px 1.5px rgb(119, 119, 61);
      }
      .button {
        width: 30%;
        background-color: $light;
        color: $dark;
        margin: 12px 0 10px 0;
        padding: 14px;
        font-family: "gotham-medium";
        border: none;
        @include u-flex;
        margin-top: 10px;
        cursor: pointer;
        transition: background-color 0.2s linear;
        &:not(.disabled) {
          background-color: $gold;
          box-shadow: 0 0 1px $gold, 0 0 3px $gold, 0 0 5px $gold;
          color: $light;
        }
      }
      .button.disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }
  }

  .contact.sent:after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: -100%;
    background: linear-gradient(90deg, transparent, $gold);
    height: 3px;
    width: 100%;
    animation: sentMessage 3s linear;
  }
}

/****************************************************
  * Responsive
  ****************************************************/

@include mobile {
  .contact {
    .sent__message {
      font-size: 10px;
    }
    .contact__text {
      margin-bottom: 0;
      margin: 20px;
    }
    .contact__form {
      .button {
        margin-bottom: 40px;
      }
    }
  }
}

@include small-mobile {
  .contact {
    .sent__message {
      font-size: 10px;
    }
    .contact__text {
      margin-bottom: 0;
      margin: 20px;
    }
    .contact__form {
      .button {
        margin-bottom: 40px;
      }
    }
  }
}

@include tablet {
  .contact {
    .sent__message {
      font-size: 10px;
    }
    .contact__form {
      .button {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
