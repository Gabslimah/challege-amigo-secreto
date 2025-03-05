let amigos = [];

function adicionarNomeAmigo() {
let inputNome = document.getElementById('Insira um nome:').ValueText;
}

if (inputNome == "") {
    alert("Por favor, insira um nome.");
        return;
} else {
    amigos.push(inputNome);
    atualizaLiataAmigos();
}

function atualizarLista() {
    let listaAmigos = document.getElementById( "listaAmigos");
    listaAmigos.inner.HTML = "";
}
 
for (let i = 0; i < listaAmigos.length; i++);let item = document.createElement(li);
item.textContent = amigos[i].text;
listaItem.appendChild(item);

if(amigos.length ===0) {
    function sortearAmigo() {
        if(amigos.length ===0) {
            alert("Adicione um nome");
            return;
      }    
    alert("Adicione um nome");
    return;
}
}

let sorteado = amigos[Match.floor(Match.random() * amigos.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = `O seu amigo secreto é: ${sorteado}`;

let limpaLista = document.getElementById()("listaAmigos");
    limparLista.innerHTML = "";




