let amigos= []

function adicionarAmigo(){
    let inputAmigo = document.getElementById("Amigo");
    let nomeAmigo = input.value;

    if(nome === "" ) {
        alert("Por favor, insira um nome.");
        return;
    }
}

amigos.push(nomeAmigo);
inputAmigo = "";
inputAmigo.focus();

function atualizarLista() {
    let listaAmigos = document.getElementById( "listaAmigos");
    listaAmigos.inner.HTML = "";
}
 
for (let i = 0; i < listaAmigos.length; i++);let item = document.createElement(li);
item.textContent = amigos[i].text;
listaItem.appendChild(item);

function sortearAmigo() {
    if(amigos.length ===0) {
        alert("Adicione um nome");
        return;
  }
}

let sorteado = amigos[Match.floor(Match.random() * amigos.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = `O seu amigo secreto é: ${sorteado}`;

let limpaLista = document.getElementById()("listaAmigos");
    limparLista.innerHTML = "";


