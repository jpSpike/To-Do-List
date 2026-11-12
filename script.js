
// Selecionando os elementos HTML
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


//Função para adicionar tarefas
function addTask() {

    //Obtém o valor digitado pelo usuário
    const taskText = taskInput.value.trim();

 

    //Verifica se o campo está vazio
    if (taskText === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }

    //Criar um novo elemento de lista
    const li = document.createElement("li");

    //Cria o elemento que receberá o texto da tarefa
    const taskName = document.createElement("span");

    //adiciona o texto digitado ao elemento
    taskName.textContent = taskText;

    // Cria o checkbox de convlusão
    const checkbox = document.createElement("input");

    //definir o tipo do input como checkbox
    checkbox.type = "checkbox";

    //botão de remoção 
    const removeButton = document.createElement("button");

    //Adiciona o símbolo de caveira
    removeButton.textContent = "☠";

    //implementar conclusão de tarefa
    checkbox.onchange = function() {

        if (checkbox.checked) {

            taskName.style.textDecoration = "line-through";
            taskName.style.opacity = "0.5";

        } else {

            taskName.style.textDecoration = "none";
            taskName.style.opacity = "1";

        }

    };
    
    //Implementar a ação de remoção
    removeButton.onclick = function() {

        // Remove a tarefa da lista
        taskList.removeChild(li);

    };


    // Anexar os elementos à lista de tarefas
    li.appendChild(taskName);
    li.appendChild(checkbox);
    li.appendChild(removeButton);

    taskList.appendChild(li);


    // Limpar o campo de entrada
    taskInput.value = "";

}

   // Permitir adicionar tarefas pressionando Enter
taskInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            addTask();
        }

});