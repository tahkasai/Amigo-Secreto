// variáveis
let texto = '';
let nomes = [];

//exibir lista de nomes
function exibirNomes(){
    let campo = document.querySelector("#listaAmigos");

    texto = "";
    for (let i=0;i<nomes.length;i++){
        texto += nomes[i]+"<br>";
    }

    campo.innerHTML = texto;
}

function exibirAmigoSorteado(i){
    let nome = document.querySelector('#resultado');
    nome.innerHTML = "O amigo secreto sorteado é: "+nomes[i];
}
// Adicionando amigo
function adicionarAmigo(){
    let nome = document.querySelector('#amigo').value;

    if(nome == ''){
        alert("Por favor, insira um valor válido");
    } else{
        nomes.push(nome);
    
        if(nomes != null){
            exibirNomes();
        }

        console.log(nomes);
        limparCampo();
    }
}

// Limpar campo
function limparCampo(){
    document.querySelector('#amigo').value = '';
}

// Limpar tudo
function limparTudo(){
    let campo = document.querySelector("#listaAmigos");
    campo.innerHTML = "";
    texto = '';
    nomes = [];
}

// Sortear número aleatório
function sortearAmigo(){
    if (nomes[0]==null){
        alert("Não a nomes inseridos para sortear. Tente novamente");
    }else{
        let numero = parseInt(Math.random() * nomes.length);
        
        exibirAmigoSorteado(numero);

        limparTudo();
    }
}