<template>
  <div :class="`title-container--${className}`">
    <h1 class="title">
      {{ title }}
    </h1>
    <h1
      class="title"
      :class="[`title--${className}`, isAbout() ? 'w-100 text-right' : '']"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        v-if="isAbout() && mobile"
        :class="isAbout() ? 'float-left mt-24 ml-16' : ''"
        @click="scrollToAbout()"
      >
        <g id="go-down" transform="translate(-1641 -881)">
          <g
            id="Ellipse_1"
            data-name="Ellipse 1"
            transform="translate(1641 881)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
          >
            <circle cx="11" cy="11" r="11" stroke="none" />
            <circle cx="11" cy="11" r="10.5" fill="none" />
          </g>
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(1648.672 884.512)"
          >
            <path
              id="bxs-down-arrow"
              d="M6.057,12.348a.332.332,0,0,0,.547,0l3-4.326A.332.332,0,0,0,9.326,7.5H3.336a.333.333,0,0,0-.274.522Z"
              transform="translate(-3.004 2.484)"
              fill="#fff"
            />
            <path
              id="bx-down-arrow"
              d="M9.621,7.678A.333.333,0,0,0,9.326,7.5H3.336a.333.333,0,0,0-.274.522l3,4.326a.332.332,0,0,0,.547,0l3-4.326a.332.332,0,0,0,.021-.344Zm-3.29,3.9L3.971,8.166h4.72Z"
              transform="translate(-3.003 -2.508)"
              fill="#fff"
            />
            <path
              id="bxs-down-arrow-2"
              data-name="bxs-down-arrow"
              d="M6.057,12.348a.332.332,0,0,0,.547,0l3-4.326A.332.332,0,0,0,9.326,7.5H3.336a.333.333,0,0,0-.274.522Z"
              transform="translate(-3.003 -7.5)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
      {{ subtitle }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mqMixin from '@/mixins/mqMixin';

export default defineComponent({
  name: 'Title',
  mixins: [mqMixin],
  props: {
    title: String,
    subtitle: String,
    className: String,
  },
  computed: {},
  methods: {
    scrollToAbout() {
      window.scrollTo({
        top: this.windowHeight,
        behavior: 'smooth',
      });
    },
    isAbout() {
      return this.$route.path === '/about';
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.5em;
  @media screen and (max-width: 320px) {
    font-size: 2.2em;
  }
  &--home {
    margin-left: 35px;
  }
  &--about {
    float: right;
  }
  &--contact {
    float: right;
  }
}
.title-container {
  &--about,
  &--contact {
    width: 202px;
    @media screen and (max-width: 414px) {
      width: 145px;
    }
    @media screen and (max-width: 375px) {
      width: 145px;
    }
  }
}
</style>
