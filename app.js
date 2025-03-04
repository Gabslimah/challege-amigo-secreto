let amigos= []
let sorteio= []

function adicionarAmigo(){
    let inputAmigo = documentGetById("Amigo");
    let nomeAmigo = input.value;

    if(nome === "" ) {
        alert("Por favor, insira um nome.");
        return;
    }
}

amigos.push(nomeAmigo);
imputAmigo = "";
inputAmigo.focus();
 
function atualizarLista() {
    let listaAmigos = documentGetById( "listaAmigos");
    listaAmigos.inner.HTML = "";
}
 
for (let i = 0; i < listaAmigos.length; i++);let item = document.createElement(li);
item.textContent = amigos[i].text;
listItem.appendChild(item);

function sortearAmigo() {
    if(amigosmigo.length ===0) {
        alert("Adicione um nome");
        return;
    }
}
let sorteado = amigos[Match.floor(Match.random() * amigos.length)];
let resultado = documentGetById("Resultado");
resultado.innerHTML = `O seu amigo secreto é: ${sorteado}`;

let limpaLista = documentGetById()("listaAmigos");
    limparLista.innerHTML = "";


