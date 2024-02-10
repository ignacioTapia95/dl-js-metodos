const taskInput = document.getElementById('nuevaTarea');
const btnAdd = document.getElementById('agregarTarea');
const taskList = document.getElementById('listaTareas');
const taskListDone = document.querySelector('cantidadTareas');

const tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${task.id}</td>
            <td>${task.nameTask}</td>
            <td><input type="checkbox"></td>
            <td><i class="fa-solid fa-delete-left""></i></td>
        `;
        taskList.appendChild(tr);
        document.getElementById('totalTareas').textContent = `Total: ${tasks.length}`;

        let checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
        let count = 0;
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', (event) => {
                if(event.target.checked) {
                    count++;
                } else {
                    count--;
                }
                document.getElementById('totalTareasRealizadas').textContent = `Realizadas: ${count}`;
            });
        });
    });


}

btnAdd.addEventListener('click', () => {
  const task = taskInput.value;
  const id = tasks.length + 1;
  tasks.push({id:id, nameTask:task});
  taskInput.value = '';
  renderTasks();
});

//borrar tarea
taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains('fa-delete-left')) {
        const id = event.target.parentElement.parentElement.children[0].textContent;
        const index = tasks.findIndex((task) => task.id === id);
        tasks.splice(index, 1);
        renderTasks();
    }
});