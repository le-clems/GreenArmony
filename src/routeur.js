import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Home.vue";
import Levier from "@/Levier.vue";
import EnigmeAgroEco from "@/EnigmeAgroEco.vue";
import Debut from "@/Debut.vue";
import CacheCache from "@/CacheCache.vue";
import Transition1 from "@/Transition1.vue";
import Transition2 from "@/Transition2.vue";
import Transition3 from "@/Transition3.vue";
import Transition4 from "@/Transition4.vue";
import Transition5 from "@/Transition5.vue";
import Fin from "@/Fin.vue";
import Fin2 from "@/Fin2.vue";
import Decodage from "@/Decodage.vue";
import Plateau from "@/Vue/Plateau.vue";
import JeuV from "@/JeuV.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/Levier", component: Levier },
    { path: "/EnigmeAgroEco", component: EnigmeAgroEco },
    { path: "/Debut", component: Debut },
    { path: "/CacheCache", component: CacheCache },
    { path: "/Transition1", component: Transition1 },
    { path: "/Transition2", component: Transition2 },
    { path: "/Transition3", component: Transition3 },
    { path: "/Transition4", component: Transition4 },
    { path: "/Transition5", component: Transition5 },
    { path: "/Fin", component: Fin },
    { path: "/Fin2", component: Fin2 },
    { path: "/EnigmeAgroEco", component: EnigmeAgroEco },
    { path: "/Decodage", component: Decodage},
    { path: "/Levier", component: Levier},
    { path : "/Tetris404", component: Plateau},
    { path : "/Jeu", component: JeuV}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;