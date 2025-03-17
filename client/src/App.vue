<template>
  <HeaderComponent />
  <SliderComponent />
  <router-view id="app" />
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    FooterComponent,
  },
}
</script>
<style lang="scss">
@import './sass/base/_base.scss';
</style>
