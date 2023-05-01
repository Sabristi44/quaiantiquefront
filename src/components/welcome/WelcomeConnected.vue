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
    <router-link to="/secure/book"><button class="button-cta mb-5">Réserver</button></router-link>
 
    <div class="menu-group">
    <img src="https://res.cloudinary.com/dbnymjpdf/image/upload/c_scale,r_8,w_888/v1682950019/djw0thcybb4bjzf7lrle.jpg" class="img-welcome menu-group mb-5">
    <h2 class="title-welcome">La cuisine des chefs</h2>
    <p> Les chefs Cadelec et Legoff sont heureux de vous accueillir dans leur restaurant gastronomique, chaque plat est une découverte de la région et les portions sont généreuses </p>
</div>
<RouterLink to="/secure/dish"><button class="button-cta mb-5">Plat</button></RouterLink>
<div class="menu-group">
    <img src="https://res.cloudinary.com/dbnymjpdf/image/upload/c_scale,r_8,w_800/v1682950748/uquxkic0zfdb1at0hvet.webp" class="img-welcome menu-group mb-5">
        <h2 class="title-welcome">Des produits Locaux</h2>
        <p> Nos chefs travaillent avec des producteurs locaux et BIO, chaque menu est étudié par les chefs pour apporter un maximum de saveur et d'harmonie dans les goûts </p>
    </div>
    <router-link to="/secure/menu"><button class="button-cta margin-b">Menu</button></router-link> 
    
    <Footer></Footer>
</template>