<template>
    <div id="about">
        <TitleComponent
          title="Sobre"
          subtitle="Técnico em Desenvolvimento de Sistemas, Graduando em Engenharia de Software"
        />
        <div class="section">
          <div class="column">
            <img src="../../assets/Fotos.png" alt="Trajetória" />
          </div>
          <div class="column">
            <p>
              Minha paixão por tecnologia começou na infância, explorando
              computadores e seus desafios. Aos 13 anos, iniciei meus estudos em
              Java e lógica de programação. Em 2022, ingressei na ETEC, onde
              aprofundei meus conhecimentos em desenvolvimento web, software e
              hardware.
            </p>
            <p>
              Ao longo dos anos, participei de diversos projetos, ganhando
              experiência em montagem e manutenção de computadores, desenvolvimento
              de sites e aplicativos, além da manutenção de sistemas já existentes.
            </p>
            <p>
              Meu desempenho acadêmico me rendeu uma premiação no
              <a href="https://www.cps.sp.gov.br/intercambio-cultural/"
                >Intercâmbio Cultural do Centro Paula Souza</a
              >, permitindo-me passar um mês na Inglaterra. Lá, aprimorei meu inglês
              e vivi experiências enriquecedoras, ampliando minha visão de mundo e
              da tecnologia. 
            </p>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TitleComponent from '../widgets/TitleComponent.vue';

@Options({
  components: {
    TitleComponent,
  },
})

export default class AboutComponent extends Vue {

}
</script>
<style lang="scss" scoped>
@import "../../sass/pages/home/aboutComponent";
</style>