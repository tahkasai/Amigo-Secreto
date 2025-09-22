// variáveis
let nomes = [];

// Adicionando amigo
function adicionarAmigo(){
    let nome = document.querySelector('#amigo').value;
    nomes.push(nome);

    console.log(nomes);
    limparCampo();
}

// Limpar campo
function limparCampo(){
    document.querySelector('#amigo').value = '';
}