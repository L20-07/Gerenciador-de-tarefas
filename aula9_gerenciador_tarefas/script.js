const dropZones = document.querySelectorAll('.drop_zone');

function makeDraggable(item) {
    item.setAttribute('draggable', 'true');
    item.classList.add('drag_item');

    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
}

//solta
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

//colocar novas tarefas (fazer-pesquisar)
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = document.createElement('div');
        newTask.textContent = taskText;
        newTask.classList.add('drag_item');
        newTask.id = 'task_' + new Date().getTime(); 

        makeDraggable(newTask); 
        document.getElementById('drop_fazer').appendChild(newTask); 
        
        taskInput.value = ''; 
    } else {
        alert('Digite uma tarefa antes de adicionar!');
    }
});
