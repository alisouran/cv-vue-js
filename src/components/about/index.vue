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
          @click="activateItem(skill.slug)"
          class=" d-block tab-bar--item"
          v-for="skill in mainSkills"
          :key="skill.slug"
          :class="[
            active === skill.slug ? 'active' : '',
            mobile ? '' : 'ml-24 ',
          ]"
        >
          {{ skill.title.toUpperCase() }}
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
          v-for="skill in mainSkills"
          v-show="getSlugs(skill.slug)"
          :key="skill.title"
          class="col-md-3 col-lg-3 col-xl-3 col-sm-6 col-xs-6"
          :style="{
            width: mobile
              ? `${
                  active === skill.slug ? progressSize * 2 + 20 : progressSize
                }px`
              : '',
            margin: mobile ? (active === skill.slug ? '0 auto' : '') : '',
          }"
        >
          <ProgressCircle
            :data="data[skill.slug]"
            :notExpandedTitle="skill.title"
            :notExpandedPct="skill.subtitle"
            :expanded="active === skill.slug"
            :size="progressSize"
            :mobile="mobile"
            :value="mainSkill.value"
            :min="mainSkill.min"
            :max="mainSkill.max"
            :title="mainSkill.title"
          />
        </div>
      </div>
      <div
        class="row "
        :class="mobile ? 'about-me-desc--container' : ''"
        v-if="!mobile"
      >
        <h4 class="tab-bar--item active">WHO AM I?</h4>
        <p
          v-for="(p, i) in whoAmI"
          v-html="p"
          :key="i"
          class="about-me-desc mt-8"
        ></p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProgressCircle } from '@/library';
import mqMixin from '@/mixins/mqMixin';
import json from '@/config.json';

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
      mainSkill: {
        value: json['main-skill'].value,
        max: json['main-skill'].max,
        min: json['main-skill'].min,
        title: json['main-skill'].title,
      },
      mainSkills: [...Object.values(json['main-skills'])],
      whoAmI: [...Object.values(json['who-am-i'].description)],
      data: {
        frontend: [
          ...Object.values(json.skills)
            .map((item) => (item.type === 'frontend' ? item : ''))
            .filter((o) => o !== ''),
        ],
        backend: [
          ...Object.values(json.skills)
            .map((item) => (item.type === 'backend' ? item : ''))
            .filter((o) => o !== ''),
        ],
        android: [
          ...Object.values(json.skills)
            .map((item) => (item.type === 'android' ? item : ''))
            .filter((o) => o !== ''),
        ],
      },
    };
  },
  methods: {
    activateItem(item: string) {
      this.active = item;
    },
    getSlugs(slug: string) {
      if (slug === 'frontend') {
        return this.active !== 'backend' && this.active !== 'android';
      } else if (slug === 'backend') {
        return this.active !== 'frontend' && this.active !== 'android';
      } else if (slug === 'android') {
        return this.active !== 'backend' && this.active !== 'frontend';
      }
    },
  },
  computed: {},
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
