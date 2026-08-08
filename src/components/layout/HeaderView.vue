<template>
    <header class="header">
        <RouterLink to="/" class="logo">
            <img :src="logo" alt="logo">
            <h1 to="/" class="text-logo">COFFEE QUALITY<br> CHALLENGE</h1>
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
* {
    text-decoration: none;
    list-style: none;
    color: #333;
}

.header {
    background-color: #faf5f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e6e6e6;
}

.logo img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin: 1vw 1vw 1vw 2vw;
}

.logo {
    display: flex;
    align-items: center;
}

.text-logo {
    color: #2f2119;
    font-size: 1.3rem;
    line-height: 20px;
    font-weight: 600;
}

.menu {
    display: flex;
    font-size: 1.3rem;
    gap: 4vw;
    margin: 1vw 3vw 1vw 0;
}

.menu a {
    position: relative;
}

.menu a:hover {
    color: #8b5a35;
}

.menu a.router-link-exact-active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #8b5a35;
    border-radius: 3px;
}

.router-link-active {
    color: #7a4b27;
}
</style>