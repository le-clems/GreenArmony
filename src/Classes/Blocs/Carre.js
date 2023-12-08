
export class Carre {

    constructor(){
        this.indice = 0;
        this.max = 1;
        this.matrice = [[[1,1],[1,1]]];
    }

    next(){
        this.indice++;
        if(this.indice === this.max){
            this.indice = 0;
        }
        return this;

    }
}