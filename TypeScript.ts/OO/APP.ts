import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta";

function main() {
    try {
        // criando pessoa
        const cliente1 = new Pessoa("João", 30);
        const cliente2 = new Pessoa("Maria", 23);

        // criando uma conta corrente
        const contaCorrente = new Corrente(cliente1, 1000, 500);
        const contaPoupanca = new Poupanca(cliente2, 2000, .5);

        // operações financeiras
        contaCorrente.depositar(500);
        contaCorrente.sacar(1200);
        console.log(contaCorrente.exibirDados());
        contaCorrente.depositar(500);
        console.log(contaCorrente.exibirDados());

        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300);
        console.log(contaPoupanca.exibirDados());
    } catch(error: any) {
        console.log("Erro: " + error.message)
    }
}

main();