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
  Vous décidez donc de vous diriger directement vers les personnes les plus influentes afin de leur rapporter les rapports que vous avez faits dans le futur.
  Vous tendez votre rapport au dirigeant, mais ce dernier n'arrive pas à vous lire.
  Vous vous souvenez qu'entre votre époque et celle dans laquelle vous vous trouvez, la langue a changé.
  Vous devez donc déchiffrer ce texte afin de permettre aux dirigeants de lire votre rapport.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("/Decodage");
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
