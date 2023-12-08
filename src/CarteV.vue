<script setup>
import {Carte} from "@/class/Carte.js";

let props =defineProps({
  carte: {
    type: Carte,
    required: true
  }
});

</script>

<template>
  <div class="carte">
    <div class="titreCarte text">
      <h1>{{carte.titre}}</h1>
    </div>

    <div class="textCarte text">
      <p>{{carte.texte}}</p>
    </div>
  </div>
</template>

<style scoped>
  .carte {
    width: 50%;
    height: 100%;
    background-color: #000000;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .titreCarte {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titreCarte h1{
    text-align: center;
    margin-top: 10%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .textCarte {
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textCarte p{
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
  }

  .text {
    color: #ffffff;
  }

</style>