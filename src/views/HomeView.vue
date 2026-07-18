<template>
  <main>
    <div class="hero">
      <div class="hero-texto">
      <h1>Olá, café</h1>
      </div>
      <div class="hero-imagem">
        <img src="@/assets/img/images.jpg" alt="imagem">
      </div>
    </div>
    <button class="button">
      <RouterLink to="/ranking" class="text-button">ver ranking</RouterLink>
    </button>
  </main>
</template>

<script setup>
</script>

<style scoped>


.button{
  text-decoration: none;
  background-color: #6f4327;
  border: none;
  border-radius: 10px;
  padding: 1vw 2vw;
  cursor: pointer;
}

.button:hover{
  background-color: #5d3720;
}

.text-button{
  text-decoration: none;
  color: white;
}

</style>
