document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createTask(form.querySelector('#new-task-description').value, 
              form.querySelector('#priority').selectedIndex);
  });

  function createTask(task, priority) {
    const tasksList = document.querySelector('#tasks');
    const taskListItem = document.createElement('li');
    const deleteTaskButton = document.createElement('button');
    const editTaskButton = document.createElement('button');

    taskListItem.textContent = `${task} `;
    taskListItem.style.color = handlePriorityStyle(priority);
    taskListItem.appendChild(deleteTaskButton);
    taskListItem.appendChild(editTaskButton);

    deleteTaskButton.textContent = 'x';
    deleteTaskButton.addEventListener('click', deleteTask);

    editTaskButton.textContent = "edit";
    editTaskButton.addEventListener('click', handleEditTask)

    tasksList.appendChild(taskListItem);
  }

  function deleteTask(e) {
    e.target.parentNode.remove();
  }

  function handlePriorityStyle(priority) {
    switch (priority) {
      case 0: return 'green';
      case 1: return 'yellow';
      case 2: return 'red';
    }
  }

  function handleEditTask(event) {
    const taskToEdit = prompt('Edit task: ');
    
  }
});
