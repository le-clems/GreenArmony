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
  Après avoir retrouvé les vraies informations, vous continuez votre chemin et tombez sur un travailleur qui essaye de connecter ses panneaux solaires.
  Vous trouvez que c'est un bel acte d'installer des panneaux solaires pour réduire son impact énergétique.
  Vous décidez donc d'aller l'aider à brancher correctement ses panneaux solaires.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("/Levier");
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
