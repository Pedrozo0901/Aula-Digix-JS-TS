// condição simples
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
}

// condição composta
if (idade >= 18) {
    console.log("Maior de idade");
}
else
{
    console.log("Menor de idade");
}

//condição composta com else if
if(idade >= 18)
{
    console.log("Maior de idade");
}
else if (idade >= 12)
{
    console.log("Adolescente");
}
else
{
    console.log("Criança");
}

// condição ternario
let podeVotar = (idade > 18) ? "Pode votar" : "Não pode votar";

// ternario com mais de 2 condições
let podeVotar2 = (idade >= 18) ? "Pode votar" : (idade >= 12) ? "Adolescente" : "Criança";
console.log(podeVotar2);

// ternario com operadores lógicos
let podeVotar3 = (idade >= 18) ? "Pode votar" : (idade >= 12) ? "Adolescente" : "Criança";
console.log(podeVotar3);

// condição switch
let dia = 5;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-fera");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Dia invalido");
}