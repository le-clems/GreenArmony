<template>
  <div id="fond">
    <img id="pingouin" src="/img/pingouin.png" alt="Pingouin" @click="handleClick" />
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import router from "@/routeur.js";

const pingouin = ref(null);
let clickCount = ref(0);
const position = ref({left: 0, top: 0});

const movePingouin = () => {
  const maxX = window.innerWidth - pingouin.value.clientWidth;
  const maxY = window.innerHeight - pingouin.value.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  pingouin.value.style.left = `${newX}px`;
  pingouin.value.style.top = `${newY}px`;
};

const handleClick = () => {
  clickCount.value++;

  if (clickCount.value === 3) {
    alert('Félicitations ! Vous avez trouvé le pingouin trois fois.');
    router.push("/Transition1");
    resetGame();
  } else {
    movePingouin();
  }
};

const resetGame = () => {
  clickCount.value = 0;
  movePingouin();
};

onMounted(() => {
  // Initial placement
  pingouin.value = document.getElementById('pingouin'); // Ajoutez cette ligne pour définir la référence correctement
  movePingouin();
});
</script>

<style>
#fond {
  position: relative;
  width: 100%;
  height: 100vh; /* 100% de la hauteur de la vue */
  background: url('img/banquise.jpg') center center no-repeat; /* Mettez l'image de la banquise en arrière-plan */
  background-size: cover; /* Assurez-vous que l'image couvre tout le conteneur */
}

#pingouin {
  position: absolute;
  cursor: pointer;
  width: 25px; /* Ajustez la largeur en pixels selon vos besoins */
  height: auto; /* La hauteur s'ajustera automatiquement pour maintenir les proportions */
}
</style>
