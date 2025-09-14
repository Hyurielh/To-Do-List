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
       listTask.textContent = task;
       list.append(listTask);
       inputTask.value = '';
    }
}