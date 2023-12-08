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
  Pendant 2 ans, vous vous occupez de lui et le chérissez comme votre propre enfant.
  Malheureusement, alors que la Terre continue de se réchauffer, vous voyez que votre pingouin souffre de plus en plus.
  Vous faites de votre mieux pour le maintenir en bonne santé, mais en vain. En 2100,
  le dernier pingouin décède à cause de la destruction de son habitat et de l'impossibilité de se nourrir.
  Vous êtes dévasté, vous n'avez qu'une seule envie : remonter le temps pour sauver votre pingouin.
  Vous vous dirigez vers la machine à remonter le temps à usage unique et revenez en 2020 pour prévenir les gens du danger.
  Malheureusement, vous n'avez que très peu de temps pour faire changer au maximum le monde.
`);

const buttonClick = () => {
  // Logique pour le clic sur le bouton
  console.log('Bouton cliqué !');
  router.push("/Transition2");
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
