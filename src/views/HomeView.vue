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
          Avalie, compare e descubra os melhores cafés
          através dos seus sentidos.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <div class="icone">👥</div>
          <h3>Cafés Participantes</h3>
          <span>4</span>
        </div>
        <div class="card">
          <div class="icone">📋</div>
          <h3>Avaliações Registradas</h3>
          <span>0</span>
        </div>
      </div>
      <button class="btn-hero">
        <RouterLink to="/cafes">
        ☕ Ver Cafés
        </RouterLink>
      </button>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  background-color: #fff;
}

a{
  text-decoration: none;
  color: #fff;
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
  font-size: 1.5rem;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 50px 0;
  flex-wrap: wrap;
}

.card {
  color: black;
  width: 280px;
  background: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .05);
}

.btn-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #6f4327;
  color: white;
  font-size: 22px;
  cursor: pointer;
  transition: .3s;
}

</style>
