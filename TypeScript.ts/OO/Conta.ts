import { Pessoa} from "./Pessoa";

export class Conta {
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar(valor: number): void{
        if(valor <= 0) throw new Error("Valor de depósito deve ser positivo.");
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if(valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if(valor > this.saldo) throw new Error("Saldo insuficiente.");
        this.saldo -= valor;
    }

    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`;
    }
}

export class Poupanca extends Conta {
    private taxaRendimento : number;

    constructor(titular: Pessoa, saldo: number, taxaRendimento: number){
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public aplicarRendimento(): void {
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Rendimentos: ${this.taxaRendimento}%`;
    }
}

export class Corrente extends Conta {
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number){
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public override sacar(valor: number): void {
        if(valor > this.saldo + this.limiteChequeEspecial) {
            throw new Error("Valorde saque excede o limite do cheque especial");
        }
        this.saldo -= valor;
    }

    public override exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Limite Cheque Especial: ${this.limiteChequeEspecial}`;
    }

    
}