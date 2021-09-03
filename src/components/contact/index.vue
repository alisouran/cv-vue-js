<template>
  <transition name="fade">
    <div v-if="show" class="mt-36">
      <div class="row">
        <div
          @click="activateItem('lets-talk')"
          class="d-block tab-bar--item"
          :class="active === 'lets-talk' ? 'active' : ''"
        >
          LET'S TALK
        </div>
        <div
          @click="activateItem('order')"
          class="ml-24 d-block tab-bar--item"
          :class="active === 'order' ? 'active' : ''"
        >
          ORDER A PROJECT
        </div>
      </div>
      <form @submit.prevent="proccesingForm">
        <div v-if="active === 'lets-talk'" class="row mt-36">
          <div class="col-lg-6 col-md-6 gx-2">
            <div class="input--container w-100">
              <input
                @focus="focusedInput('name')"
                @blur="blurInput()"
                class="input input--userName w-100"
                type="text"
                @input="setName($event)"
                name="name"
                :value="name"
                required
              />
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'name' || name.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                LET ME KNOW YOU
              </span>
              <span
                class="user-input-guid"
                :class="
                  focusInput === 'name' || name.length > 0
                    ? ''
                    : 'user-input-guid--disable'
                "
                >I AM</span
              >
            </div>
          </div>
          <div class="col-lg-6 col-md-6 gx-2">
            <div class="input--container w-100">
              <input
                @focus="focusedInput('email')"
                @blur="blurInput()"
                class="input w-100"
                type="email"
                @input="setEmail($event)"
                name="email"
                :value="email"
                required
              />
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'email' || email.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                YOUR EMAIL
              </span>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 gx-2 mt-36">
            <div class="input--container w-100">
              <textarea
                @focus="focusedInput('message')"
                @blur="blurInput()"
                class="w-100 input"
                rows="11"
                @input="setMessage($event)"
                name="message"
                v-model="message"
                required
              >
              </textarea>
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'message' || message.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                WHATS UP?
              </span>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <button
              :disabled="disableBtn"
              type="submit"
              class="btn mt-8 float-right mr-24"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <form @submit.prevent="proccesingOrder">
        <div v-if="active === 'order'" class="row mt-36">
          <div class="col-lg-6 col-md-6 gx-2">
            <div class="input--container w-100">
              <input
                @focus="focusedInput('name')"
                @blur="blurInput()"
                class="input input--userName w-100"
                type="text"
                @input="setName($event)"
                name="name"
                :value="name"
                required
              />
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'name' || name.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                LET ME KNOW YOU
              </span>
              <span
                class="user-input-guid"
                :class="
                  focusInput === 'name' || name.length > 0
                    ? ''
                    : 'user-input-guid--disable'
                "
                >I AM</span
              >
            </div>
          </div>
          <div class="col-lg-6 col-md-6 gx-2">
            <div class="input--container w-100">
              <input
                @focus="focusedInput('email')"
                @blur="blurInput()"
                class="input w-100"
                type="email"
                name="email"
                :value="email"
                required
                @input="setEmail($event)"
              />
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'email' || email.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                YOUR EMAIL
              </span>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 mt-36 gx-2">
            <div class="input--container w-100">
              <input
                @focus="focusedInput('company')"
                @blur="blurInput()"
                class="input w-100"
                type="text"
                required
                name="company"
                :value="company"
                @input="setCompany($event)"
              />
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'company' || company.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                YOUR COMPANY
              </span>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 gx-2 mt-36">
            <div class="input--container w-100">
              <textarea
                @focus="focusedInput('message')"
                @blur="blurInput()"
                class="w-100 input"
                rows="9"
                required
                name="order"
                v-model="message"
                @input="setMessage($event)"
              ></textarea>
              <span
                class="input--placeholder"
                :class="
                  focusInput === 'message' || message.length > 0
                    ? 'input--placeholder--active'
                    : ''
                "
              >
                YOUR ORDER
              </span>
            </div>
          </div>
          <div class="col-lg-12 col-md-12">
            <button
              :disabled="disableBtn"
              type="submit"
              class="btn mt-8 float-right mr-24"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <div
        class="success-message"
        :class="success ? 'success-message--active' : ''"
      >
        YOUR EMAIL HAS BEEN SENT SUCCESSFULLY.
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactTool',
  data() {
    return {
      show: false,
      active: 'lets-talk',
      focusInput: '',
      email: '',
      name: '',
      message: '',
      company: '',
      success: false,
      disableBtn: false,
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    activateItem(item: string) {
      this.active = item;
    },
    focusedInput(val: string) {
      this.focusInput = val;
    },
    blurInput() {
      this.focusInput = '';
    },
    setEmail($event: any) {
      this.email = $event.target.value;
    },
    setName($event: any) {
      this.name = $event.target.value;
    },
    setMessage($event: any) {
      this.message = $event.target.value;
    },
    setCompany($event: any) {
      this.company = $event.target.value;
    },
    async proccesingForm() {
      this.disableBtn = true;
      var xhr = new XMLHttpRequest();
      const resetData = () => {
        this.name = '';
        this.email = '';
        this.message = '';
        this.success = true;
        this.disableBtn = false;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      };
      xhr.open(
        'POST',
        'https://script.google.com/macros/s/AKfycbzJbU78iJtPcjsNbgYIeoM-8WQZlh4z9CW07RcxIKZibi3sRcdo67Gx-8b6-zTs_fc5/exec'
      );
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resetData();
        }
      };
      // url encode form data for sending as post data
      let data: any = {
        name: this.name as any,
        email: this.email as any,
        message: this.message as any,
      };
      var encoded = Object.keys(data)
        .map(function(k: any) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        })
        .join('&');
      xhr.send(encoded);
    },
    async proccesingOrder() {
      this.disableBtn = true;
      var xhr = new XMLHttpRequest();
      const resetData = () => {
        this.name = '';
        this.email = '';
        this.message = '';
        this.company = '';
        this.success = true;
        this.disableBtn = false;
        setTimeout(() => {
          this.success = false;
        }, 3000);
      };
      xhr.open(
        'POST',
        'https://script.google.com/macros/s/AKfycbzJbU78iJtPcjsNbgYIeoM-8WQZlh4z9CW07RcxIKZibi3sRcdo67Gx-8b6-zTs_fc5/exec'
      );
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resetData();
        }
      };
      // url encode form data for sending as post data
      let data: any = {
        name: this.name as any,
        email: this.email as any,
        order: this.message as any,
        company: this.company as any,
      };
      var encoded = Object.keys(data)
        .map(function(k: any) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        })
        .join('&');
      xhr.send(encoded);
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid var(--secondary--color);
  color: var(--secondary--color);
  font-family: 'Alatsi', sans-serif;
  font-size: 0.8em;
  caret-color: var(--vue--color);
  &--userName {
    padding-left: 45px;
  }
  &::placeholder {
    opacity: 0;
  }
  &--container {
    position: relative;
  }
  &--placeholder {
    color: var(--secondary--color);
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: 5px;
    font-size: 0.8em;
    transition: all 0.4s ease-in-out;
    user-select: none;
    z-index: -10;
    &--active {
      transform: translateY(-20px);
      font-size: 0.4em;
      opacity: 0.8;
    }
  }
}

.user-input-guid {
  color: var(--secondary--color);
  position: absolute;
  left: 0;
  bottom: 5px;
  font-size: 0.8em;
  transition: 0.4s ease-in;
  user-select: none;
  z-index: 1000;
  &--disable {
    opacity: 0;
    transition: 0.2s ease-out;
  }
}

textarea {
  border-right: 1px solid #ffffff30 !important;
}
.success-message {
  position: fixed;
  right: -1000px;
  top: -3px;
  @media screen and (max-width: 414px) {
    width: 100%;
    top: 10px;
  }
  background: var(--vue--color);
  padding: 10px 30px;
  padding-top: 7px;
  font-size: 0.7em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.8s;
  &--active {
    right: -100px;
    @media screen and (max-width: 414px) {
      right: 50%;
      transform: translateX(50%);
    }
  }
}
</style>
