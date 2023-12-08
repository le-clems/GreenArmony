<template>
  <div id="fond">
    <div id="scrolling-text-container">
      <img src="../img/pingouinGrand.png" alt="Pingouin" id="pingouinGrand" />
      <p>
        {{ scrollingText }}
      </p>
      <button @click="buttonClick">Félicitations !</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from "@/routeur.js";

const scrollingText = ref(`
  Vous retournez dans votre laboratoire et vous voyez votre pingouin vous y attendre impatiemment, vous vous pressez d'allé le serrer dans vos bras. Félicitations vous avez sauvé votre pingouin et la planète.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("./");
  setCookieWithExpiration('win', "y");
};

function setCookieWithExpiration(cookieName, cookieValue) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (10 * 1000)); // 1 minute en millisecondes

  const expirationString = `expires=${expirationDate.toUTCString()}`;
  document.cookie = `${cookieName}=${cookieValue}; ${expirationString}; path=/`; // Ajouter path=/ pour spécifier le chemin du cookie si nécessaire
}

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

#scrolling-text-container {
  position: absolute;
  top: 50%; /* Commence au milieu de l'écran */
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  transition: top 15s ease-out; /* Durée de la transition et fonction de temporisation */
}

#scrolling-text-container.animate {
  top: -75%; /* Animer vers le haut de l'écran (ajustez cette valeur) */
}

#pingouinGrand {
  position: absolute;
  left : 750px;
  top : 50px;
  width: 150px; /* Ajustez la largeur en pixels selon vos besoins */
  height: auto; /* La hauteur s'ajustera automatiquement pour maintenir les proportions */
}

button {
  margin-top: 20px; /* Espacement du bouton par rapport au texte */
  padding: 10px;
  font-size: 16px;
}
</style>
