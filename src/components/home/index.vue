<template>
  <transition name="fade">
    <div>
      <div :class="mobile ? '' : tablet ? '' : 'float-right'">
        <h1 class="mb-8">FRONT-END DEVELOPER</h1>
        <h1 class="text-left d-inline">BASED IN TEHRAN</h1>
        <h3 class="d-inline">IRAN</h3>
      </div>
      <div v-if="!mobile && !tablet" class="position-absolute text-justify">
        <span>
          I AM A OPEN SOURCE SOFTWARE ADVOCATE.
        </span>
        <span class="more-btn"
          >More...
          <span></span>
        </span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mqMixin from '@/mixins/mqMixin';
export default defineComponent({
  name: 'HomeTool',
  props: [],
  mixins: [mqMixin],
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.06em;
  letter-spacing: -2px;
  @media screen and (max-width: 414px) {
    font-size: 2em;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.8em;
  }
  @media screen and (max-width: 320px) {
    font-size: 1.5em;
  }
}
h3 {
  font-size: 1em;
}

div.position-absolute {
  bottom: 0px;
  right: 0;
  width: 190px;
  & span {
    display: inline-block;
    font-size: 0.7em;
  }
  & .more-btn {
    cursor: pointer;
    font-size: 0.6em;
    & span {
      min-width: 50px;
      position: absolute;
      bottom: -3px;
      left: 0px;
      height: 3px;
      background-color: var(--secondary--color);
      transition: min-width 0.8s ease-in-out;
    }
    &:hover {
      & span {
        min-width: 400px;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
  transition-delay: 0.8s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
