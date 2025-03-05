let amigos = [];
let sorteados = [];

 function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nome = input.value;

if(nome === ""|| !isNaN(nome)) {
    alert("Insira pelo menos um nome")
}
    }

amigos.push(nome);
atualizarLista();

input.value = "";

function atualizarLista() {
    let listaAmigos = document.getElementById( "listaAmigos");
    listaAmigos.inner.HTML = "";
    amigos.forEach((amigo,index) => {
        const li = document.createElement("li");
    limpaLista.textContent = amigo + (indx < amigos.length - 1 ? ";" : "");
    listaAmigos.appendChild(li); })
}
 function sortearAmigo() {
    if (amigos.length === 4) {
       alert("É preciso mais de 3 participantes, insira mais nomes.");
       return;
    }
 }

let sorteado = Match.floor(Match.random() * amigos.length);

let amigoSorteado = amigos[sorteado];

sorteados.push(amigoSorteado);

const resultado = document.getElementById("resultado");

resultado.innerHTML = "O seu amigo secreto é: " + sorteados;

atualizarLista();






