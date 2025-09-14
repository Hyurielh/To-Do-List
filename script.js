let list = document.querySelector('#taskList');
let buttonTask = document.querySelector('#addTask');
let inputTask = document.querySelector('#task');

buttonTask.addEventListener('click', addTask);

function addTask() {
    console.log('funciona');
    let task = inputTask.value;

    if (task === '') {
        alert('Por favor agregue una tarea');
    }
    else{
       let listTask = document.createElement('li');
       let checklistTask = document.createElement('input');
       let btnlistTask = document.createElement('button');
       
       checklistTask.setAttribute('type', 'checkbox');
       btnlistTask.textContent = 'Eliminar';
       listTask.textContent = task;

       btnlistTask.addEventListener('click', deleteTask);
       checklistTask.addEventListener('click', completeTask);

       list.append(listTask);
       listTask.append(checklistTask);
       listTask.append(btnlistTask);
       inputTask.value = '';
    }
}
function deleteTask() {
    this.parentNode.remove();
}

function completeTask() {
    this.parentNode.classList.toggle('taskCompleted');
}