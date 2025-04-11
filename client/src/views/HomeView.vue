<template>
  <div id="app">
    <AboutComponent />
    <ServicesComponent />
    <!-- <MySkillsComponent /> -->
    <ProjectsComponent />
    <ContactComponent />
  </div>
</template>
<script lang="ts">
import AboutComponent from '@/components/home/AboutComponent.vue';
import ContactComponent from '@/components/home/ContactComponent.vue';
import MySkillsComponent from '@/components/home/MySkillsComponent.vue';
import ProjectsComponent from '@/components/home/ProjectsComponent.vue';
import ServicesComponent from '@/components/home/ServicesComponent.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    AboutComponent,
    ServicesComponent,
    MySkillsComponent,
    ProjectsComponent,
    ContactComponent
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
