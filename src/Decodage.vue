<template>
  <div>
    <h1>Jeu de Décodage</h1>
    <p>Décodez le texte ci-dessous en minuscule uniquement :     vo bomrkeppowoxd no v kbmdsaeo ocd dbysc pysc zvec bkzsno aeo vk wyioxxo wyxnskvo mo aes oxdbksxo vk pyxdo no vk lkxaesco nodbesckxd v rklsdkdsyx no xywlboeh kxswkeh</p>

    <div id="game-container">
      <textarea v-model="encodedText" placeholder="Entrez le texte codé ici (aide : avocat)"></textarea>
      <button @click="decodeText">Vérifier</button>
      <div id="result">{{ resultMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from "@/routeur.js";

const encodedText = ref('');
const resultMessage = ref('');

// Fonction pour décoder le texte
function decodeText() {
  const decodedText = encodedText.value;

  resultMessage.value = decodedText.toLowerCase()
  if ( resultMessage.value === "le rechauffement de l arctique est trois fois plus rapide que la moyenne mondiale ce qui entraine la fonte de la banquise detruisant l habitation de nombreux animaux"){
    alert('Félicitations ! Vous décodé le texte, maintenant le gouverneur peut lire votre rapport.');
    router.push("/Transition3");
  }
  else {
    resultMessage.value = 'Le gouverneur ne comprend pas votre texte et vous le rend.';
  }
}

// Fonction de codage (peut être modifiée selon vos besoins)

</script>

<style scoped>
#game-container {
  margin-top: 20px;
}

textarea {
  width: 300px;
  height: 100px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

#result {
  margin-top: 20px;
  font-size: 18px;
}
</style>
