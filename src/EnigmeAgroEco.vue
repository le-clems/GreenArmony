<template>
  <div>
    <h1>Feuilleter un livre</h1>
    <p>Cliquez sur les boutons pour feuilleter le livre.</p>

    <div id="game-container">
      <textarea v-model="encodedText" placeholder="Entrez le code ici"></textarea>
      <button @click="decodeText">Vérifier</button>
      <div id="result">{{ resultMessage }}</div>
    </div>

    <div id="book-container">
      <div id="fond2" class="page">
        <div class="prev-button-page" @click="turnPage(-1)" :disabled="currentPage">
          <p>
            Précédent
          </p>
        </div>
        <div class="next-button-page" @click="turnPage(1)" :disabled="currentPage" >Suivante</div>

        <p>
          Page {{ currentPage + 1 }}
        </p>
        <p id="txt">
          {{textes[currentPage]}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import router from "@/routeur.js";

const pages = ref(Array(8).fill({open: false})); // Initial state, all pages closed
const t1 = "Il faut essayer de se diriger au maximum vers l'agroécologie";
const t2 = "La fonte de la banquise n'est pas si grave, elle serait même bénéfique pour l'humanité";
const t3 = "L'acidification des océans empêche les espèces marines de structurer leurs squelettes calcaires et ont du mal à se développer.";
const t4 = 'Les technologies de captage et de stockage du carbone (en anglais, carbon capture and storage ou CCS) représentent une des solutions clés pour décarboner les industries dont les émissions sont difficiles à abattre mais également pour atteindre des émissions négatives grâce à son application dans la production de bioénergie';
const t5 = 'Le rechauffement climatique est une invention de la mafia pour manipuler le monde';
const t6 = "Si il fait plus chaud, cela ne sera pas très grave on aura juste moins froid l'hiver";
const t7 = 'Les néonicotinoïdes sont nossifs, ils seraient bénéfique de les interdire';
const t8 = "La montée des eaux est une bonne nouvelle, on aura plus de plages l'été, comme ça le réchauffement climatique ne nous dérengera pas l'été";
const textes = ref(Array(t1, t2, t3, t4, t5, t6, t7, t8));
const currentPage = ref(0);

const encodedText = ref('');
const resultMessage = ref('');

// Fonction pour décoder le texte
function decodeText  ()  {
  const decodedText = encodedText.value;

  resultMessage.value = decodedText.toLowerCase()
  if ( resultMessage.value === "137"){
    alert('Félicitations ! Vous avez correctement décoder le texte.');
    router.push("/Transition5");
  }
  else {
    resultMessage.value = 'Désolé, la réponse est incorrecte. Essayez à nouveau.';
  }
}

function turnPage(delta) {
  const newPage = currentPage.value + delta;

  if (newPage >= 0 && newPage < pages.value.length) {
    pages.value[currentPage.value].open = false;
    currentPage.value = newPage;
    pages.value[currentPage.value].open = true;
  }
}
</script>

<style scoped>
#controls {
  margin-top: 20px;
  display: flex;
  justify-content: space-between; /* Aligne les boutons à l'extrémité gauche et droite */
}

.prev-button-page {
  left: 5px;
  text-align: left;
  width: fit-content;
  top: 20px;
  background-color: #ccc;
}

.next-button-page {
  right: 5px;
  width: fit-content;
  position: absolute;
  top: 20px;
  background-color: #ccc;
}

#book-container {
  display: flex;
  justify-content: center; /* Centre la page horizontalement */
  align-items: center; /* Centre la page verticalement */
}

#fond2 {
  position: relative;
  width: 55%;
  height: 100vh; /* 100% de la hauteur de la vue */
  background: url('img/livre.png') center center no-repeat; /* Mettez l'image de la banquise en arrière-plan */
  background-size: cover; /* Assurez-vous que l'image couvre tout le conteneur */
}

#txt {
  margin-right: 200px;
  margin-left: 150px;
}

.page {
  position: relative;
  width: 600px; /* Largeur augmentée */
  height: 800px; /* Hauteur augmentée */
  text-align: center;
  padding: 20px; /* Ajout de la marge intérieure pour le texte */
}

.page.open {
  display: block; /* Affiche la page actuelle */
}
</style>