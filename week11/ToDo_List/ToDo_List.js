const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function createTask()
{
addButton.addEventListener('click', function () {
const taskText = taskInput.value;
const newTask = document.createElement('li');
newTask.textContent = taskText;
taskList.append(newTask);
taskInput.value = '';
});
}
createTask()


const list = document.getElementById('taskList');

function checkTask() {
list.addEventListener('click', function (event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
});
}
checkTask()