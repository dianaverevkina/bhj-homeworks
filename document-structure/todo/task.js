const tasks  = document.querySelector('.tasks');
const taskInput = tasks.querySelector('.tasks__input');
const tasksList = tasks.querySelector('.tasks__list');

const savedList = localStorage.getItem('myTasksList');

if (savedList) {
  tasksList.innerHTML += savedList;

  const taskRemoves = tasksList.querySelectorAll('.task__remove');
  taskRemoves.forEach(taskRemove => taskRemove.addEventListener('click', removeTask));
}


function addTask (e) {
  if (e.key === 'Enter' && this.value.trim()) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML += `
      <div class="task__title">
        ${this.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    `;

    tasksList.append(task);
 
    this.value = '';
    this.focus();
    
    const taskRemove = task.querySelector('.task__remove');
    taskRemove.addEventListener('click', removeTask);
    
    storeTasks();
  }
}

function removeTask(e) {
  const { target } = e;
  target.closest('.task').remove();
  e.preventDefault();
  storeTasks();
}

function storeTasks() {
  let html = tasksList.innerHTML;
  localStorage.setItem('myTasksList', html);
}

taskInput.addEventListener('keydown', addTask);

// localStorage.clear()







