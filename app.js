 let amigos = [];
 let sorteados = [];

 function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

  if (nome === ""|| !isNaN(nome)) {
    alert("Insira pelo menos um nome");
    return;
   }

    amigos.push(nome);

    atualizarLista();

    input.value = "";
}   

 function atualizarLista() {
    const lista = document.getElementById( "listaAmigos");
    (lista.inner.HTML = ""),
    amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo +  (index < amigo.length -1 ? ";" : "");
    lista.appendChild(li); 
});
}

 function sortearAmigo() {
    if (amigos.length === 0) {
       alert("Nenhum nome inserido, para jogar insira um nome válido.");
       return;
    }
    if (amigos.length === 4) {
        alert("É necessário mais de 4 participantes para todos terem seus amigos secretos");
        return;
    }
 }

 let nomeSorteado = Match.floor(Match.random() * amigos.length);

 let amigoSorteado = amigos[nomeSorteado];

 sorteados.push(amigoSorteado);

 const resultado = document.getElementById("resultado");

 resultado.innerHTML = "O seu amigo secreto é: " + sorteados;

  atualizarLista();






