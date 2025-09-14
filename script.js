
let arrayTasks = JSON.parse(localStorage.getItem('arrayTasks')) || [];

let list = document.querySelector('#taskList');
let buttonTask = document.querySelector('#addTask');
let inputTask = document.querySelector('#task');

buttonTask.addEventListener('click', addTask);

function addTask() {

    let task = inputTask.value.trim();
    
    if (task === '' ) {
        alert('Por favor agregue una tarea');
    }
    else if (arrayTasks.some(tarea => tarea.task === task)) {
        alert('La tarea ya existe');
    }
    else
    {
         newTask = {
        'task': task,
        'completed': false  };

    arrayTasks.push(newTask);
    localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
    renderTask(newTask);
     inputTask.value = '';
    }
   
}

function deleteTask() {
    let taskText = this.parentNode.querySelector('span').textContent;
    const indice = arrayTasks.findIndex(tarea => tarea.task === taskText);
    arrayTasks.splice(indice, 1);
    localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
    this.parentNode.remove();

}

function completeTask() {
let taskText = this.parentNode.querySelector('span').textContent;
let indice = arrayTasks.findIndex(tarea => tarea.task === taskText);
arrayTasks[indice].completed = !arrayTasks[indice].completed;
localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
this.parentNode.querySelector('span').classList.toggle('taskCompleted');
}

function loadTasks() {
    arrayTasks.forEach(tarea => {
        renderTask(tarea);
    });
   
}

function renderTask(taskObject) {
    console.log(taskObject);
     let listTask = document.createElement('li');
       let span = document.createElement('span');
       let checklistTask = document.createElement('input');
       let btnlistTask = document.createElement('button');
       
       span.textContent = taskObject.task;
       checklistTask.setAttribute('type', 'checkbox');
       btnlistTask.textContent = 'Eliminar';
       
       if (taskObject.completed) {
        span.classList.add('taskCompleted');
        checklistTask.checked = true;
       }

       btnlistTask.addEventListener('click', deleteTask);
       checklistTask.addEventListener('click', completeTask);
       
       listTask.append(span);
       listTask.append(checklistTask);
       listTask.append(btnlistTask);
       list.append(listTask);

}

loadTasks();


