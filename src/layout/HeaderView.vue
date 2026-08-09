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
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    border: 1px solid #e6e6e6;
    border-radius: 12px 12px 0 0;
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
    gap: 12px;
}

.text-logo {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
    color: #2f2119;
}

.menu {
    display: flex;
    gap: 45px;
}

.menu a {
    text-decoration: none;
    color: #333;
    font-size: 17px;
    padding: 28px 0 22px;
    position: relative;
    transition: .3s;
}

.menu a:hover {
    color: #7a4b27;
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


.header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    border: 1px solid #e6e6e6;
    border-radius: 12px 12px 0 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo img {
    width: 42px;
}

.logo span {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
    color: #2f2119;
}

.menu {
    display: flex;
    gap: 45px;
}

.menu a {
    text-decoration: none;
    color: #333;
    font-size: 17px;
    padding: 28px 0 22px;
    position: relative;
    transition: .3s;
}

.menu a:hover {
    color: #7a4b27;
}

.menu a.active {
    color: #7a4b27;
}

.menu a.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #8b5a35;
    border-radius: 3px;
}
