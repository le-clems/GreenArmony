<template>
  <div id="fond">
    <div id="scrolling-text-container">
      <img src="../img/pingouin.png" alt="Pingouin" id="pingouinBB" />
      <p>
        {{ scrollingText }}
      </p>
      <button @click="buttonClick">Suite</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from "@/routeur.js";

const scrollingText = ref(`
  Après avoir mené toutes ces actions, vous décidez qu'il est temps de retourner en 2100 pour voir si cela a été bénéfique et si votre pingouin a pu survivre.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("/Fin2");
};
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

button {
  margin-top: 20px; /* Espacement du bouton par rapport au texte */
  padding: 10px;
  font-size: 16px;
}

#pingouinBB {
  position: absolute;
  left : -80px;
  top : 60px;
  width: 125px; /* Ajustez la largeur en pixels selon vos besoins */
  height: auto; /* La hauteur s'ajustera automatiquement pour maintenir les proportions */
}
</style>
