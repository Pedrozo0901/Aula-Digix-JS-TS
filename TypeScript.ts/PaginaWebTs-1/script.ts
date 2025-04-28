function saudarTratado(): void {
    // Tentar obter o elemento com id "saudacao"
    const input = document.getElementById("nome");

    // verificar se o elemento existe e é um input
    if(input && input instanceof HTMLInputElement) {
        const nome = input.value.trim(); // remover espaços em branco do início e no fim

        // verifica se o elemento existe
        if (nome === "")
        {
            // definir o conteúdo do elemento
            alert("Por favor, digite seu nome.");
        } else {
            console.log("Elemento com id 'saudacao' não encontrado");
        }
    }
}