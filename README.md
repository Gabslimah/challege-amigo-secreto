# Jogo do Amigo Secreto
## Descrição
O Jogo do Amigo Secreto é uma brincadeira tradicional de fim de ano, onde cada participante sorteia o nome de outro participante e fica responsável por presenteá-lo de forma anônima.

Funcionalidades
O jogo do Amigo Secreto possui as seguintes funcionalidades:
Sortear Amigo Secreto
Essa função é responsável por sortear, de forma aleatória, um participante para cada outro participante. Ela deve garantir que ninguém seja seu próprio amigo secreto.

### def sortear_amigo_secreto(participantes):
    # Lógica para sortear os amigos secretos
    # Retorna um dicionário com a relação de cada participante e seu amigo secreto
    amigos_secretos = {}
    #function adicionarAmigo(){
    let inputAmigo = documentGetById("Amigo");
    let nomeAmigo = input.value;
    return amigos_secretos
Revelar Amigo Secreto
Essa função é responsável por revelar quem é o amigo secreto de cada participante. Ela deve exibir a relação de cada participante e seu respectivo amigo secreto.


### def revelar_amigos_secretos(amigos_secretos):
    # Lógica para revelar os amigos secretos
    # Recebe o dicionário com a relação de participantes e seus amigos secretos
    # Exibe essa informação
    # Sem retorno
    # let sorteado = amigos[Match.floor(Match.random() * amigos.length)];
    let resultado = documentGetById("Resultado");
    resultado.innerHTML = `O seu amigo secreto é: ${sorteado}`;
    Jogar Jogo do Amigo Secreto
    Essa função é responsável por coordenar todo o fluxo do jogo, chamando as funções de sortear e revelar os amigos secretos.

### def jogar_amigo_secreto():
    # Lógica para jogar o jogo do amigo secreto
    # Solicita a lista de participantes
    # Chama a função de sortear amigos secretos
    # Chama a função de revelar amigos secretos
    # function atualizarLista() {
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
## Como Jogar
Reúna os participantes do jogo.
Utilize a função jogar_amigo_secreto() para iniciar o jogo.
Informe a lista de participantes quando solicitado.
Aguarde o sorteio dos amigos secretos.
Cada participante deverá presentear seu amigo secreto de forma anônima.
Ao final, os amigos secretos serão revelados.
Divirta-se!
