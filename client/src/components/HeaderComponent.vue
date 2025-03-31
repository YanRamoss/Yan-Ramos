<template>
  <header>
    <div class="desktop-menu">
      <router-link to="/">Yan Ramos</router-link>
      <div>
        <router-link to="/#about">Sobre</router-link>
        <router-link to="/#services">Serviços</router-link>
        <router-link to="/portfolio">Portfólio</router-link>
      </div>
      <router-link to="/#contact">Contato</router-link>
      <div id="hamb" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div :class="['mobile-menu',{'active': isMenuActive}]">
      <router-link to="/#about">Sobre</router-link>
      <router-link to="/#services">Serviços</router-link>
      <router-link to="/portfolio">Portfólio</router-link>
      <router-link to="/#contact">Contato</router-link>
    </div>
  </header>
  
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return{
      isMenuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../sass/layouts/_header.scss';
</style>
