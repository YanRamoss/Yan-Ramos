<template>
    <div id="contact">
      <TitleComponent
          title="Contato"
          subtitle="Caso possua alguma dúvida ou queira solicitar um orçamento, entre em contato"
        subcolor="rgb(187, 129, 3)"
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
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TitleComponent from '../widgets/TitleComponent.vue';

@Options({
  components: {
    TitleComponent,
  },
})

export default class ContactComponent extends Vue {

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
@import "../../sass/pages/home/contactComponent";
</style>