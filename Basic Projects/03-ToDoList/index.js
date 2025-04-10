let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(index);

    const span = document.createElement('span');
    span.innerHTML = `${task.text} 
      <small class="priority-${task.priority}">[${task.priority}]</small> 
      <small>Due: ${task.dueDate || 'N/A'}</small>`;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const priorityInput = document.getElementById('priority');
  const dueDateInput = document.getElementById('dueDate');

  const taskText = taskInput.value.trim();
  const priority = priorityInput.value;
  const dueDate = dueDateInput.value;

  if (!taskText) {
    alert('Please enter a task.');
    return;
  }

  tasks.push({ text: taskText, priority, dueDate, completed: false });
  taskInput.value = '';
  dueDateInput.value = '';
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const newText = prompt('Edit your task:', tasks[index].text);
  if (newText !== null) {
    const trimmedText = newText.trim();
    if (trimmedText) {
      tasks[index].text = trimmedText;
      saveTasks();
      renderTasks();
    } else {
      alert('Task cannot be empty.');
    }
  }
}

function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}

renderTasks();