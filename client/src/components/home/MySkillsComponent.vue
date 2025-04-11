<template>
    <div id="myskills">
        <TitleComponent title="Minhas Habilidades" subtitle="Descubra mais sobre minhas habilidades e tecnologias que domino" />
        <div class="section">
            <div class="column">
                <div v-for="skill in skills" :key="skill.name">
                    <li>{{ skill.name }}</li>
                    <li >{{ skill.proficiency }}</li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

import TitleComponent from '../widgets/TitleComponent.vue';

Options({
    components: {
        TitleComponent,
    },
});

export default class MySkillsComponent extends Vue {
    skills =  [
        {
            "name": "Java",
            "proficiency": "70%",
        }, {
            "name": "PHP",
            "proficiency": "100%",
        }, {
            "name": "JavaScript",
            "proficiency": "100%"
        }
    ]
}
</script>

<style lang="scss" scoped>
</style>