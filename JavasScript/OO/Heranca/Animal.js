export default class Animal {
    constructor(nome, raca, peso, idade) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.idade = idade;        
    }

    getNome(){
        return this.nome;
    }

    seNome(nome) {
        this.nome = nome;
    }

    mover() {
        console.log("Andando...")
    }

    correr(){
        console.log("Correndo...")
    }
}