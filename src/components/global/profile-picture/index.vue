<template>
  <div
    class="image-container profile-pic"
    :class="isHome ? '' : 'image-container--not-home profile-pic--left'"
  >
    <img :src="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import json from '@/config.json';

export default defineComponent({
  name: 'ProfilePicture',
  data: () => {
    return {
      image: json.picture,
    };
  },
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
  },
});
</script>

<style lang="scss" scoped>
$image-width: 360px;
$image-height: 504px;

$image-width-large: $image-width;
$image-width-small: 202px;

$image-width--mobile: 250px;
$image-height--mobile: 320px;

$image-width-large--mobile: $image-width--mobile;
$image-width-small--mobile: 100px;

$image-width--mobile--414: 290px;
$image-height--mobile--414: 360px;

$image-width-large--mobile--414: $image-width--mobile--414;
$image-width-small--mobile--414: 100px;

$image-width--mobile--320: 200px;
$image-height--mobile--320: 270px;

$image-width-large--mobile--320: $image-width--mobile--320;
$image-width-small--mobile--320: 100px;

@mixin calcImageSize($width) {
  max-height: $image-height * $width / $image-width;
  min-height: $image-height * $width / $image-width;
}

.image-container {
  max-width: $image-width-large;
  min-width: $image-width-large;
  @include calcImageSize($image-width-large);

  @media screen and (max-width: 414px) {
    max-width: $image-width-large--mobile--414;
    min-width: $image-width-large--mobile--414;
    @include calcImageSize($image-width-large--mobile--414);
  }
  @media screen and (max-width: 375px) {
    max-width: $image-width-large--mobile;
    min-width: $image-width-large--mobile;
    @include calcImageSize($image-width-large--mobile);
  }

  @media screen and (max-width: 768px) and (min-height: 740px) {
    max-width: 400px;
    min-width: 400px;
    min-height: 450px;
    max-height: 450px;
  }
  @media screen and (max-width: 1366px) and (min-height: 1024px) {
    max-width: 550px;
    min-width: 550px;
    min-height: 650px;
    max-height: 650px;
  }
  @media screen and (min-height: 812px) {
    max-width: $image-width-large--mobile;
    min-width: $image-width-large--mobile;
    min-height: 500px;
    max-height: 500px;
  }
  @media screen and (min-height: 1024px) {
    max-width: 500px;
    min-width: 500px;
    min-height: 600px;
    max-height: 600px;
  }
  @media screen and (max-width: 320px) {
    max-width: $image-width-large--mobile--320;
    min-width: $image-width-large--mobile--320;
    @include calcImageSize($image-width-large--mobile--320);
  }
  overflow: hidden;
  border-radius: 6px;
  transition: all 0.8s ease-in-out;
  &--not-home {
    max-width: $image-width-small;
    min-width: $image-width-small;
    @include calcImageSize($image-width-small);
    @media screen and (max-width: 375px) {
      max-width: $image-width-small--mobile;
      min-width: $image-width-small--mobile;
      @include calcImageSize($image-width-small--mobile);
    }
  }
}

.profile-pic {
  top: 0px;
  left: 215px;
  & img {
    border-radius: 6px;
  }
  @media screen and (max-width: 414px) {
    right: 30px;
    top: 65px;
    left: auto;
  }
  @media screen and (max-width: 375px) {
    right: 30px;
    top: 60px;
    left: auto;
  }
  @media screen and (max-width: 320px) {
    right: 30px;
    top: 55px;
    left: auto;
  }
  position: absolute;
  &--left {
    top: 190px;
    left: 0px;
    @media screen and (max-width: 414px) {
      top: 0px;
      left: auto;
      right: 8px;
      max-width: 180px;
      min-width: 180px;
      min-height: 120px;
      max-height: 120px;
    }
    @media screen and (max-width: 375px) {
      top: 0px;
      left: auto;
      right: 8px;
      max-width: 190px;
      min-width: 190px;
    }
  }
}

img {
  /* for the img inside your div */
  max-height: 100%;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
