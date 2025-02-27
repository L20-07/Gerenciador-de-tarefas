// Seleciona todas as áreas onde os itens podem ser soltos
const dropZones = document.querySelectorAll('.drop_zone');

// Função para tornar um elemento arrastável
function makeDraggable(item) {
    item.setAttribute('draggable', 'true');
    item.classList.add('drag_item');

    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
}

// Permitir que os itens sejam soltos nas áreas
dropZones.forEach(zone => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    zone.addEventListener("drop", (event) => {
        event.preventDefault();
        const item_id = event.dataTransfer.getData('text/plain');
        const item = document.getElementById(item_id);
        if (item) {
            zone.appendChild(item);
        }
    });
});

// Adicionar novas tarefas ao clicar no botão
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = document.createElement('div');
        newTask.textContent = taskText;
        newTask.classList.add('drag_item');
        newTask.id = 'task_' + new Date().getTime(); // ID único baseado no tempo

        makeDraggable(newTask); // Torna o novo item arrastável
        document.getElementById('drop_fazer').appendChild(newTask); // Adiciona à área "A Fazer"
        
        taskInput.value = ''; // Limpa o campo de entrada após adicionar
    } else {
        alert('Digite uma tarefa antes de adicionar!');
    }
});
