let carro = {
    // atributos
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    direcao: "Hidraulica",
    arCondicionado: true,
    PaisDeOrigem : {
        pais: "Brasil",
        cidade: "Campo Grande"
    },
    // função
    ligar: function() {
        console.log("Carro ligado. vrum! vrum!")
    }
}

console.table(carro);
console.log(carro.arCondicionado);
console.log(carro.modelo);
console.log(carro.toString());
console.log(carro.ligar()); // <- jeito errado de chamar o método
carro.ligar(); // <- jeito certo

// para modificar os valores:
carro.marca = "Audi";
carro.modelo = "A3";
console.log(carro);

// para deletar propriedades do objeto:
delete carro.ano;
console.log(carro);

// alguns operadores do objeto
// para checar se existe a propriedade:
console.log('marca' in carro);
console.log('cambio' in carro);

