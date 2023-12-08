import {Carte} from "@/class/Carte.js";
import cartesJson from "@/cartes.json";
import { shuffle as _shuffle } from 'lodash-es';

export class Jeu {
    constructor() {
        this._jaugeRechauffement = 0;
        this._jaugeQualiteVie = 0;
        this._jaugeRessourcesFossile = 0;
        this._jaugeRessourcesRenouvelable = 0;
        this._jaugeGES = 0;

        this._perdu = false;
        this._gagne = false;

        this._cartePasse = [];
        this._cartes = [];
        this._carteCourante = null;
    }

    nextCarte(){
        this._cartes.splice(0, 1)
        if(this._cartes.length === 0){
            this._gagne = true;
            console.log("Gagné");
        }else{
            this.cartes = _shuffle(this._cartes);
            this._cartePasse.push(this._carteCourante);
            this._carteCourante = this._cartes[0];
        }
        console.log(this._carteCourante);
        console.log(this._cartes);
    }


    get gagne() {
        return this._gagne;
    }

    set gagne(value) {
        this._gagne = value;
    }

    get cartePasse() {
        return this._cartePasse;
    }

    set cartePasse(value) {
        this._cartePasse = value;
    }

    oui(){
        this.ajouterJaugeRechauffement(this._carteCourante.effetYes[0])
        this.ajouterJaugeQualiteVie(this._carteCourante.effetYes[1])
        this.ajouterJaugeRessourcesRenouvelable(this._carteCourante.effetYes[2])
        this.ajouterJaugeRessourcesFossile(this._carteCourante.effetYes[3])
        this.ajouterJaugeGES(this._carteCourante.effetYes[4])

        this.nextCarte();
    }

    non(){
        this.ajouterJaugeRechauffement(this._carteCourante.effetNo[0])
        this.ajouterJaugeQualiteVie(this._carteCourante.effetNo[1])
        this.ajouterJaugeRessourcesRenouvelable(this._carteCourante.effetNo[2])
        this.ajouterJaugeRessourcesFossile(this._carteCourante.effetNo[3])
        this.ajouterJaugeGES(this._carteCourante.effetNo[4])

        this.nextCarte();
    }

    ajouterJaugeRechauffement(valeur){
        if (this._jaugeRechauffement + valeur > 100) {
            this._jaugeRechauffement = 100;
            this._perdu = true;
        }else if (this._jaugeRechauffement + valeur < 0) {
            this._jaugeRechauffement = 0;
        }else{
            this._jaugeRechauffement += valeur;
        }
    }

    ajouterJaugeQualiteVie(valeur){
        if (this._jaugeQualiteVie + valeur > 100) {
            this._jaugeQualiteVie = 100;
        }else if (this._jaugeQualiteVie + valeur < 0) {
            this._jaugeQualiteVie = 0;
            this._perdu = true;
        }else{
            this._jaugeQualiteVie += valeur;
        }
    }

    ajouterJaugeRessourcesFossile(valeur){
        if (this._jaugeRessourcesFossile + valeur > 100) {
            this._jaugeRessourcesFossile = 100; //Concretement impossible
        }else if (this._jaugeRessourcesFossile + valeur < 0) {
            this._jaugeRessourcesFossile = 0;
            if(this._jaugeRessourcesRenouvelable < 50){
                this._perdu = true;
            }
        }else{
            this._jaugeRessourcesFossile += valeur;
        }
    }

    ajouterJaugeRessourcesRenouvelable(valeur){
        if (this._jaugeRessourcesRenouvelable + valeur > 100) {
            this._jaugeRessourcesRenouvelable = 100;
        }else if (this._jaugeRessourcesRenouvelable + valeur < 0) {
            this._jaugeRessourcesRenouvelable = 0;
        }else{
            this._jaugeRessourcesRenouvelable += valeur;
        }
    }

    ajouterJaugeGES(valeur){
        if (this._jaugeGES + valeur > 100) {
            this._jaugeGES = 100;
            this._perdu = true;
        }else if (this._jaugeGES + valeur < 0) {
            this._jaugeGES = 0;
        }else{
            this._jaugeGES += valeur;
        }
    }

    get perdu() {
        return this._perdu;
    }

    set perdu(value) {
        this._perdu = value;
    }

    get jaugeGES() {
        return this._jaugeGES;
    }

    set jaugeGES(value) {
        this._jaugeGES = value;
    }

    get carteCourante() {
        return this._carteCourante;
    }

    set carteCourante(value) {
        this._carteCourante = value;
    }

    get cartes() {
        return this._cartes;
    }

    set cartes(value) {
        this._cartes = value;
    }

    init(){
        this._jaugeRechauffement = 50;
        this._jaugeQualiteVie = 60;
        this._jaugeRessourcesFossile = 50;
        this._jaugeRessourcesRenouvelable = 40;
        this._jaugeGES = 30;
        this._cartes = [];
        this.jsonToCartes();
        this._cartes = _shuffle(this._cartes);
        this.carteCourante = this._cartes[0];

        this._perdu = false;
        this._gagne = false;
    }

    get jaugeRechauffement() {
        return this._jaugeRechauffement;
    }

    set jaugeRechauffement(value) {
        this._jaugeRechauffement = value;
    }

    get jaugeQualiteVie() {
        return this._jaugeQualiteVie;
    }

    set jaugeQualiteVie(value) {
        this._jaugeQualiteVie = value;
    }

    get jaugeRessourcesFossile() {
        return this._jaugeRessourcesFossile;
    }

    set jaugeRessourcesFossile(value) {
        this._jaugeRessourcesFossile = value;
    }

    get jaugeRessourcesRenouvelable() {
        return this._jaugeRessourcesRenouvelable;
    }

    set jaugeRessourcesRenouvelable(value) {
        this._jaugeRessourcesRenouvelable = value;
    }



    jsonToCartes() {
        for (let i = 0; i < Object.keys(cartesJson).length; i ++) {
            this._cartes.push(new Carte(cartesJson[i.toString()]["titre"], cartesJson[i]["texte"], cartesJson[i]["effetYes"], cartesJson[i]["effetNo"]));
        }

    }
}