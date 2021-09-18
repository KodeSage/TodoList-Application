// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo_button');
const todoContainer = document.querySelector('.todo_container');
const todolist = document.querySelector('.todolist');
// Event Listerners
todoButton.addEventListener('click', function(add){
    add.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedbutton.classList.add('completed-btn');
    todoDiv.appendChild(completedbutton);

    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
    deletebutton.classList.add('deleted-btn');
    todoDiv.appendChild(deletebutton);

    const editbutton = document.createElement('button');
    editbutton.innerHTML = '<i class="far fa-edit"></i>';
    editbutton.classList.add('edit-btn');
    todoDiv.appendChild(editbutton);

    todolist.appendChild(todoDiv);

    todoInput.value = " ";
});


todolist.addEventListener('click', function(deletecheckedit){
    const item = deletecheckedit.target;
    if(item.classList[0] === "deleted-btn"){
    const todo = item.parentElement;
   todo.remove();
}
if(item.classList[0] === "completed-btn"){
    const todo = item.parentElement;
   todo.classList.toggle('completed');
}
if(item.classList[0] === "edit-btn"){
    const ed = item.parentElement;
    todoInput.value = ed.innerText;
}
});

