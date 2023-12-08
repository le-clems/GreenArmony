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
  Après avoir lu votre rapport, le dirigeant vous remercie et vous conseille, pour accélérer le processus,
  d'aller parler aux gens des dangers du réchauffement climatique. Pour cela, il vous donne un document de plusieurs pages.
  Il vous indique qu'il sait que certaines informations sont fausses, mais qu'il n'arrive pas à les détecter.
  Il pense que, avec vos connaissances, vous pourriez discerner le vrai du faux.
  Vous gardez ces fichiers et allez rencontrer des gens afin de les sensibiliser.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("/Transition4");
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
