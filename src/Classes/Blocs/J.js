
// Définition de la classe J qui étend Objets
export class J {
    constructor() {
        this.indice = 0;
        this.max = 4;
        this.matrice = [
            [
                [0, 1],
                [0, 1],
                [1, 1]
            ],
            [
                [1, 0, 0],
                [1, 1, 1]
            ],
            [
                [1, 1],
                [1, 0],
                [1, 0]
            ],
            [
                [1, 1, 1],
                [0, 0, 1]
            ]
        ];
    }

    next(){
        this.indice++;
        if(this.indice === this.max){
            this.indice = 0;
        }
        return this;

    }
}
