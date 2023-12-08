import {Barre} from "@/Classes/Blocs/Barre.js";
import {S} from "@/Classes/Blocs/S.js";
import {T} from "@/Classes/Blocs/T.js";
import {J} from "@/Classes/Blocs/J.js";
import {L} from "@/Classes/Blocs/L.js";
import {Carre} from "@/Classes/Blocs/Carre.js";
import {Z} from "@/Classes/Blocs/Z.js";

export class Plateau {
    constructor() {
        this.matrice = Array.from({ length: 20 }, () => Array(10).fill(0));
        this.objetCourant = null;
        this.positionXDebut =  null;
        this.positionYDebut = null;
        this.positionXFin =  null;
        this.positionYFin = null;
        this.rajouterObjet();
        this.victoire = null;
    }



    rajouterObjet() {
        /*if(this.estPerdu()) {
            this.victoire = false;
        }*/
        this.objetCourant = this.getObjetRandom();

        // Initialisation de variables utilitaires
        const objetMatrice = this.objetCourant.matrice[this.objetCourant.indice]; // Récupération de la matrice de l'objet
        const hauteurObjet = objetMatrice.length;
        const largeurObjet = objetMatrice[0].length;

        const debut = Math.floor((10 - largeurObjet)/ 2); // Calcul du debut lors de l'init
        const fin = debut + largeurObjet; // Calcul de la position de fin

        // Initialisation des coordonnées de l'objet courant
        this.positionXDebut = debut;
        this.positionXFin = debut+largeurObjet;
        this.positionYDebut =0;
        this.positionYFin= objetMatrice.length;

        this.afficherObjetCourant();
    }

    verifierDescente() {
        // Vérifier si l'objet est à la limite inférieure du plateau
        if (this.positionYFin >= this.matrice.length) {
            return false;
        }

        // Coordonnées de l'objet dans la matrice
        const debutX = this.positionXDebut;
        const finX = this.positionXFin;
        const debutY = this.positionYDebut;
        const finY = this.positionYFin;

        // Parcours de la matrice pour vérifier la présence d'obstacles sous l'objet
        for (let i = finY; i < finY + 1; i++) { // Vérification de la ligne directement sous l'objet
            for (let j = debutX; j < finX; j++) {
                if (this.matrice[i][j] === 1) {
                    return false; // Obstacle détecté, descente non autorisée
                }
            }
        }
        /*const objetMatrice = this.objetCourant.matrice[this.objetCourant.indice];
        for (let i = debutX; i < finX; i++) {
            //console.log(finY);
            if(finY !== 19) {
                if(objetMatrice[objetMatrice.max - 1] === true) {
                    if (this.matrice[finY][i] === 1) {
                        //console.log(this.matrice);
                        return false;
                    }
                }
            }
        }*/

        /*if (this.matrice[19] === [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
            this.supprimerLigne();
        }*/

        return true; // Pas d'obstacle détecté, descente autorisée
    }


    descendreObjetCourant() {
        // Vérifier si l'objet est à la limite inférieure du plateau
        if (this.verifierDescente()){
            // Descendre l'objet d'une unité en mettant à jour les coordonnées Y
            this.positionYDebut++;
            this.positionYFin++;

            // Mettre à jour la matrice en déplaçant l'objet vers le bas
            const objetMatrice = this.objetCourant.matrice[this.objetCourant.indice];

            //#Parcours
            // Réinitialiser les lignes précédentes de la matrice où l'objet était
            for (let i = this.positionYDebut - 1; i < this.positionYFin - 1; i++) {
                for (let j = this.positionXDebut; j < this.positionXFin; j++) {
                    this.matrice[i][j] = 0; // Remplacer par la valeur par défaut (0 par exemple)
                }
            }

            //#Parcours
            // Mettre à jour les nouvelles lignes de la matrice où l'objet est en train de descendre
            for (let i = this.positionYDebut; i < this.positionYFin; i++) {
                for (let j = this.positionXDebut; j < this.positionXFin; j++) {
                    this.matrice[i][j] = objetMatrice[i - this.positionYDebut][j - this.positionXDebut];
                }
            }
        }
        else{ //à changer pour prendre en compte collisions également
            this.fixerObjet();
        }
    }


    fixerObjet(){
        this.rajouterObjet();
    }

    tournerObjetCourant() {
        this.supprimerObjetCourant();

        // Sauvegarde de l'indice actuel de l'objet
        const indiceActuel = this.objetCourant.indice;

        // Tentative de rotation de l'objet
        this.objetCourant.indice = (this.objetCourant.indice + 1) % this.objetCourant.matrice.length;

        // Vérification des collisions après la rotation
        const objetMatrice = this.objetCourant.matrice[this.objetCourant.indice];
        const hauteurObjet = objetMatrice.length;
        const largeurObjet = objetMatrice[0].length;

        // Vérification des bords du plateau
        if (this.positionXDebut >= 0 && this.positionXFin <= 10 && this.positionYFin <= 20) {
            let collision = false;

            // Vérification des collisions avec les autres figures
            for (let y = 0; y < hauteurObjet; y++) {
                for (let x = 0; x < largeurObjet; x++) {
                    if (objetMatrice[y][x] !== 0) {
                        const posX = this.positionXDebut + x;
                        const posY = this.positionYDebut + y;

                        // Vérification des collisions avec les autres figures déjà placées
                        if (posX < 0 || posX >= 10 || posY >= 20 || (posY >= 0 && this.matrice[posY][posX] !== 0)) {
                            collision = true;
                            break;
                        }
                    }
                }
                if (collision) break;
            }

            // Si une collision est détectée, annule la rotation
            if (collision) {
                this.objetCourant.indice = indiceActuel;
            }
        } else {
            // Si la rotation amène l'objet en dehors du plateau, annule la rotation
            this.objetCourant.indice = indiceActuel;
        }

        // Affichage de l'objet après la rotation (s'il n'y a pas eu de collision)
        this.afficherObjetCourant();
    }


    getObjetRandom(){
        const random = Math.floor(Math.random() * 7);
        switch (random) {
            case 0:
                return new Barre();
            case 1:
                return new Carre();
            case 2:
                return new L();
            case 3:
                return new J();
            case 4:
                return new T();
            case 5:
                return new S();
            case 6:
                return new Z();
        }
    }

    supprimerObjetCourant() {
        // Réinitialiser les cellules de la matrice occupées par l'objet
        for (let i = this.positionYDebut; i < this.positionYFin; i++) {
            for (let j = this.positionXDebut; j < this.positionXFin; j++) {
                this.matrice[i][j] = 0; // Réinitialiser à 0
            }
        }
    }

    afficherObjetCourant(){
        const objetMatrice = this.objetCourant.matrice[this.objetCourant.indice];
        for (let i = this.positionYDebut; i < this.positionYFin; i++) {
            for (let j = this.positionXDebut; j < this.positionXFin; j++) {
                if(this.matrice[i][j] !== 1 && objetMatrice[i - this.positionYDebut][j - this.positionXDebut] !== 0) {
                    this.matrice[i][j] = objetMatrice[i - this.positionYDebut][j - this.positionXDebut];
                }
            }
        }
    }

    supprimerLigne(){
        for (let i = 20; i > 1; i --) {
            for (let j = 0; j < 10; j ++) {
                this.matrice[i][j] = this.matrice[i - 1][j];
            }
        }
        for (let i = 0; i < 10; i ++) {
            this.matrice[0][i] = 0;
        }
    }



    deplacementDroite(){
        if(this.positionXDebut>0){
            this.supprimerObjetCourant();
            this.positionXDebut+=-1;
            this.positionXFin+=-1;
            this.afficherObjetCourant();
        }
    }

    deplacementGauche(){
        if(this.positionXFin<10){
            this.supprimerObjetCourant();
            this.positionXDebut+=1;
            this.positionXFin+=1;
            this.afficherObjetCourant();
        }
    }
}
