<template>
    <div>
        <h1>{{ titulo }}</h1>
        <p>{{ descricao }}</p>
        <ul>
            <li>Café Árabe - Fazenda Água Doce - 9.1</li>
            <li>Café Japonês - Fazenda Água Roxa - 8.4</li>
            <li>Café Português - Fazenda Água Dourada - 7.1</li>
            <li>Café Sueco - Fazenda Água Vermelha - 3.1</li>
        </ul>

        <ul>
            <li v-for="cafe in cafesOrdenados" :key="cafe.id">
                Nome: {{ cafe.nome }}
                Produtor: {{ cafe.local }}
                Media: {{ cafe.nota }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
const titulo = 'Ranking Geral'
const descricao = 'Confira o ranking dos melhores cafés avaliados'
const cafes = ref([
    {
        id: '1',
        nome: 'Café Árabe',
        local: 'Fazenda Água Doce',
        nota: '9.1'
    },
    {
        id: '2',
        nome: 'Café Japonês',
        local: 'Fazenda Água Roxa',
        nota: '8.4'
    },
    {
        id: '3',
        nome: 'Café Português',
        local: 'Fazenda Água Dourada',
        nota: '7.1'
    },
    {
        id: '4',
        nome: 'Café Sueco',
        local: 'Fazenda Água Vermelha',
        nota: '3.1'
    }]
);


    const cafesOrdenados = computed(() => {
        return [...cafes.value].sort((a,b) => b.nota - a.nota)
    })
</script>

<style scoped></style>