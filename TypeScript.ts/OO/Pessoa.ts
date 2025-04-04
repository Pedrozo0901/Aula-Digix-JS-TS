export class Pessoa {
    // Encapsulamento
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        if(nome.length < 3) {
            throw new Error("Nome de usuario deve ter pelo menos 3 caracteres.");
            this.nome = nome;
        }
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void{
        if(idade < 0) {
            throw new Error("idade não pode ser negativa");
        }
        this.idade = idade; 
    }

    // Método para exibir informações da pessoa
    public exibirDados(): string {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }

}



