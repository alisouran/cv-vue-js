<template>
  <nav v-if="!mobile" :class="tablet ? 'pr-16 pl-16' : ''" class="navbar w-100 container-md">
    <div>
      <router-link
        class="navbar--item"
        active-class="navbar--item--active"
        @click="clickHome()"
        to="/"
        >Home</router-link
      >
      <router-link
        class="navbar--item"
        active-class="navbar--item--active"
        @click="clickAbout()"
        to="/about"
        >About</router-link
      >
      <router-link
        class="navbar--item"
        active-class="navbar--item--active"
        @click="clickContact()"
        to="/contact"
        >Contact</router-link
      >
    </div>
    <button class="float-right btn">DOWNLOAD CV</button>
  </nav>
  <nav v-if="mobile" class="navbar w-100">
    <button @click="toggleMenu()" class="btn icon-btn quiet">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="24.5"
        viewBox="0 0 36 24.5"
      >
        <g id="Menu" transform="translate(1.75 1.75)">
          <line
            id="Line_11"
            data-name="Line 11"
            :x2="open ? 22.5 : 32.5"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="3.5"
          >
            <animate
              attributeName="x2"
              from="32.5"
              to="22.5"
              dur="0.5s"
              begin="infinite"
              class="smallToBig"
            />
            <animate
              attributeName="x2"
              from="22.5"
              to="32.5"
              dur="0.5s"
              begin="infinite"
              class="bigToSmall"
            />
          </line>
          <line
            id="Line_12"
            data-name="Line 12"
            :x2="open ? 22.5 : 32.5"
            :transform="open ? 'translate(10 10.5)' : 'translate(0 10.5)'"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="3.5"
            class="transition-all"
          >
            <animate
              attributeName="x2"
              from="32.5"
              to="22.5"
              dur="0.5s"
              begin="infinite"
              class="smallToBig"
            />
            <animate
              attributeName="x2"
              from="22.5"
              to="32.5"
              dur="0.5s"
              begin="infinite"
              class="bigToSmall"
            />
          </line>
          <line
            id="Line_13"
            data-name="Line 13"
            :x2="open ? 22.5 : 32.5"
            transform="translate(0 21)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="3.5"
          >
            <animate
              attributeName="x2"
              from="32.5"
              to="22.5"
              dur="0.5s"
              begin="infinite"
              class="smallToBig"
            />
            <animate
              attributeName="x2"
              from="22.5"
              to="32.5"
              dur="0.5s"
              begin="infinite"
              class="bigToSmall"
            />
          </line>
        </g>
      </svg>
    </button>
    <button class="float-right btn mr-8">DOWNLOAD CV</button>
  </nav>
  <div
    class="w-100 drawer--container"
    :class="open ? 'drawer--container--open' : ''"
    @click="toggleMenu()"
  >
    <div class="drawer" id="menu-drawer" :class="open ? 'drawer--open' : ''">
      <router-link
        class="navbar--item mr-0"
        active-class="navbar--item--active"
        @click="clickHome()"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="navbar--item mr-0"
        active-class="navbar--item--active"
        @click="clickAbout()"
        to="/about"
      >
        About
      </router-link>
      <router-link
        class="navbar--item mr-0"
        active-class="navbar--item--active"
        @click="clickContact()"
        to="/contact"
      >
        Contact
      </router-link>
      <button class="float-right btn">DOWNLOAD CV</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mqMixin from '@/mixins/mqMixin';

export default defineComponent({
  name: 'Navbar',
  mixins: [mqMixin],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    clickHome() {
      this.$emit('click-home');
    },
    clickAbout() {
      this.$emit('click-about');
    },
    clickContact() {
      this.$emit('click-contact');
    },
    toggleMenu() {
      let notOpen = document.getElementsByClassName('bigToSmall') as any;
      let open = document.getElementsByClassName('smallToBig') as any;
      this.open = !this.open;

      if (this.open) {
        for (let i = 0; i < open.length; i++) {
          open[i]?.beginElement();
        }
      } else {
        for (let i = 0; i < notOpen.length; i++) {
          notOpen[i]?.beginElement();
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 30px;
  @media screen and (max-width: 750px) {
    height: 50px;
    margin-bottom: 10px;
  }
  align-items: center;
  &--item {
    color: var(--secondary--color);
    margin-right: 16px;
    border-bottom: 3px solid transparent;
    transition: border-bottom 0.5s ease-in-out;
    @media screen and (max-width: 750px) {
      font-size: 1.2em;
    }
    &--active {
      border-bottom: 3px solid var(--secondary--color);
      transition: border-bottom 0.5s ease-in-out;
    }
  }
}
.transition-all {
  transition: all 0.5s;
}

.drawer {
  z-index: 100000001;
  height: 100vh;
  width: 60%;
  background: var(--drawer--color);
  top: 0;
  position: fixed;
  right: -61%;
  transition: right 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
  &--container {
    z-index: 100000000;
    transition: 0.2s ease-in-out;
    &--open {
      background: #00000050;
      height: 100vh;
      width: 100%;
      right: 0;
      top: 0;
      position: fixed;
    }
  }
  &--open {
    right: 0;
  }
  & button {
    bottom: 20px;
    position: absolute;
  }
}
</style>
