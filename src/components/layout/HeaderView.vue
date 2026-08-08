<template>
    <header class="header">
        <RouterLink to="/" class="logo">
            <img :src="logo" alt="logo">
            <h1 to="/" class="text-logo">COFFEE QUALITY CHALLENGE</h1>
        </RouterLink>
        <nav>
            <ul class="menu">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/cafes">Cafés</RouterLink>
                </li>
                <li>
                    <RouterLink to="/avaliacao">Avaliar</RouterLink>
                </li>
                <li>
                    <RouterLink to="ranking">Ranking</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import logo from '@/assets/img/logo.png'
</script>

<style scoped>
.header {
    background-color: #f8f5f2;
}

.logo img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.logo {
    display: flex;
    align-items: center;
}

.text-logo {
    color: black;
}

* {
    text-decoration: none;
    list-style: none;
    color: #333;
}
</style>