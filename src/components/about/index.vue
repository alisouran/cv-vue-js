<template>
  <transition name="fade">
    <div v-if="show" class="container-fluid">
      <div
        class="row about-me-desc--container"
        :class="mobile ? 'pr-16 pl-16' : 'mt-36'"
        v-if="mobile"
      >
        <h4 class="tab-bar--item active">WHO AM I?</h4>
        <p class="about-me-desc mt-8">
          I am a computer science graduated from University of Kashan.
        </p>
        <p class="about-me-desc mt-8">
          I have been learning different technologies for nearly five years and
          have been working as a web developer in this field for four years; I
          am a React Native starter. :)
        </p>
        <p class="about-me-desc mt-8">
          I used to work as a freelancer, but now I'm working as a frontend
          developer at <img src="/img/icons/virgool.svg" /> Virgool.
        </p>
      </div>
      <div class="row" :class="mobile ? 'tab-bar' : ''">
        <div
          @click="activateItem('skills')"
          class="d-block tab-bar--item"
          :class="active === 'skills' ? 'active' : ''"
        >
          SKILLS
        </div>
        <div
          @click="activateItem('frontend')"
          class=" d-block tab-bar--item"
          :class="[
            active === 'frontend' ? 'active' : '',
            mobile ? '' : 'ml-24 ',
          ]"
        >
          FRONT-END
        </div>
        <div
          @click="activateItem('backend')"
          class="d-block tab-bar--item"
          :class="[
            active === 'backend' ? 'active' : '',
            mobile ? '' : 'ml-24 ',
          ]"
        >
          BACK-END
        </div>
        <div
          @click="activateItem('android')"
          class="d-block tab-bar--item"
          :class="[
            active === 'android' ? 'active' : '',
            mobile ? '' : 'ml-24 ',
          ]"
        >
          ANDROID
        </div>
      </div>
      <div
        class="row mt-24"
        :style="
          mobile &&
          (active === 'backend' ||
            active === 'frontend' ||
            active === 'android')
            ? `margin-bottom: ${progressSize}px`
            : ''
        "
        :class="[
          mobile &&
          !(
            active === 'backend' ||
            active === 'frontend' ||
            active === 'android'
          )
            ? 'justify-content-center overflow-hidden progress-container'
            : '',
          mobile ? '' : 'mt-24 mb-24',
        ]"
      >
        <div
          v-show="active !== 'backend' && active !== 'android'"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6"
          :style="{
            width: mobile
              ? `${
                  active === 'frontend' ? progressSize * 2 + 20 : progressSize
                }px`
              : '',
            margin: mobile ? (active === 'frontend' ? '0 auto' : '') : '',
          }"
        >
          <ProgressCircle
            :data="frontEndData"
            notExpandedTitle="Front-End"
            notExpandedPct="4 YEARS"
            :expanded="active === 'frontend'"
            :size="progressSize"
            :mobile="mobile"
            :value="javascriptData.value"
            :min="javascriptData.min"
            :max="javascriptData.max"
          />
        </div>
        <div
          v-show="active !== 'frontend' && active !== 'android'"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6"
          :style="{
            width: mobile
              ? `${
                  active === 'backend' ? progressSize * 2 + 20 : progressSize
                }px`
              : '',
            margin: mobile ? (active === 'backend' ? '0 auto' : '') : '',
          }"
        >
          <ProgressCircle
            notExpandedTitle="Back-End"
            notExpandedPct="2 YEARS"
            :data="backendData"
            :expanded="active === 'backend'"
            :size="progressSize"
            :mobile="mobile"
            :value="javascriptData.value"
            :min="javascriptData.min"
            :max="javascriptData.max"
          />
        </div>
        <div
          v-show="active !== 'frontend' && active !== 'backend'"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6"
          :style="{
            width: mobile
              ? `${
                  active === 'android' ? progressSize * 2 + 20 : progressSize
                }px`
              : '',
            margin: mobile ? (active === 'android' ? '0 auto' : '') : '',
          }"
        >
          <ProgressCircle
            notExpandedTitle="Android"
            notExpandedPct="1 YEAR"
            :data="androidData"
            :expanded="active === 'android'"
            :size="progressSize"
            :mobile="mobile"
            :value="javascriptData.value"
            :min="javascriptData.min"
            :max="javascriptData.max"
          />
        </div>
      </div>
      <div
        class="row "
        :class="mobile ? 'about-me-desc--container' : ''"
        v-if="!mobile"
      >
        <h4 class="tab-bar--item active">WHO AM I?</h4>
        <p class="about-me-desc mt-8">
          I am a computer science graduated from University of Kashan.
        </p>
        <p class="about-me-desc mt-8">
          I have been learning different technologies for nearly five years and
          have been working as a web developer in this field for four years; I
          am a React Native starter. :)
        </p>
        <p class="about-me-desc mt-8">
          I used to work as a freelancer, but now I'm working as a frontend
          developer at <img src="/img/icons/virgool.svg" /> Virgool.
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProgressCircle } from '@/library';
import mqMixin from '@/mixins/mqMixin';

export default defineComponent({
  name: 'AboutTool',
  components: {
    ProgressCircle,
  },
  mixins: [mqMixin],
  data() {
    return {
      active: 'skills',
      progressSize: 160,
      show: false,
      javascriptData: {
        value: 4,
        max: 5,
        min: 0,
      },
      frontEndData: [
        {
          value: 4,
          max: 5,
          min: 0,
          title: 'React',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'react',
        },
        {
          value: 4,
          max: 5,
          min: 0,
          title: 'Next',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'next',
        },
        {
          value: 3,
          max: 5,
          min: 0,
          title: 'Vue',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'vue',
        },
      ],
      backendData: [
        {
          value: 2,
          max: 5,
          min: 0,
          title: 'Node',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'node',
        },
        {
          value: 2,
          max: 5,
          min: 0,
          title: 'MongoDB',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'mongo',
        },
        {
          value: 2,
          max: 5,
          min: 0,
          title: 'Express',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'express',
        },
      ],
      androidData: [
        {
          value: 2,
          max: 5,
          min: 0,
          title: 'ReactNative',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'react-native',
        },
        {
          value: 1,
          max: 5,
          min: 0,
          title: 'Flutter',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'flutter',
        },
      ],
    };
  },
  methods: {
    activateItem(item: string) {
      this.active = item;
    },
  },
  mounted() {
    this.show = true;
    if (this.windowWidth < 340) {
      this.progressSize = 140;
    }
  },
});
</script>

<style scoped lang="scss">
h4 {
  font-size: 1em;
}
.about-me-desc {
  font-size: 1em;
  @media screen and (max-width: 375px) {
    font-size: 0.8em;
  }
  text-align: justify;
  line-height: 1.2;
  &--container {
    @media screen and (max-width: 414px) {
      margin-top: 70px;
    }
    @media screen and (max-width: 375px) {
      margin-top: 70px;
    }
  }
}
.centerize-all {
  @media screen and (max-width: 414px) {
    margin-left: 16px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 8px;
  }
}
.progress-container {
  gap: 20px;
}
</style>
