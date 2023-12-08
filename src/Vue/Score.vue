<template>
  <div class="score">
    <h2>Score: {{ score }}</h2>
  </div>
</template>

<script setup>
// Propriété réactive du score
import { ref } from 'vue';

const score = ref(0); // Initialisation du score à 0

</script>

<style>
.score {
  text-align: center;
  margin-top: 20px;
}
</style>
