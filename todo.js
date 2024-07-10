let taskList = [];
function add() {
  const taskInput = document.querySelector('input[type="text"]');
  const task = taskInput.value.trim();
  if (task!== '') {
    taskList.push(task);
    taskInput.value = '';
    renderTaskList();
  }
}
function renderTaskList() {
  const taskListElement = document.querySelector('ul');
  taskListElement.innerHTML = '';
  taskList.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task;
    taskElement.addEventListener('click', () => {
      taskElement.classList.toggle('checked');
    });
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    deleteIcon.style.float = 'right'; // position the delete icon at the rightmost side
    deleteIcon.style.marginLeft = '10px'; // add some margin to separate from the task text
    deleteIcon.onclick = () => {
      deleteTask(index);
    };
    taskElement.appendChild(deleteIcon);
    taskListElement.appendChild(taskElement);
  });
}
function deleteTask(index) {
  taskList.splice(index, 1);
  renderTaskList();
}
document.addEventListener('DOMContentLoaded', renderTaskList);