function saudarTratado() {
    // Tentar obter o elemento com id "saudacao"
    var input = document.getElementById("nome");
    // verificar se o elemento existe e é um input

    if (input && input instanceof HTMLInputElement) {
        var nome = input.value.trim(); // remover espaços em branco do início e no fim
        // verifica se o elemento existe
        if (nome === "") {
            // definir o conteúdo do elemento
            alert("Por favor, digite seu nome.");
        }
        else {
            console.error("Elemento com id 'saudacao' não encontrado");
        }
    } else{
        alert("Elemento com id 'saudacao' não encontrado");
    }
}
