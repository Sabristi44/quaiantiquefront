<template>
    <div class="title">
        <h1>Quai antique</h1>
    </div>
    <div class="welcome-bloc-1 menu-group">
        <h2 class="title-welcome">Des restaurateurs Breton désireux de faire découvrir les richesses de leur gastronomie</h2>
        <p>Bienvenue au quai antique, nous sommes heureux de faire voyager votre palais vers de nouveaux horizons avec une gastronomie riche et généreuse. 
        Les chefs vous recevront dans un cadre marin et appaisant où vous retrouverez les plats les plus typiques de toute la Bretagne.
        </p>
    </div>
    <router-link to="/book"><button class="button-cta mb-5">Réserver</button></router-link>
 
    <div class="menu-group">
    <img src="https://res.cloudinary.com/dbnymjpdf/image/upload/c_scale,r_8,w_888/v1682950019/djw0thcybb4bjzf7lrle.jpg" class="img-welcome menu-group mb-5">
    <h2 class="title-welcome">La cuisine des chefs</h2>
    <p> Les chefs Cadelec et Legoff sont heureux de vous accueillir dans leur restaurant gastronomique, chaque plat est une découverte de la région et les portions sont généreuses </p>
</div>
<RouterLink to="/dish"><button class="button-cta mb-5">Plat</button></RouterLink>
<div class="menu-group">
    <img src="https://res.cloudinary.com/dbnymjpdf/image/upload/c_scale,r_8,w_800/v1682950748/uquxkic0zfdb1at0hvet.webp" class="img-welcome menu-group mb-5">
        <h2 class="title-welcome">Des produits Locaux</h2>
        <p> Nos chefs travaillent avec des producteurs locaux et BIO, chaque menu est étudié par les chefs pour apporter un maximum de saveur et d'harmonie dans les goûts </p>
    </div>
    <router-link to="/menu"><button class="button-cta margin-b">Menu</button></router-link> 
    
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

.margin-b {
    margin-bottom: 10rem;
}

.title-welcome {
color: #6e99e6;
}

.img-welcome {
    max-width: 60vw;
    max-height: 50vh;
    object-fit: cover;  
    width: auto;
}



* {
    margin: 0;
    font-family: "Great Vibes", cursive;
}

.welcome-bloc-1 {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto 20px;
    text-align: justify;
    padding: 20px;
}

.title {
    text-align: center;
    background-image: url('https://res.cloudinary.com/dbnymjpdf/image/upload/v1682948396/zs8ckh5htsvvknpvjlmw.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
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

.button-cta {
        padding: 10px 20px;
        border: 2px solid #6e99e6;
        color: #6e99e6;
        font-weight: bold;
        cursor: pointer;
}
</style>