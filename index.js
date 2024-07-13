document.addEventListener('DOMContentLoaded', () => {

    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');


    addTodoButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            return;
        }

        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;

        const deleteButton = document.createElement('li');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        todoInput.value = '';


    }

});