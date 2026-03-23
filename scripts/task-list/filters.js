//import { completedTasks } from "../data/data.js";

//import { findCount } from './renderTask.js';

export function completedTaskHTML(completedTasks){
    let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;
   taskHTML(completedTasks);
   
 function taskHTML(completedTasks)
 {
  let highHTML = "";
  let mediumHTML = '';
  let lowHTML = "";
   findCount();
   console.log(highCount,mediumCount,lowCount);

  if(completedTasks.length===0){
    completedTasks.push(1);
  }

  completedTasks.forEach((task) => {
    console.log(highCount == 0)
    if (task.priority === 'high' || highCount == 0) {
     if (highCount== 0){
      console.log('high html reached 0')
      highHTML = 
      `
          <div class='taskBox'>
          no Tasks added yet !
          </div>
      `;
     }
    else{

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
    
   }
   
   if (task.priority == 'medium' || mediumCount==0) {
     if (mediumCount == 0) {
       mediumHTML =
         `
          <div class='taskBox'>
          no Tasks added yet !
          </div>
      `;
     }
     else{
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
    `;}
   }
   
    if (task.priority == 'low' || lowCount == 0) {
     if (lowCount == 0) {
       lowHTML =
         `
          <div class='taskBox'>
          no Tasks added yet !
          </div>
      `;
     }
     else {
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
    `;}
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
 
 function findCount(){
  completedTasks.forEach((task)=>{
   if(task.priority=='high')
   {
    highCount +=1;
   }
   else if(task.priority=='medium'){
    mediumCount +=1;
   }
   else{
    lowCount += 1;
   }
  });
 }
 
 
 
}