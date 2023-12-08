<script setup>
import {Jeu} from "@/class/Jeu.js";
import CarteV from "@/CarteV.vue";
import popUp from './PopUp.vue'
import { watchEffect, ref, watch, reactive } from 'vue';

const showExplicationJeu = ref(false)
const showExplicationFinPartie = ref(false)

const jeu = reactive(new Jeu());

function miseAJourJauges() {
  miseAJourJauge('jaugePersonne', jeu.jaugeQualiteVie);
  miseAJourJauge('jaugeThermometre', jeu.jaugeRechauffement);
  miseAJourJauge('jaugeEnergieRenouvelable', jeu.jaugeRessourcesRenouvelable);
  miseAJourJauge('jaugeCoal', jeu.jaugeRessourcesFossile);
  miseAJourJauge('jaugeCO2', jeu.jaugeGES);
}

function miseAJourJauge(idJauge, valeur) {
  const jauge = document.getElementById(idJauge);
  if (jauge) {
    jauge.style.width = `${valeur}%`;
  }
}

function resumeFinPartie(perdu) {
  showExplicationFinPartie.value = true;

}

function recommencer() {
  showExplicationFinPartie.value = false;
  jeu.init();
}


watchEffect(() => {
  miseAJourJauges();
});

watch(() => jeu.perdu, (nouvelleValeur) => {
  if (nouvelleValeur) {
    resumeFinPartie(true);
  }
});

watch(() => jeu.gagne, (nouvelleValeur) => {
  if (nouvelleValeur) {
    resumeFinPartie(false);
  }
});

jeu.init();

</script>

<template>
    <div class="jeu">
      <div class="Jauges">
        <div class="jaugeBlock">
          <img src="./img/multiple-users-silhouette.png" alt="jauge1">
          <div class="jaugeContain">
            <div class="jauge" id="jaugePersonne"></div>
          </div>
        </div>
        <div class="jaugeBlock">
          <img src="./img/thermometer.png" alt="Jauge 2">
          <div class="jaugeContain">
            <div class="jauge" id="jaugeThermometre"></div>
          </div>
        </div>
        <div class="jaugeBlock">
          <img src="./img/renewable-energy.png" alt="Jauge 3">
          <div class="jaugeContain">
            <div class="jauge" id="jaugeEnergieRenouvelable"></div>
          </div>
        </div>
        <div class="jaugeBlock">
          <img src="./img/coal-factory.png" alt="Jauge 4">
          <div class="jaugeContain">
            <div class="jauge" id="jaugeCoal"></div>
          </div>
        </div>
        <div class="jaugeBlock">
          <img src="./img/co2.png" alt="Jauge 5">
          <div class="jaugeContain">
            <div class="jauge" id="jaugeCO2"></div>
          </div>
        </div>
      </div>

      <div class="body">
        <div class="FlecheGauche">
          <img src="./img/left-arrow.png" alt="Flèche de gauche" @click="jeu.non()">
        </div>
        <div class="carteEmplacement">
          <CarteV :carte="jeu.carteCourante"></CarteV>
        </div>
        <div class="FlecheDroite">
          <img src="./img/right-arrow.png" alt="Flèche de droite" @click="jeu.oui()">
        </div>
      </div>
    </div>

  <button id="show-modal" @click="showExplicationJeu = true">Règles</button>

  <Teleport to="body">
    <popUp :show="showExplicationJeu" @close="showExplicationJeu = false">
      <template #header>
        <h3>Explications :</h3>
      </template>
      <template #body>
        <p>Vous avez pris le contrôle de la planète enière le 08 décembre 2023.</p>
        <p>Vous aller devoir approuver <span>(droite)</span> ou non <span>(gauche)</span> les choix qui vous seront donner. Selon votre réponse, les jauges du haut vont se remplir ou se vider. Vous avez le sort de la planète entre vos main. </p>
        <img src="./img/multiple-users-silhouette.png" alt="ImagesJauge1">
        <p>La qualité de vie de votre populations, globalement, ils n'aiment pas trop le changement. Il ne doit pas atteindre 0</p>


        <img src="./img/thermometer.png" alt="ImagesJauge2">
        <p>Le degré du réchauffement climatique. Il ne doit pas atteindre 100%</p>

        <img src="./img/renewable-energy.png" alt="ImagesJauge3">
        <p>La quantité d'energie renouvelable que vous produisez. Va de paire avec l'energie fossile.</p>

        <img src="./img/coal-factory.png" alt="ImagesJauge4">
        <p>La quantité de ressource d'energie fossile qu'il vous reste. Si elle atteint 0 et que vous n'avez pas au moins 50% d'energie renouvelable vous perdez. 10% est consommée si vous ne faite rien.</p>

        <img src="./img/co2.png" alt="ImagesJauge5">
        <p>La quantité de gaz à effet de serre que vous relacher dans l'athmosphère. Si il arrive à 100% vous perdez. 10% est ajoutée si vous ne faite rien.</p>

      </template>
      <template #footer>
        <p>Bonne chance !</p>
        <button @click="showExplicationJeu = false">Ok</button>
      </template>
    </popUp>
  </Teleport>

  <Teleport to="body">
    <popUp :show="showExplicationFinPartie" @close="showExplicationFinPartie = false">
      <template #header>
        <h3 v-if="jeu.perdu">Vous avez perdu !</h3>
        <h3 v-else>Vous avez gagné !</h3>
      </template>
      <template #body>
        <p v-if="(jeu.jaugeRechauffement === 100)">Votre jauge de réchauffement est arrivée à 100% : votre population ne peux plus vivre correctement</p>
        <p v-if="(jeu.jaugeQualiteVie === 0)">Votre jauge de qualité de vie de vos habitants est tombée 0 : la fracture social est trop grande, des guerres civils éclatent partout</p>
        <p v-if="(jeu.jaugeRessourcesRenouvelable < 50 && jeu.jaugeRessourcesFossile === 0)">Vous n'avez plus assez d'energie : votre population meurt de faim</p>
        <p v-if="(jeu.jaugeGES === 100)">Votre jauge de gaz à effet de serre est arrivée à 0 : Votre population étouffe.</p>
        <p v-if="(jeu.gagne)">Vous avez réussi à garder votre population en vie et à ne pas détruire la planète ! Bravo !</p>
      </template>
      <template #footer>
        <button @click="recommencer()">Recommencer</button>
      </template>
    </popUp>
  </Teleport>

</template>

<style scoped>

.body {
  width: 80%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
}

.jeu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carteEmplacement{
  width: 100%;
  height: 100%;
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
}

.Jauges {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  border-radius: 30px;
}

.jaugeBlock{
  color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.FlecheDroite {
  display: flex;
  justify-content: center;
  place-items: center;
  cursor: pointer;
}

.FlecheGauche {
  display: flex;
  justify-content: center;
  place-items: center;
}

.FlecheGauche img {
  cursor: pointer;
}

.jaugeBlock img {
  width: 50px;
  height: 50px;
}

.jaugeContain{
  width: 100%;
  height: 10px;
  border: 1px solid #000;
  margin-top: 5px;
  border-radius: 15px;
  overflow: hidden;
}

.jauge {
  width: 0;
  height: 100%;
  background-color: blue;
  transition: width 0.5s ease-in-out;
}

.jaugeBlock{
  display: flex;
  flex-direction: column;
  margin: 5px;

}

</style>