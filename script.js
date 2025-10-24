const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
   const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');

  editBtn.addEventListener('click', () => {
    const newTask = prompt('Edit your task:', span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask;
    }
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delete-btn');

  delBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
