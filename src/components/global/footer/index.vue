<template>
  <footer>
    <div
      class="container-md d-flex"
      :class="mobile || tablet ? 'justify-content-center' : ''"
    >
      <div>
        <div class="d-inline-flex align-center">
          <img class="mw-100" src="/img/icons/virgool.svg" />
          <span class="social-text ml-8">BLOG</span>
        </div>
        <div class="d-inline-flex align-center ml-16">
          <img class="mw-100" src="/img/icons/github.svg" />
          <span class="social-text ml-8">GITHUB</span>
        </div>
        <div v-if="!mobile" class="d-inline-flex align-center ml-16">
          <img class="mw-100" src="/img/icons/dribbble.svg" />
          <span class="social-text ml-8">DRIBBBLE</span>
        </div>
        <div class="d-inline-flex align-center ml-16">
          <img class="mw-100" src="/img/icons/linkedin.svg" />
          <span class="social-text ml-8">LINKEDIN</span>
        </div>
      </div>
      <!-- <span class="float-right">ALIREZA SOURAN</span> -->
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mqMixin from '@/mixins/mqMixin';

export default defineComponent({
  name: 'Footer',
  mixins: [mqMixin],
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: 46px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding-bottom: 16px;
  }
}
.social-text {
  font-size: 1em;
  @media screen and (max-width: 768px) and (min-height: 1024px) {
    font-size: 1.2em;
  }
  @media screen and (max-width: 320px) {
    font-size: 0.82em;
  }
}
</style>
