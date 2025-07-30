//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];


let InputUsuario = document.querySelector('input-name');
let botaoAdcionar= document.querySelector('button-add');




function adicionarAmigo(InputUsuario) { 
     
    let InputUsuario = document.querySelector('button-add');
    const nomeAdicionado= InputUsuario.ariaValueMax.trim(); // Remove espaços em branco no início e no final do nome


    
    if (nome === '') { 
        console.log('Por favor, adicione um nome válido.');
        return; // Se o nome estiver vazio, não faz nada
    } if(amigos.includes(nomeAdicionado)) {
        alert(`Este amigo já foi adicionado ${nomeAdicionado}. Por favor, adicione um amigo diferente.`);
        // Se o campo já estava vazio ou só com espaços, limparCampo() não fará muita diferença,
        // mas é útil se você quiser garantir que o campo esteja realmente vazio.
       return; 
    }
    amigos.push(nomeAdicionado);// Adiciona o nome ao array de amigos
     
     // Limpa o campo de input após adicionar o amigo
}





function atualizarlista(){
    const listaAmigos =document.querySelector('listaAmigos');
    listaAmigos.innerHTML=""; // Limpa a lista antes de atualizar
    // para percorer um de amigos vou ultilizar o for 
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const itemLista = document.createElement('li'); // Cria um novo elemento de lista
        itemLista.textContent = amigo; // Define o texto do item da lista
        listaAmigos.appendChild(itemLista); // Adiciona o item à lista
    }   
}







function sortearUmAmigo(){
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultadoSorteio = document.querySelector('resultado');
    resultadoSorteio.innerHTML=`amigoSorteado ${amigoSorteado}`; // Exibe o amigo sorteado na tela
    
}



function limparCampo(){
    InputUsuario.ariaValue="";
     // Limpa o campo de input
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

