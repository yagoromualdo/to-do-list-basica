document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Botão para marcar como concluído
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Concluir';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Botão para remover a tarefa
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remover';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Limpa o campo de entrada
    }
});
