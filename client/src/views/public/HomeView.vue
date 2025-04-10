<template>
  <div id="app">
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
            <p><router-link to="/portfolio">Quer saber mais sobre mim? Clique aqui</router-link></p>
          </div>
        </div>
      </div>
    <div id="services">
      <TitleComponent
        title="Serviços"
        subtitle="Soluções eficientes para suas necessidades"
        subcolor="rgb(187, 129, 3)"
      />
      <div class="section">
        <div class="column">
         <!--  <p>Ofereço serviços especializados em <strong>manutenção de computadores</strong> e <strong>desenvolvimento de sistemas</strong>, garantindo qualidade e eficiência para atender suas demandas.</p>
          <p>Seja para otimizar seu equipamento, desenvolver um site profissional ou criar uma aplicação sob medida, tenho a experiência necessária para entregar resultados sólidos e personalizados.</p>
          <p>Com um atendimento dedicado e soluções inovadoras, meu objetivo é facilitar sua rotina e impulsionar seus projetos.</p>
          <p><router-link to="/#contact">Entre em contato e saiba mais!</router-link></p>
        </div>
        <div class="column">
          <ul>
            <li>Montagem de computadores</li>
            <ul>
              <li>Limpeza</li>
              <li>Troca de peças</li>
              <li>Instalação de Sistema Operacional</li>
              <li>Formatação</li>
            </ul>
              <li>Análise e correção de problemas</li>
            <ul>
              <li>Remoção de vírus</li>
              <li>Otimização de desempenho</li>
            </ul>
              <li>Desenvolvimento e hospedagem de sites</li>
            <ul>
              <li>Landing Pages</li>
              <li>Sites comerciais</li>
              <li>Sistemas de controle e gestão</li>
            </ul>
              <li>Desenvolvimento de aplicativos</li>
            <ul>
              <li>Controle de estoque</li>
              <li>Registro de informações e arquivos privados</li>
              <li>Agendas e lembretes</li>
            </ul>
          </ul> -->
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
    <div id="contact">
      <TitleComponent
          title="Contato"
          subtitle="Caso possua alguma dúvida ou queira solicitar um orçamento, entre em contato"
        />
        <div class="section">
          <div class="column">
            <form v-on:submit.prevent="send">
                <div>
                    <label for="nome">Nome</label>
                    <input name="nome" id="nome" v-model="nome" required>
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" v-model="email" required>
                </div>
                <div>
                    <label for="contato">Telefone para Contato</label>
                    <input type="text" name="contato" id="contato" v-model="contato" required>
                </div>
                <div>
                    <label for="mensagem">Mensagem</label>
                    <textarea name="mensagem" id="mensagem" rows="4" v-model="mensagem" required></textarea>
                </div>
                <div>
                    <input type="submit" value="Enviar">
                </div>
            </form>
          </div>
          <div class="column">
            <div>
              <h2>Whatsapp</h2>
              <h3>+55 11 93287-6507</h3>
            </div>
            <div>
              <h2>E-mail</h2>
              <h3>eu@yanramos.com.br</h3>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import TitleComponent from '@/components/sections/TitleComponent.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    TitleComponent,
  },
})

export default class HomeView extends Vue {
  nome: string | null = null;
  email: string | null = null;
  contato: string | null = null;
  mensagem: string | null = null;

  send() {
    console.log(this.nome);
  }
}
</script>
<style lang="scss" scoped>
@import '../../sass/pages/public/_home.scss';
</style>
