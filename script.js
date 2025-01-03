
const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput'); //grabs the 'input' in html file
const taskList = document.getElementById('taskList');

function addTask () {

  const task = taskInput.value.trim();

  if (task) {
    createTaskElement(task);
    taskInput.value = '';          //this if statement is clearing your add box after somethings been inputed to the list. 
    saveTask();       
  } else {                         //if nothin is put in it will return this alert below.
    alert('Please enter a task')
  }

}

addButton.addEventListener('click', addTask)  //this is adding an event listener that waits  untill 'add' is clicked then 
// proceeds with the following function below


function createTaskElement(task) {
  const listItem = document.createElement('li') //this grabs the item that is enbedded in the ul and calls it as a li

  listItem.textContent = task; //this is saying that the text in the li will display as a task

  taskList.appendChild(listItem);
}

//saving task to local storage
function saveTask() {

  let task = [];

  taskList.querySelectorAll('li').forEach(function(item) {
    task.push(item.textContent.trim());
  });

  localStorage.setItem('tasks', JSON.stringify(task))
}