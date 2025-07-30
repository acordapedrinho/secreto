//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    const nomeAdicionado = inputAmigo.value.trim();

    if (nomeAdicionado === '') {
        alert('Por favor, adicione um nome válido.');
        return;
    }

    if (amigos.includes(nomeAdicionado)) {
        alert(`O amigo "${nomeAdicionado}" já foi adicionado.`);
        inputAmigo.value = '';
        return;
    }

    amigos.push(nomeAdicionado);
    inputAmigo.value = '';
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = '';
    resultadoSorteio.innerHTML = `<li>O amigo sorteado é: **${amigoSorteado}**</li>`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}













//  if (nome !== '') {
//         itensParaSortear.push(nome); // Adiciona o item ao final do array
//         atualizarListaNaTela(); // Chama a função para mostrar o item na lista HTML
//         InputUsuario.value = ''; // Limpa o campo de input
//         InputUsuario.focus(); // Coloca o foco de volta no campo para facilitar a digitação
//         habilitarBotaoSortear(); // Habilita o botão de sortear se houver itens
//     } else {
//         alert('Por favor, digite um item antes de adicionar!');
//     }
// }

