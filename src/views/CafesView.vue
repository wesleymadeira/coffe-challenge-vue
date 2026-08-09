<template>
    <main>
    <section class="titulo-pagina">
            <h1>☕ Cafés Participantes</h1>
        </section>
        <section class="lista-cafes">
            <div class="card-cafe">
                <div class="info-cafe">
                    <div class="imagem-cafe">
                        ☕
                    </div>
                    <div>
                        <h2>Bourbon Amarelo</h2>
                        <p>Origem: Minas Gerais</p>
                    </div>
                </div>
                <button>Avaliar</button>
            </div>
            <div class="card-cafe">
                <div class="info-cafe">
                    <div class="imagem-cafe">
                        ☕
                    </div>
                    <div>
                        <h2>Catuaí Vermelho</h2>
                        <p>Origem: Paraná</p>
                    </div>
                </div>
                <button>Avaliar</button>
            </div>
            <div class="card-cafe">
                <div class="info-cafe">
                    <div class="imagem-cafe">
                        ☕
                    </div>
                    <div>
                        <h2>Arara</h2>
                        <p>Origem: Espírito Santo</p>
                    </div>
                </div>
                <button>Avaliar</button>
            </div>
            <div class="card-cafe">
                <div class="info-cafe">
                    <div class="imagem-cafe">
                        ☕
                    </div>
                    <div>
                        <h2>Mundo Novo</h2>
                        <p>Origem: Bahia</p>
                    </div>
                </div>
                <button>Avaliar</button>
            </div>
        </section>
    </main>
</template>

<script setup>
</script>

<style scoped>
main {
    background: #f6f1ec;
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px 20px;
    border-radius: 16px;
}

.titulo-pagina {
    margin-bottom: 30px;
}

.titulo-pagina h1 {
    font-size: 36px;
    color: #2b1f18;
}

.lista-cafes {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card-cafe {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: 1px solid #e4e4e4;
    border-radius: 12px;
    background: white;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .05);
}

.info-cafe {
    display: flex;
    align-items: center;
    gap: 20px;
    color: black;
}

.imagem-cafe {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background: #f6f1ec;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
}

.card-cafe h2 {
    font-size: 24px;
    margin-bottom: 8px;
}

.card-cafe p {
    color: #666;
}

.card-cafe button {
    width: 130px;
    height: 45px;
    border: 1px solid #8d5a35;
    background: white;
    color: #8d5a35;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
    font-size: 16px;
}

.card-cafe button:hover {
    background: #8d5a35;
    color: white;
}

</style>