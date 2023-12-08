<template>
  <div>
    <div class="texte">
      <h1>Levier Game</h1>
      <p>Cliquez sur les leviers pour construire le chemin.</p>
    </div>

    <div id="game-container">
      <!-- Leviers -->
      <div class="levers">
        <div class="lever" v-for="(lever, index) in levers" :key="index" @click="onLeverClick(index)">
          <p>Levier {{ index + 1 }}</p>
          <div class="lever-switch" :class="{ on: lever }"></div>
        </div>
      </div>

      <div id="fondelec">
        <img src="../img/887.png" alt="fondelec">
      </div>
      <!-- Chemins -->
      <div class="paths">
        <div class="path" v-for="(segment, index) in segments" :key="index" :class="{ open: segment }"></div>
      </div>
      <img src="../img/walleteint.png" alt="fondpanneau" id="lampeeteint">
      <img src="../img/wallallumé.png" alt="fondpanneau" style="display: none" id="lampeallume">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from "@/routeur.js";

const segments = ref([false, false, false, false, false, false, false, false, false]);
const levers = ref([false, false, false, false, false, false, false, false, false]);

function toggleSegment(index) {
  switch (index) {
    case 7:
      segments.value[1] = !segments.value[1];
      segments.value[4] = !segments.value[4];
      segments.value[7] = !segments.value[7];
      break;
    case 0:
      segments.value[0] = !segments.value[0];
      segments.value[4] = !segments.value[4];
      segments.value[8] = !segments.value[8];
      break;
    case 5:
      segments.value[0] = !segments.value[0];
      segments.value[5] = !segments.value[5];
      segments.value[6] = !segments.value[6];
      break;
    case 2:
      segments.value[1] = !segments.value[1];
      segments.value[6] = !segments.value[6];
      segments.value[7] = !segments.value[7];
      break;
    case 3:
      segments.value[1] = !segments.value[1];
      segments.value[2] = !segments.value[2];
      segments.value[8] = !segments.value[8];
      break;
    case 4:
      segments.value[1] = !segments.value[1];
      segments.value[4] = !segments.value[4];
      segments.value[6] = !segments.value[6];
      break;
    case 1:
      segments.value[2] = !segments.value[2];
      segments.value[3] = !segments.value[3];
      segments.value[8] = !segments.value[8];
      break;
    case 6:
      segments.value[3] = !segments.value[3];
      segments.value[6] = !segments.value[6];
      segments.value[7] = !segments.value[7];
      break;
    case 8:
      segments.value[2] = !segments.value[2];
      segments.value[5] = !segments.value[5];
      segments.value[3] = !segments.value[3];
      break;
  }
}

function toggleLever(index) {
  levers.value[index] = !levers.value[index];
}

function shuffleSegments() {
  for (let i = segments.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [segments.value[i], segments.value[j]] = [segments.value[j], segments.value[i]];
  }
}

function isPathComplete() {
  return segments.value.every((segment) => segment);
}

function onLeverClick(index) {
  toggleSegment(index);
  toggleLever(index);

  if (isPathComplete()) {
    // Mettez le chemin en vert avant l'affichage de l'alerte
    var lampeeteint = document.getElementById("lampeeteint");
    var lampeallume = document.getElementById("lampeallume");

    lampeeteint.style.display = "none";
    lampeallume.style.display = "block";
    setTimeout(() => {
      alert('Félicitations ! Vous avez construit le chemin.');
      router.push("/Fin");
    }, 500); // 500 millisecondes de pause (ajustez selon vos préférences)
  }
}

function resetGame() {
  levers.value = [false, false, false, false, false ,false, false, false, false];
  shuffleSegments();
}

onMounted(() => {
  shuffleSegments();
});

</script>

<style>
@font-face {
  font-family: Poppins;
  src: url(../font/Poppins-Regular.ttf);
}
body{
  font-family: Poppins,sans-serif;
}
.texte > *{
  text-align: center;
}
#game-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
}

.lever {
  width: 120px;
  height: 60px;
  border: 2px solid #000;
  margin: 15px 0;
  position: relative;
  cursor: pointer;
}
.lever >p {
  padding-left: 5px ;
}
.lever-switch {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border: 1px solid #000;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.lever-switch.on {
  background-color: #00ff00;
}

.path {
  width: 60px;
  height: 60px;
  border: 2px solid #000;
  margin: 15px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.path.open {
  background-color: #00ff00; /* Change the color of open segments as per your preference */
}
</style>
