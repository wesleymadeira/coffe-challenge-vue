<template>
  <header class="header">
    <div class="logo">
      <span>COFFEE QUALITY<br>CHALLENGE</span>
    </div>
    <nav>
      <ul class="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cafes">Cafés</RouterLink>
        <RouterLink to="/avaliacao">Avaliação</RouterLink>
        <RouterLink to="/ranking">Ranking</RouterLink>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
header {
  background-color: white;
}
.logo{
  color: black;
}



</style>
