<template>
<div id="services">
      <TitleComponent
        title="Serviços"
        subtitle="Soluções eficientes para suas necessidades"
        subcolor="rgb(187, 129, 3)"
      />
      <div class="section">
        <div class="column grid">
          <div>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code h-6 w-6 text-tech-teal"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </span>
              </div>
              <h3>Desenvolvimento de Sites</h3>
              <p>
                Sites personalizados construídos de acordo com suas especificações, com design responsivo e recursos modernos.
              </p>
          </div>
          <div>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server h-6 w-6 text-tech-teal"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                </span>
              </div>
              <h3>Desenvolvimento de Software</h3>
              <p>
                Soluções de software sob medida que automatizam processos e resolvem os desafios do seu negócio.
              </p>
          </div>
          <div>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-6 w-6 text-tech-teal"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </span>
              </div>
              <h3>Conserto de Computadores</h3>
              <p>
                Diagnóstico e reparo profissional de desktops e laptops, incluindo problemas de hardware e software.
              </p>
          </div>
          <div>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu h-6 w-6 text-tech-teal"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
                </span>
              </div>
              <h3>Montagem de PCs</h3>
              <p>
                Computadores de alto desempenho construídos de acordo com suas especificações para jogos, design ou necessidades empresariais.
              </p>
          </div>
          <div>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor h-6 w-6 text-tech-teal"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                </span>
              </div>
              <h3>Consultoria em TI</h3>
              <p>
                Consultoria especializada em implementação de tecnologia, segurança e planejamento de infraestrutura.
              </p>
          </div>
          <div>
              <div>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database h-6 w-6 text-tech-teal"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                </span>
              </div>
              <h3>Design de Banco de Dados</h3>
              <p>
                Soluções de banco de dados personalizadas para gerenciamento e recuperação eficientes de dados.
              </p>
          </div>
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

export default class ServicesComponent extends Vue {

}
</script>
<style lang="scss" scoped>
@import "../../sass/pages/home/serviceComponent";
</style>