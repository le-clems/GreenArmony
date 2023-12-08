<script setup>
import {onMounted, ref} from "vue";
import router from "@/routeur.js";
import Popup from "@/popup.vue";

function toggleMenu() {
  var menu = document.getElementById('menu2');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

var burgerImage = document.querySelector('.burger img');
let pin = ref(null);
const popUp = ref(false);
const logo = ref(null);


function ToggleBiblio(element){
  if(element.parentElement.parentElement.parentElement.classList.contains("open")){
    element.parentElement.parentElement.parentElement.classList.remove("open");

  }
  else{
    element.parentElement.parentElement.parentElement.classList.add("open");
  }
}

var divpinguin = document.getElementById('divpinguin');
var clickOverlay = document.getElementById('clickOverlay');

function GoPinguin(event){
  // Obtenez les coordonnées du clic par rapport au conteneur d'image
  let x = (event.offsetX / pin.value.clientWidth) * 100;
  let y = (event.offsetY / pin.value.clientHeight) * 100;

  console.log(x);
  console.log(y);

  console.log(pin.value.clientWidth);
  console.log(pin.value.clientHeight);

  // Vérifiez si les coordonnées du clic sont à l'intérieur du rectangle
  if (x >= 50 && x <= 65 && y >= 35 && y <= 80) {
    console.log('Vous avez cliqué à l\'intérieur du rectangle dans l\'image !');
    router.push("./Debut");
  }
}

function goToMenu() {
  router.push("./");
}

function goToError() {
  router.push("./Tetris404");
}

function goToJeu() {
  router.push("./Jeu");
}

onMounted(() => {
  console.log(getCookie("win"))
  if (getCookie("win") == "y") {
    logo.value.classList.add("rotate");
  }
});

function getCookie(cookieName) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Vérifier si le cookie commence par le nom recherché
    if (cookie.startsWith(cookieName + '=')) {
      // Extraire et retourner la valeur du cookie en utilisant split
      return cookie.substring(cookieName.length + 1).trim();
    }
  }

  // Si le cookie n'est pas trouvé, retourner null
  return null;
}

</script>

<template>
<body>
<header>
  <nav>
    <div>
      <a @click="goToMenu">Accueil</a>
    </div>
    <div><a @click="goToJeu">Jeu</a></div>
    <div><a @click="goToError">page</a></div>
    <div>
      <a href="./bibliographie.html">page</a>
      <div class="submenu">
        <div><a @click="goToError">page</a></div>
        <div><a @click="goToError">page</a></div>
        <div><a @click="goToError">page</a></div>
        <div><a @click="goToError">page</a></div>
      </div>
    </div>
    <div><a @click="goToError" class="active">page</a></div>
  </nav>

  <div class="burger">
    <img src="../img/burger.png" alt="burger" width="50" @click="toggleMenu" >
    <div id="menu2">
      <div>
        <h2>Titre ecolo</h2>
        <img src="../img/fermer-la-croix-modified.png" alt="burger" width="40" height="40" tabindex="0"
             @click="toggleMenu">
      </div>
      <div>
        <a @click="goToMenu">Accueil</a>
      </div>
      <div><a @click="goToJeu">Jeu</a></div>
      <div><a @click="goToError">page</a></div>
      <div class="BiblioContainer">
        <div class="BiblioHead">
          <a @click="goToError">page</a>
          <div>
            <svg @click="ToggleBiblio(this)" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
              <path d="M 24.990234 8.9863281 A 1.0001 1.0001 0 0 0 24.292969 9.2929688 L 15 18.585938 L 5.7070312 9.2929688 A 1.0001 1.0001 0 0 0 4.9902344 8.9902344 A 1.0001 1.0001 0 0 0 4.2929688 10.707031 L 14.292969 20.707031 A 1.0001 1.0001 0 0 0 15.707031 20.707031 L 25.707031 10.707031 A 1.0001 1.0001 0 0 0 24.990234 8.9863281 z"></path>
            </svg>
          </div>
        </div>
        <div class="BiblioBody">
          <div class="BiblioContainer">
            <div class="BiblioHead">
              <div><a @click="goToError">page</a></div>
              <div><a @click="goToError">page</a></div>
              <div><a @click="goToError">page</a></div>
              <div><a @click="goToError">page</a></div>
            </div>
          </div>
        </div>
      </div>
      <div><a @click="goToError" class="active">page</a></div>
    </div>
  </div>
</header>

<main>
  <article id="artAcc">
    <img src="../img/logo.png" ref="logo">
    <h1 class="titrecontroverse">Green Armony</h1>
  </article>
  <article class="texte">
    <h2 class="Présentation">Presentation</h2>

    <p>
      Bienvenue sur BIG 7 - Pour une Planète Plus Verte
    </p>

    <h3>À propos de nous</h3>

    <p>
      Chez BIG 7, nous sommes passionnés par la préservation de notre planète et nous croyons en la responsabilité collective pour créer un avenir durable. Notre mission est d'éduquer, sensibiliser et inspirer chacun à prendre des mesures positives pour l'environnement.</p>

    <h3>L'impact humain sur les gaz à effet de serre</h3>

    <p>
      Il est indéniable que les activités humaines ont un impact significatif sur notre climat. Les émissions de gaz à effet de serre résultant de la combustion d'énergies fossiles, de la déforestation et de pratiques agricoles non durables contribuent au réchauffement climatique. Sur ce site, nous explorons les causes de ces émissions et encourageons des choix de vie plus durables.
    </p>

    <h3>Réchauffement Observé et ses Causes</h3>

    <p>
      <span @click="popUp = true">Réchauffement climatique : le jeu dont nous ne pouvons pas changer l'arbitre, mais seulement les règles.</span> L'activité humaine, principalement par les émissions de gaz à effet de serre, est la cause indiscutable du réchauffement climatique. La température moyenne à la surface de la Terre a augmenté, avec une accélération notable depuis 1970.
    </p>

    <Teleport to="body">
      <!-- utilise le composant modale, le passe en tant que props -->
      <popup :show="popUp" @close="popUp = false">
        <template #header>
          <h3></h3>
        </template>
        <template #body>
          <img src="../img/Divalto.png">

        </template>
        <template #footer>
          <p></p>
          <button @click="popUp = false">Ok</button>
        </template>
      </popup>
    </Teleport>

    <div id="divpinguin">
      <p>La fonte des glaces due au changement climatique a des conséquences dévastatrices sur les pingouins, affectant directement leur habitat, leur reproduction et leur alimentation. La diminution rapide des glaciers et des banquises prive ces oiseaux d'espaces cruciaux pour se reproduire, exposant leurs nids à des dangers accrus. De plus, la perturbation des courants marins perturbe la distribution des proies marines des pingouins, compromettant leur chaîne alimentaire. Ces changements ont des répercussions sur l'ensemble de l'écosystème polaire, mettant en péril la biodiversité et la stabilité des océans. La protection des pingouins et de leur habitat exige des efforts concertés pour lutter contre le changement climatique et préserver les écosystèmes fragiles dont ils dépendent.</p>
      <img src="../img/fondPinguins.jpeg" alt="fondpinguin" @click="GoPinguin" ref="pin">
      <div id="clickOverlay"></div>
    </div>

    <h3>Progrès, Lacunes et Défis de l'Atténuation</h3>

    <p>Malgré l'expansion des politiques et des lois abordant l'atténuation, un écart important subsiste entre les émissions projetées et les niveaux nécessaires pour atteindre les objectifs climatiques. Les contributions déterminées au niveau national annoncées jusqu'à présent sont insuffisantes pour limiter le réchauffement à des niveaux sûrs.</p>

    <h3>Solutions pour un développement durable</h3>

    <p>Le développement durable est notre boussole pour un avenir meilleur. Nous explorerons des initiatives positives, des technologies vertes et des pratiques écoresponsables. Apprenez comment vous pouvez contribuer à la durabilité, que ce soit à la maison, au travail ou dans votre communauté.</p>

    <h3>Rejoignez notre communauté</h3>

    <p>Ensemble, nous pouvons faire la différence. Rejoignez notre communauté engagée pour partager des idées, des expériences et des solutions. Suivez-nous sur les réseaux sociaux, participez à des discussions et soyez informé des dernières actualités environnementales.</p>

    <h3>Risques Futurs et Réponses à Long Terme</h3>

    <p>Des réductions rapides, profondes et soutenues des émissions de gaz à effet de serre sont nécessaires pour limiter le réchauffement et ses impacts futurs. Chaque augmentation supplémentaire de la température mondiale intensifiera les risques et les impacts.</p>

    <p>Merci de faire partie de notre voyage vers un avenir plus vert. Ensemble, nous pouvons créer un impact positif sur notre planète.</p>

  </article>
</main>

<footer>
  <div>
    <p>Made by big 7</p>
  </div>
</footer>
</body>



</template>

<style>
@font-face {
  font-family: Poppins;
  src: url(../font/Poppins-Regular.ttf);
}

/* header et nav*/
header {
  position: fixed;
  top: 0;
  right: 0;
  margin-right: 5vh;
  display: flex;
  align-items: flex-end;
  z-index: 2;
}

nav {
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 3%;
}

nav > div {
  position: relative;
  margin: 0;
  padding: 0;
}

nav > div > a {
  position: relative;
  display: block;
  text-align: left;
  background-color: transparent;
  padding: 10px;
  color: white;
  text-decoration: none;
}
.active, #menu2 div > .active{
  color: orange;
}
#menu2 a{
  position: relative;
  display: block;
  text-align: left;
  background-color: transparent;
  padding: 10px;
  color: white;
  text-decoration: none;
}

nav > div > a:hover {
  text-decoration: underline;
}
header a:before{
  background-color: currentColor;
  bottom: -0.1em;
  content: "";
  height: 0.1em;
  left: 0;
  min-height: 1px;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform .75s cubic-bezier(.19,1,.22,1);


}
/*  sous menu */
.submenu {
  position: absolute;
  color: white;
  text-decoration: none;
  display: none;
  width: 100%;
  border-radius: 10px;
}

.submenu a {
  color: white;
  padding: 10px;
  display: block;
  text-decoration: none;
}

.submenu > div {
  justify-content: center;
  display: flex;
}

nav > div:hover .submenu {
  display: block;
}
#menu2 > div:hover .submenu {
  display: block;
}
.burger {
  display: none;
}

@media screen and (min-width: 900px) {
  .submenu{
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@media (max-width: 900px) {
  h1 {
    font-size: 1.5em;
  }

  nav {
    display: none;
  }

  header {
    width: 100%;
  }

  #menu2 {
    display: none;
    width: 75%;
    background: #3C685F;
    height: 100%;
    top: 0px;
    left: 0px;
    bottom: 0;
    position: fixed;
    transition: all 0.2s;
  }
  #menu2 h2{
    color: #333333;
  }
  #menu2 > div:first-child{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  #menu2 div:first-child > h2{
    width: 75%;
  }
  .burger {
    display: block;
    top: 10px;
    left: 10px;
    position: fixed;
    z-index: 1;
    transition: all 0.2s;
  }

  .submenu{
    width:60%;
    right: 0px;
    margin: 5%;
    border: 0.2rem solid;
    border-color: #ffffff;
  }

  .BiblioHead {
    display: flex;
    justify-content:flex-start;
    color: white;
    flex-direction: row;
  }

  .biblioHead svg {
    transition: transform 0.25s ease-out;
    fill: white;
  }

  .BiblioBody {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.15s ease-out;
  }

  .BiblioContainer.open>.BiblioBody {
    max-height: 1000px;
    transition: max-height 0.25s ease-in;
    overflow: auto;
  }

  .BiblioContainer.open>.BiblioHead svg {
    transform: rotate(180deg);
    transition: transform 0.15s ease-in;
  }
  .BiblioContainer.open > .BiblioBody > .BiblioContainer > .BiblioHead{
    flex-direction: column;
    align-items: start;
    margin-left: 5%;
  }
  .BiblioContainer > .BiblioBody > .BiblioContainer > .BiblioHead{
    flex-direction: column;
    align-items: start;
    margin-left: 5%;
  }
  .BiblioHead:first-child > div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 600px) {
  #menu2{
    width: 100%;
  }
  #divpinguin {
    flex-direction: column;
  }
}

/************************************/
#artAcc{
  height : 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../img/imgarticle1.jpg");
}

#artAcc::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));

}
.titrecontroverse {
  color: white;
  position: relative;
  margin-top: 4vh;
  margin-bottom: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
  justify-content: center;
  font-size: 2em;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 10px;
}
.texte{
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: justify;
  font-size: max(1vw,12px);
}

body {
  display: block;
  margin: 0px;
  font-family: Poppins,sans-serif;
}
.Présentation {
  font-size: 3.5vw;
  color: black;
}
.texte > h2,h3{
  text-align: center;
}
#divpinguin{
  display: flex;
  align-items: center;
}
#divpinguin > img{
  width: max(25vw,144px);
  object-fit: contain;
  margin: 0 0.7vw;
}

footer {
  text-align: center;
  border-top: solid black;
}

#logo {
  width: 30%;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotation 5s 3 linear;
}
</style>
