import Animal from "./Animal.js";

export class PicaPau extends Animal {

    constructor(nome, raca, peso, idade, especie) {
        super(nome, raca, peso, idade)
        this.especie = especie;
    }

    bicar() {
        console.log("Picando");
    }
}