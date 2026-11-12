
// Selecionando os elementos HTML
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


//Função para adicionar tarefas
function addTask() {

    //Obtém o valor digitado pelo usuário
    const taskText = taskInput.value;

    // Verifica se o campo está vazio
    if (taskText === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }

    //Criar um novo elemento de lista
    const li = document.createElement("li");

    // Adiciona o texto da tarefa ao elemento
    li.textContent = taskText;


    //Criar um botão de remoção
    const removeButton = document.createElement("button");

    // Define o texto do botão
    removeButton.textContent = "Remover";


    // Implementar a ação de remoção
    removeButton.onclick = function() {

        // Remove a tarefa da lista
        taskList.removeChild(li);

    };


    // Anexar os elementos à lista de tarefas
    li.appendChild(removeButton);

    taskList.appendChild(li);


    // Limpar o campo de entrada
    taskInput.value = "";

}
