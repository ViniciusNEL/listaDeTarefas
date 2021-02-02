
let colecaoTarefas = []


//FUNÇÃO PARA CRIAR A TAREFA 
function criarTarefa(){
    let tarefa = pegarTarefa();

    //FUNÇÃO QUE REMOVE ESPAÇOS NO INÍCIO E NO FINAL - adicionado no dia 3
    tarefa = tarefa.trim();

    if(tarefa !== ""){
        colecaoTarefas.push(tarefa);
        listarTarefas(colecaoTarefas);
        limparCampoTexto();
    }
    else{
        alert("Preencha o campo de listas !");
    }
}


//FUNÇÃO QUE LISTA A TAREFA
function listarTarefas(todasTarefas){
    limparLista();
    for(let i = 0; i < todasTarefas.length; i++){
        let tarefa = todasTarefas[i];
        adicionarNovaTarefa(tarefa,i); // tarefa corresponde ao parametro
    }
}

//FUNÇÃO QUE REMOVE AS TAREFAS
function removerTarefa(tarefaSelecionanda){

    //RECUPERANDO ID DA TAREFA
    let idTarefa = retornarIdTarefa(tarefaSelecionanda); // esse paraemtro corresponde a tarefa seleciona que acontece por meio da função retornarIdTarefa
    
    //REMOVENDO TAREFA DA COLEÇÃO DE TAREFAS
    colecaoTarefas.splice(idTarefa, 1); // o splice exclui cada elemento do array a partir de um indice selecionado, nesse caso só exclui ele proprio, a tarefa selecionada
    
    //ATUALIZANDO BOARD COM AS TAREFAS
    listarTarefas(colecaoTarefas);
}

// CONCLUIR TUDO
function marcarTarefas(){
    const todosCheckbox = pegarTodosCheckbox();
    // existe um for dentro do forEach que pecorre todos os elementos
    todosCheckbox.forEach((checkbox) => {
        checkbox.checked = true;
    });
}

// DESMARCAR TUDO
function desmarcarTarefas(){
    const todosCheckbox = pegarTodosCheckbox();
    todosCheckbox.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

//DELETAR TUDO
function deletarTarefas(){
    limparLista();
    colecaoTarefas.splice(0, colecaoTarefas.length); // exclui da coleção todos elementos 
}

// FUNÇÃO QUE LIMPA O BOARD DE TAREFAS
function limparLista(){
    const lista = document.getElementById("lista-tarefas");
    lista.innerHTML = "";
}

//FUNÇÃO QUE PEGA A TAREFA DO CAMPO, APÓS CLIQUE NO BOTÃO
function pegarTarefa(){
    let capturarTarefa = document.getElementById("campo-texto-tarefa").value;
    return capturarTarefa;
}

//LIMPA O CAMPO
function limparCampoTexto(){
    const campoTextoTarefa = document.getElementById('campo-texto-tarefa');
    campoTextoTarefa.value = '';
}

// FUNÇÃO QUE CRIA ELEMENTOS (HTML) -  DEPOIS ADICIONA A TAREFA
function adicionarNovaTarefa(escreverTarefa, idSmall){ // os ids das tags small vão ser criado de acordo com a iteração do contador 'i' na função listarTarefas que represnta cada elemento do array
    let listaTarefas = document.getElementById("lista-tarefas");
    const li = document.createElement("li");
    li.id = "1";

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const small = document.createElement("small");
    small.id = idSmall;
    small.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    input.type = "checkbox";
    input.className = "check-tarefa";
    input.name = "tarefa";
    span.id = "task-title";
    span.innerText = escreverTarefa;
    span.className = "titulo-tarefa";
    
    listaTarefas.appendChild(li);
    li.appendChild(label);
    li.appendChild(small);
    label.appendChild(input);
    label.appendChild(span);
    mapearIds();
}
//FUNÇÃO QUE RETORNA O ID DA TAREFA QUANDO CLICA NA LIXEIRA
function retornarIdTarefa(tarefa){
    return tarefa.target.id ;
}

//FUNÇÃO QUE RETORNA TODOS CHECKBOX 
function pegarTodosCheckbox(){
    return document.getElementsByName("tarefa");
}

//FUNÇÃO QUE IDENTIFICA O CLIQUE NAS LIXEIRAS
function mapearIds(){
    //RECUPERANDO TODAS AS LIXEIRAS
    let lixeiras = document.querySelectorAll("#tarefas-app ul li small");
  
    //PERCORRENDO ARRAY COM TODAS AS LIXEIRAS
    lixeiras.forEach(lixeira => {
      
        //IDENTIFICANDO CLIQUE EM CADA LIXEIRA
        lixeira.addEventListener('click', removerTarefa);
    });
}

//INDENTIFICANDO CLIQUE NA TECLA ENTER NO TECLADO
document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
      
      //EXECUTA FUNÇÃO QUE CRIA A TAREFA
      criarTarefa();
    }
  });

  

