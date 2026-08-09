<template>
  <main>
    <section class="hero">
      <div class="hero-icon">
        ☕
      </div>
      <div class="title">
        <h1>COFFEE QUALITY CHALLENGE</h1>
        <h2>Campeonato de Avaliação Sensorial de Cafés Especiais</h2>
        <p>
          Avalie, compare e descubra os melhores cafés <br> através dos seus sentidos.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <div class="icone">👥</div>
          <div class="cont">
            <h3>Cafés Participantes</h3>
            <span>4</span>
          </div>
        </div>
        <div class="card">
          <div class="icone">📋</div>
          <div class="cont">
            <h3>Avaliações Registradas</h3>
            <span>0</span>
          </div>
        </div>
      </div>
      <RouterLink to="/cafes" class="btn-hero">
        ☕ Ver Cafés
      </RouterLink>
    </section>
    <section class="sobre">
      <div class="planta">
        🌿
      </div>
      <div>
        <h2>Sobre o Campeonato</h2>
        <p>
          Este campeonato tem como objetivo promover a
          qualidade dos nossos cafés através de avaliações
          sensoriais baseadas nos critérios da metodologia
          SCA.
        </p>
      </div>
    </section>
    <section class="beneficios">
      <div class="beneficio">
        <h3>🎯 Objetivo</h3>
        <p>
          Avaliar e reconhecer os melhores cafés.
        </p>
      </div>
      <div class="beneficio">
        <h3>☕ Avalie</h3>
        <p>
          Use seus sentidos para dar notas justas.
        </p>
      </div>
      <div class="beneficio">
        <h3>📊 Compare</h3>
        <p>
          Veja o ranking e descubra os destaques.
        </p>
      </div>
      <div class="beneficio">
        <h3>🤎 Valorize</h3>
        <p>
          Incentive a qualidade e o trabalho dos produtores.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  background-color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 0 0 0;
}

.hero-icon {
  color: black;
  font-size: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title h1 {
  font-size: 3.1rem;
}

.title h2 {
  font-size: 1.7rem;
}

.title p {
  font-size: 1.4rem;
  text-align: center;
  margin: 2vw 0 0 0
}

.cards {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin: 50px 0;
  flex-wrap: wrap;
}

.card {
  color: black;
  width: 500px;
  height: 300px;
  background: #faf5f0;
  border: 1px solid #e7e7e7;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
  display: flex;
}

.card .icone {
  font-size: 80px;
  display: flex;
  align-items: center;
}

.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cont h3 {
  margin: 2vw 0 0 0;
  font-size: 30px;
}

.cont span {
  margin: 1.2vw;
  font-size: 60px;
}

.btn-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 60px;
  background: #6f4327;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 30px;
}

.btn-hero:hover {
  background: #5d3720;
}

.sobre {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 80px 40px;
  background: #faf7f3;
  margin-top: 80px;
}

.planta {
  color: black;
  font-size: 120px;
}

.sobre h2 {
  color: black;
  font-size: 34px;
  margin-bottom: 20px;
}

.sobre p {
  max-width: 500px;
  line-height: 1.8;
  color: #555;
  font-size: 18px;
}

.beneficios {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 40px;
}

.beneficio {
    background: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 12px;
    padding: 25px;
    text-align: center;
}

.beneficio h3 {
    color: #6f4327;
    margin-bottom: 15px;
}

.beneficio p {
    color: #555;
    line-height: 1.6;
}

</style>
