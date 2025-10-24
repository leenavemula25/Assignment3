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

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delete-btn');

  delBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
