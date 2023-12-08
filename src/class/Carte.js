export class Carte {
    constructor(titre, texte, effetYes, effetNo, explication = "") {
        this.titre = titre;
        this.texte = texte;
        this.effetYes = effetYes; //Tableau de 5 valeurs qui correspondent aux effets sur les 5 jauges
        this.effetNo = effetNo;
        this.explication = explication; //Normalement on voulais faire récap avec les explications de pourquoi les décisions donnez ces valeurs mais on a pas eu le temps
    }
}