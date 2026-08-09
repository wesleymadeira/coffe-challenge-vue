<template>
    <main>
        <section class="formulario">
            <h1>✏️ Nova Avaliação</h1>
            <form>
                <label for="cafe">Café</label>
                <select id="cafe">
                    <option>Bourbon Amarelo</option>
                    <option>Catuaí Vermelho</option>
                    <option>Arara</option>
                    <option>Mundo Novo</option>
                </select>
                <div class="linha">
                    <div class="campo">
                        <label>Aroma</label>
                        <input type="number" id="aroma" min="0" max="10">
                    </div>
                    <div class="campo">
                        <label>Doçura</label>
                        <input type="number" id="docura" min="0" max="10">
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <label>Acidez</label>
                        <input type="number" id="acidez" min="0" max="10">
                    </div>
                    <div class="campo">
                        <label>Corpo</label>
                        <input type="number" id="corpo" min="0" max="10">
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <label>Finalização</label>
                        <input type="number" id="finalizacao" min="0" max="10">
                    </div>
                    <div class="media">
                        <span>Média Atual</span>
                        <h2 id="media">0.0</h2>
                    </div>
                </div>
                <button type="submit">
                    💾 Salvar Avaliação
                </button>
            </form>
        </section>
    </main>
</template>

<script setup></script>

<style scoped>
main {
    display: flex;
    justify-content: center;
    padding: 50px 20px;
    color: black;
}

.formulario {
    width: 700px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 15px;
    padding: 35px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
}

.formulario h1 {
    margin-bottom: 30px;
    color: #2d1d16;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
}

select,
input {
    width: 100%;
    height: 45px;
    border: 1px solid #d8d8d8;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    outline: none;
}

select:focus,
input:focus {
    border-color: #8a5a35;
}

.linha {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.campo {
    flex: 1;
}

.media {
    width: 180px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: #faf7f3;
}

.media span {
    color: #555;
}

.media h2 {
    color: #2d1d16;
}

button {
    width: 100%;
    margin-top: 35px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: #7b4b29;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: .3s;
}

button:hover {
    background: #60371c;
}

</style>