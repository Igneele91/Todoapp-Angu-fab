type Todo = {
	name: string;
	todo: string;
};

const todoList: Todo[] = [];

function addTodo(): void {
	const nameInput = document.getElementById("name") as HTMLInputElement;
	const todoInput = document.getElementById("todo") as HTMLInputElement;

	const name: string = nameInput.value;
	const todo: string = todoInput.value;

	todoList.push({ name, todo });

	renderTodoList();

	nameInput.value = "";
	todoInput.value = "";
}

function deleteTodo(index: number): void {
	todoList.splice(index, 1);
	renderTodoList();
}

function renderTodoList(): void {
	let todoElements: string = '';
	todoList.forEach((todo, index) => {
		todoElements += '<li>';
		todoElements += todo.name + ': ' + todo.todo;
		todoElements += '   <button onclick="deleteTodo(' + index + ')">x</button>';
		todoElements += '</li>';
	});
	document.getElementById("todoList").innerHTML = todoElements;
}
