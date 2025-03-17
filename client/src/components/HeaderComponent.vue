<template>
  <header>
    <router-link to="/">Yan Ramos</router-link>
    <div>
      <router-link to="/#about">Sobre</router-link>
      <router-link to="/#services">Serviços</router-link>
      <router-link to="/portfolio">Portfólio</router-link>
    </div>
    <router-link to="/#contact">Contato</router-link>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style lang="scss" scoped>
@import '../sass/layouts/_header.scss';
</style>
