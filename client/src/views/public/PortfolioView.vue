<template>
  <div id="app">
    <div class="img">
      <img src="../../assets/Perfil.jpg" alt="">
    </div>
    <TitleComponent title="Yan dos Santos Ramos" subtitle="Técnico em Desenvolvimento de Sistemas, Graduando em Engenharia de Software" />
    <div id="qualyfications">
      <TitleComponent title="Formação" subtitle=""/>
      <div class="section">
        <div class="column">
          <h3>Bacharelado em Engenharia de Software</h3>
          <h4>Universidade São Judas Tadeu - 2025/2028</h4>
          <h3>Técnico em Desenvolvimento de Sistemas</h3>
          <h4>ETEC Rio Grande da Serra - 2022/2024</h4>
        </div>
      </div>
    </div>
    <div id="languages">
      <TitleComponent title="Idiomas" subtitle=""/>
      <div class="section">
        <div class="column">
          <h3>Inglês - C1</h3>
          <h4>Stafford House International - Canterbury, UK</h4>
          <h3>Espanhol - B2</h3>
          <h4>SIELE - São Paulo, BR</h4>
        </div>
      </div>
    </div>
    <div id="technologies">
      <TitleComponent title="Tecnologias" subtitle=""/>
      <div class="section">
        <div class="column">
          <!--

          Procurar e apresentar os ícones das tecnologias listadas abaixo

          HTML, CSS, JavaScript, TypeScript, PHP, Java, C, C++, C#, VBA?
          Ajax?, Node, React, Next.js, Prisma, TailwindCSS, SASS, Bootstrap
          Apache, Nginx, Docker
          MySQL, MongoDB, PostgreSQL
          Postman, Insomnia, Figma, Photoshop, Canva
          -->
        </div>
      </div>
    </div>
    <div id="projects">
      <TitleComponent title="Projetos" subtitle="Acesse alguns dos meus projetos" />
      <ProjectSliderComponent />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectSliderComponent from '@/components/sections/ProjectSliderComponent.vue';
import TitleComponent from '@/components/sections/TitleComponent.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    TitleComponent,
    ProjectSliderComponent,
  },
})
export default class PortfolioView extends Vue {

}
</script>
<style lang="scss" scoped>
@import '../../sass/pages/public/portfolio';
</style>
