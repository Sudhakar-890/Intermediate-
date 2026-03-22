import { saveToStorage, taskStorage } from '../data/data.js';

renderPage();

export function renderPage() {
 
   taskHTML();
   
 function taskHTML()
 {
  let highHTML = "";
  let mediumHTML = '';
  let lowHTML = "";
  let highCount = findhighCount();
  
  console.log('taskHTML', taskStorage);
  taskStorage.forEach((task) => {
   if (task.priority === 'high' && highCount!=0) {
    
    highHTML +=
     `
        <div class='taskBox'>
       <div class='taskDetail'>
        <div class="titleBox">
         <img src='assets/gifs/target.png' class="titleIcon" />
         <h3 class='taskTitle'>${task.title}</h3>
        </div>
        <div class="taskTimeBox">
         <img class='taskCalender' src='assets/gifs/schedule.png'>
         <p class='taskDateTime'>
          ${task.date} &#183; ${task.time}
         </p>
        </div>
        <p class='taskDescription'>${task.description == 'no description' ? '<i>---no description---</i>' : task.description}</p>
       </div>
       <div class="taskActions">
        <div class="taskIcons">
         <img class="taskEditIcon" src="assets/task-list/edit.png" />
         <img data-id='${task.id}' class="taskTrashIcon" src="assets/task-list/trash.png" />
        </div>
        <button data-id=${task.id} class="completeBtn">
         complete &#10004;
        </button>
       </div>
      </div>
    `;
    
    
   }
   
   else if (task.priority == 'medium') {
    mediumHTML +=
     `
        <div class='taskBox'>
       <div class='taskDetail'>
        <div class="titleBox">
         <img src='assets/gifs/target.png' class="titleIcon" />
         <h3 class='taskTitle'>${task.title}</h3>
        </div>
        <div class="taskTimeBox">
         <img class='taskCalender' src='assets/gifs/schedule.png'>
         <p class='taskDateTime'>
          ${task.date} &#183; ${task.time}
         </p>
        </div>
        <p class='taskDescription'>${task.description == 'no description' ? '<i>---no description---</i>' : task.description}</p>
       </div>
       <div class="taskActions">
        <div class="taskIcons">
         <img data-id='${task.id}' class="taskEditIcon" src="assets/task-list/edit.png" />
         <img data-id='${task.id}' class="taskTrashIcon" src="assets/task-list/trash.png" />
        </div>
        <button data-id="${task.id}" class="completeBtn">
         complete &#10004;
        </button>
       </div>
      </div>
    `
   }
   
   else if (task.priority == 'low') {
    lowHTML +=
     `
        <div class='taskBox'>
       <div class='taskDetail'>
        <div class="titleBox">
         <img src='assets/gifs/target.png' class="titleIcon" />
         <h3 class='taskTitle'>${task.title}</h3>
        </div>
        <div class="taskTimeBox">
         <img class='taskCalender' src='assets/gifs/schedule.png'>
         <p class='taskDateTime'>
          ${task.date} &#183; ${task.time}
         </p>
        </div>
        <p class='taskDescription'>${task.description == 'no description' ? '<i>---no description---</i>' : task.description}</p>
       </div>
       <div class="taskActions">
        <div class="taskIcons">
         <img data-id='${task.id}' class="taskEditIcon" src="assets/task-list/edit.png" />
         <img data-id='${task.id}' class="taskTrashIcon" src="assets/task-list/trash.png" />
        </div>
        <button data-id='${task.id}' class="completeBtn">
         complete &#10004;
        </button>
       </div>
      </div>
    `
   }
  });
  
  // displaying the HTML
  
  ['high', 'medium', 'low'].forEach((option) => {
   const variables = {
    high: highHTML,
    medium: mediumHTML,
    low: lowHTML
   }
   const tab = document.querySelector(`#${option}`);
   tab.innerHTML = "";
   tab.insertAdjacentHTML('afterbegin', variables[option]);
  });
 }
 
 
 
 // delete buttons
 
 let trashBtns = document.querySelectorAll('.taskTrashIcon');
 
 if (trashBtns) {
  trashBtns.forEach((trashBtn) => {
   trashBtn.addEventListener('click', () => {
    const id = trashBtn.dataset.id;
    deleteTask(id);
   });
  });
 }
 
 // function to delete task 
 
 function deleteTask(id) {
  let temp = []
  taskStorage.forEach((task) => {
   if (task.id != id) {
    temp.push(task);
   }
  })
  
  // save the task to local storage after and re-render the tasks
  saveToStorage('inputData', temp);
  renderPage();
 }
 
 // fetch the total high count
 function findhighCount(){
  let highCount = 0;
  taskStorage.forEach((task)=>{
   if(task.priority=='high')
   {
    highCount ++;
   }
  });
  console.log('in findhighcount function'+highCount);
  if(highCount===0){
   manageEmptyTask(highCount);
  }
  return highCount;
 }
 
 function manageEmptyTask(count){
  console.log(count)
    if(0==count)
    {
     console.log(count);
     let highHTML = 
     `
      <div class="noHighTask">
       <h4> No tasks added Yet !</h4>
      </div>
     `;
     
     const tab = document.querySelector(`#high`);
     console.log(tab,highHTML)
   tab.innerHTML = "";
   tab.insertAdjacentHTML('afterbegin', highHTML);
   console.log('end')
    }
 }
}