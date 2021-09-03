<template>
  <div class="home">
    <HomeTool />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HomeTool } from '@/components/'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HomeTool,
  },
});
</script>
