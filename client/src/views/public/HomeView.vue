<template>
  <div id="app">
    <div id="about">
        <TitleComponent
          title="Sobre"
          subtitle="Técnico em Desenvolvimento de Sistemas, Graduando em Engenharia de Software"
        />
        <TitleComponent
          title="Testando Webhook"
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
          <p>Ofereço serviços especializados em <strong>manutenção de computadores</strong> e <strong>desenvolvimento de sistemas</strong>, garantindo qualidade e eficiência para atender suas demandas.</p>
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
          </ul>
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
