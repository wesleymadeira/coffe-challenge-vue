<template>
    <main>
        <h1>🏆 Ranking dos Cafés</h1>
        <div class="tabela-ranking">
            <div class="cabecalho">
                <span>Posição</span>
                <span>Café</span>
                <span>Origem</span>
                <span>Nota Média</span>
            </div>
            <div class="linha">
                <span>🥇 1º</span>
                <span>Bourbon Amarelo</span>
                <span>Minas Gerais</span>
                <span>9.8</span>
            </div>
            <div class="linha">
                <span>🥈 2º</span>
                <span>Arara</span>
                <span>Paraná</span>
                <span>9.5</span>
            </div>
            <div class="linha">
                <span>🥉 3º</span>
                <span>Catuaí Vermelho</span>
                <span>Espírito Santo</span>
                <span>9.2</span>
            </div>
            <div class="linha">
                <span>4º</span>
                <span>Mundo Novo</span>
                <span>São Paulo</span>
                <span>8.9</span>
            </div>
        </div>
    </main>
</template>
<script setup>

</script>

<style scoped>
main {
    max-width: 1000px;
    margin: 50px auto;
    padding: 20px 20px;
    border-radius: 16px;
}

main h1 {
    text-align: center;
    margin-bottom: 40px;
    color: #2d1d16;
}

.tabela-ranking {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
}

.cabecalho {
    background: #7b4b29;
    color: white;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    padding: 18px;
    font-weight: bold;
}

.linha {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    padding: 18px;
    border-bottom: 1px solid #ececec;
    align-items: center;
    transition: .3s;
}

.linha:hover {
    background: #faf7f3;
}

.linha:last-child {
    border: none;
}
</style>

<!-- 
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
         -->