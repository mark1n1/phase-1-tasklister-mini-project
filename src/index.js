document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createTask(form.querySelector('#new-task-description').value);
  });

  function createTask(task) {
    const tasksList = document.querySelector('#tasks');
    const taskListItem = document.createElement('li');
    const deleteTaskButton = document.createElement('button');
    const editTaskButton = document.createElement('button');
    const priority = form.querySelector('#priority').selectedIndex;
    const dueDate = form.querySelector('#due-date');
    const spanDueDate = document.createElement('small');
    
    spanDueDate.textContent =` due: ${dueDate.value} `;
    spanDueDate.style.color = 'black';

    taskListItem.textContent = `${task} `;
    taskListItem.style.color = handlePriorityStyle(priority);

    deleteTaskButton.textContent = 'x';
    deleteTaskButton.addEventListener('click', deleteTask);

    editTaskButton.textContent = "edit";
    editTaskButton.addEventListener('click', handleEditTask)

    tasksList.appendChild(taskListItem);
    taskListItem.appendChild(spanDueDate);
    taskListItem.appendChild(editTaskButton);
    taskListItem.appendChild(deleteTaskButton);
  }

  function deleteTask(e) {
    e.target.parentNode.remove();
  }

  function handlePriorityStyle(priority) {
    switch (priority) {
      case 0: return 'green';
      case 1: return '#ffb300';
      case 2: return 'red';
    }
  }

  function handleEditTask(event) {
    const taskToEdit = prompt('Edit task: ');
    if(taskToEdit) {
      event.target.parentNode.firstChild.data = `${taskToEdit} `;
    }
  }
});
