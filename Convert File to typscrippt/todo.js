const todoList = [];

function addTodo() {
	const name = document.getElementById("name").value;
	const todo = document.getElementById("todo").value;
	
	todoList.push({"name": name, "todo": todo});
	
	renderTodoList();
	
	document.getElementById("name").value = "";
	document.getElementById("todo").value = "";
}

function deleteTodo(index) {
	todoList.splice(index, 1);
	renderTodoList();
}

function renderTodoList() {
	let todoElements = '';
	todoList.forEach((todo, index) => {
		todoElements += '<li>';
		todoElements += todo.name + ': ' + todo.todo;
		todoElements += '   <button onclick="deleteTodo('+index+')">x</button>';
		todoElements += '</li>';
	});
	document.getElementById("todoList").innerHTML = todoElements;
}