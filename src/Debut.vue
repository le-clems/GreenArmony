<template>
  <div>
    <div id="scrolling-text-container">
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
  Vous êtes un scientifique en 2098, comme l'avait prévu le GIEC, la Terre s'est réchauffée de 3,2 °C. Vous êtes responsable de la surveillance du dernier pingouin ayant survécu. Vous êtes donc chargé de vous occuper de lui et de prendre le rôle de ses parents. Par exemple, jouer à cache-cache avec lui.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("/CacheCache");
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
</style>
