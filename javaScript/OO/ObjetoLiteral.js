// Criar um objeto parecido com função construtora, mas é um objeto literal, no final é um objeto

// objeto literal jogador
function Jogador(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.chutar = function () {
        console.log(this.nome + " chutou a bola");
    }
}

function Time (nome, qtd) {
    this.nome = nome;
    this.qtd = qtd;
    this.jogadores = [];
    this.addJogador = function (jogador) {
        this.jogadores.push(jogador);
    }
}

function compare (obj1, obj2) {
    if (obj1 instanceof obj2){
        console.log("São iguais")
    }
    else {
        console.log("Não são iguais")
    }
}

// criando um objeto jogador
let jogador1 = new Jogador("Caça rato", 30);
let jogador2 = new Jogador("Tiago Volpi", 30);

let time1 = new Time("Grêmio", 11)

// conferindo se jogador1 é uma instancia da classe jogador
console.log(jogador1 instanceof Jogador);
