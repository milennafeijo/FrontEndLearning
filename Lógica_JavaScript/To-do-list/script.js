const tarefas = [];

const buttonAdd = document.getElementById('add-button');
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

function criarItem(text) {

    const item = document.createElement('label');
    item.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = text;

    const button = document.createElement('button');
    button.classList.add('delete-button');
    button.innerHTML = '🗑 &nbsp; Excluir';

    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(button);

    button.addEventListener('click', function () {
        item.remove();
        tarefas.splice(tarefas.indexOf(text), 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    });

    todoList.appendChild(item);

}


buttonAdd.addEventListener('click', function () {
    const text = textInput.value.trim();
    if (!text) return;

    criarItem(text);

    tarefas.push(text);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    textInput.value = '';
    textInput.focus();
});


localStorage.getItem('tarefas') && JSON.parse(localStorage.getItem('tarefas')).forEach(function (text) {
    criarItem(text);
    tarefas.push(text);
});


textInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        buttonAdd.click();
    }
});

