var todoList = [];
function addTodo() {
    var nameInput = document.getElementById("name");
    var todoInput = document.getElementById("todo");
    var name = nameInput.value;
    var todo = todoInput.value;
    todoList.push({ name: name, todo: todo });
    renderTodoList();
    nameInput.value = "";
    todoInput.value = "";
}
function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}
function renderTodoList() {
    var todoElements = '';
    todoList.forEach(function (todo, index) {
        todoElements += '<li>';
        todoElements += todo.name + ': ' + todo.todo;
        todoElements += '   <button onclick="deleteTodo(' + index + ')">x</button>';
        todoElements += '</li>';
    });
    document.getElementById("todoList").innerHTML = todoElements;
}
