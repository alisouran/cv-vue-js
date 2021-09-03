<template>
  <Navbar
    @click-contact="clickContact()"
    @click-home="clickHome()"
    @click-about="clickAbout()"
  />
  <div
    class="container-md main-container"
    :class="mobile ? 'pr-8 pl-8 mt-24' : tablet ? 'pr-16 pl-16 mt-24' : ''"
  >
    <div class="row main-row">
      <div
        class="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3 route-veiw-container"
      >
        <Title :title="title" :subtitle="subtitle" :className="className" />
      </div>
      <ProfilePicture />
      <div
        class="route-veiw-container col-sm-12 col-xs-12 col-xl-9 col-md-9 col-lg-9"
      >
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProfilePicture, Title, Navbar, Footer } from 'global';
import mqMixin from '@/mixins/mqMixin';
import json from '@/config.json';

export default defineComponent({
  mixins: [mqMixin],
  components: {
    ProfilePicture,
    Title,
    Navbar,
    Footer,
  },
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
  },
  data() {
    return {
      title: '',
      subtitle: '',
      className: '',
      route: '',
    };
  },
  methods: {
    clickHome() {
      this.title = json.name.first;
      this.subtitle = json.name.last;
      this.className = 'home';
    },
    clickAbout() {
      this.title = 'ABOUT';
      this.subtitle = 'ME';
      this.className = 'about';
    },
    clickContact() {
      this.title = "Let's";
      this.subtitle = 'Talk';
      this.className = 'contact';
    },
  },
  mounted() {
    if (window.location.pathname === '/') {
      this.title = json.name.first;
      this.subtitle = json.name.last;
      this.className = 'home';
    } else if (window.location.pathname === '/about') {
      this.title = 'ABOUT';
      this.subtitle = 'ME';
      this.className = 'about';
    } else if (window.location.pathname === '/contact') {
      this.title = "Let's";
      this.subtitle = 'Talk';
      this.className = 'contact';
    }
  },
});
</script>

<style lang="scss" scoped>
.route-veiw-container {
  z-index: 1000;
}
.main-container {
  position: relative;
  min-height: 500px;
  @media screen and (max-width: 414px) {
    min-height: auto;
  }
}
.main-row {
  align-content: space-between;

  @media screen and (max-width: 414px) {
    min-height: 580px;
  }
  @media screen and (max-width: 375px) {
    min-height: 520px;
  }
  @media screen and (max-width: 768px) and (min-height: 740px) {
    min-height: 580px;
  }
  @media screen and (min-height: 812px) {
    min-height: 670px;
  }
  @media screen and (min-height: 1024px) {
    min-height: 780px;
  }
  @media screen and (max-width: 768px) and (min-height: 1024px) {
    min-height: 760px;
  }
  @media screen and (max-width: 320px) {
    min-height: 420px;
  }
}
</style>
