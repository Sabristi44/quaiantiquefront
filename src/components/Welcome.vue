<script setup lang="ts">
import Navbar from './Navbar/Navbar.vue';
import Footer from './Footer/footer.vue';
</script>

<template>
    <Navbar></Navbar>
    <div class="title">
        <h1>Quai antique</h1>
    </div>
    <Footer></Footer>
</template>

<style>
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

* {
    margin: 0;
}

.title {
    text-align: center;
    height: 500px;
    background-image: url('https://res.cloudinary.com/dbnymjpdf/image/upload/v1678372119/docs/Chinese_Chawal_in_Basmati_q39d9n.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 450px;
    width: 100vw;
}

.title h1 {
    font-size: 9rem;
    font-weight: normal;
    color: white;
    font-family: "Great Vibes", cursive;
    padding-top: 80px;
    padding-left: 80px;
    text-shadow: black 5px 5px 10px;
}
</style>