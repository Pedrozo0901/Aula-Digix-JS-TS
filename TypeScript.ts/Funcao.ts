// Criar função type
type Funcao = (a: number, b: number) => number;

function soma(a: number, b: number): number {
    return a + b;
}

// Arrow function
const somaArrow: Funcao = (a, b) => a + b;

// Função anônima
const somaAnonima: Funcao = function(a, b) {
    return a + b;
}

// Função com retorno implicito
const somaRetornoImplicito: Funcao = (a, b) => a + b;

// Função com parâmetros opcionais
function somaComParametrosOpicionais(a: number, b?: number): number {
    if(b) {
        return a + b;
    }
    return a;
}

console.log(soma(1,2));

// Vamos executar esse arquivo usando a ferramenta deno, que é uma ferramenta de execução de códgo TypeScript
// Instalar o deno: iwr https://deno.land/install.ps1 -useb | iex
// executar: deno run Funcao.ts
// executar com permissões: deno run --allow-read Funcao.ts
