<template>
  <h>Error 404 </h>
  <div class="plateau">
    <table>
      <tr v-for="(row, rowIndex) in plateau.matrice" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex"
            :class="['case', cell ? 'noir' : 'blanc']">
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
// Import de la classe Plateau
import {Plateau} from '../Classes/Plateau.js';
import {reactive} from "vue";

let plateau = reactive(new Plateau());


document.addEventListener('keydown',
    function (event) {
      const touchePressee = event.key;

      // Vérifier si la touche 'k' est pressée
      if (touchePressee === 'ArrowUp') {
        // Appeler la fonction rotation()
        console.log("tourner");
        plateau.tournerObjetCourant();
      }
      if (touchePressee==='ArrowDown'){
         console.log("descendre");
         plateau.descendreObjetCourant();
      }
      if (touchePressee==="ArrowLeft"){
         plateau.deplacementDroite();
      }
      if (touchePressee==="ArrowRight"){
         plateau.deplacementGauche();
      }
    });
setInterval(() => {
      plateau.descendreObjetCourant();
    },
    1000);

</script>

<style>
/* Styles pour les cases */
.plateau {
  margin-top: 20px;
}

table {
  border-collapse: collapse;
}

td {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
}

.case {
  width: 20px;
  height: 20px;
}

.blanc {
  background-color: white;
}

.noir {
  background-color: black;
}
</style>
