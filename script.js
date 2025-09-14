
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
    
       let listTask = document.createElement('li');
       let span = document.createElement('span');
       let checklistTask = document.createElement('input');
       let btnlistTask = document.createElement('button');
       
       span.textContent = task;
       checklistTask.setAttribute('type', 'checkbox');
       btnlistTask.textContent = 'Eliminar';
       

       btnlistTask.addEventListener('click', deleteTask);
       checklistTask.addEventListener('click', completeTask);
       
       listTask.append(span);
       list.append(listTask);
       listTask.append(checklistTask);
       listTask.append(btnlistTask);
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
        let listTask = document.createElement('li');
        let checkedList = document.createElement('input');
        let btnlistTask = document.createElement('button');
        let span = document.createElement('span');
        span.textContent = tarea.task;
        
        checkedList.setAttribute('type', 'checkbox');
        btnlistTask.textContent = 'Eliminar';

        listTask.append(span);
        checkedList.checked = tarea.completed;
         if (tarea.completed) { span.classList.add('taskCompleted'); }
         listTask.append(checkedList)
         listTask.append(btnlistTask)
         list.append(listTask)

        btnlistTask.addEventListener('click', deleteTask)
        checkedList.addEventListener('click', completeTask)

    });
   
}
loadTasks();


