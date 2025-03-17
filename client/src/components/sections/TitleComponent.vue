<template>
  <div class="title">
    <h1 :style="titleColor">{{ title }}</h1>
    <h2 :style="subtitleColor">{{ subtitle }}</h2>
  </div>
</template>
<script>
export default {
  name: 'TitleComponent',
  props: {
    title: {
      type: String,
      default: 'Título',
    },
    subtitle: {
      type: String,
      default: 'Subtítulo',
    },
    color:{
      type: String,
      default: 'black',
    },
    subcolor:{
      type: String,
      default: 'rgba(53, 53, 53, 0.527)',
    },
  },
  computed: {
    titleColor() {
      if(this.color) {
        return {
          color: this.color
        }
      }
      return {};
    },
    subtitleColor() {
      if(this.subcolor) {
        return {
          color: this.subcolor
        }
      }
      return {};
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../sass/layouts/sections/title';
</style>
