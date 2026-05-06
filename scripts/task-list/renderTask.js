import { saveToStorage, taskStorage, fetchTaskDB } from '../data/data.js';

import { completedTasks, deletedTasks } from '../data/data.js';

import { filterTaskHTML } from './filters.js';

import dayjs from "dayjs";

console.log(dayjs())
renderPage();

export async function renderPage(all=true) {

  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;
  await fetchTaskDB('taskStorage');
  taskHTML();
  if(all){
    await fetchTaskDB("completedTasks");
    filterTaskHTML(completedTasks,true);
    await fetchTaskDB("deletedTasks");
    filterTaskHTML(deletedTasks,true);
  }
   
 function taskHTML()
 {
  let highHTML = "";
  let mediumHTML = '';
  let lowHTML = "";
   findCount();

  // console.log('taskHTML', taskStorage);
  if(taskStorage.length===0){
    taskStorage.push(1);
  }

  taskStorage.forEach((task) => {
    console.log(task.date>Date(),dayjs(),"date bool check");
    if (task.priority === 'high' || highCount == 0) {
     if (highCount== 0){
      // console.log('high html reached 0')
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
        <p class='taskDescription'>${task.description===""? '<i>---no description---</i>' : task.description}</p>
       </div>
       <div class="taskActions">
        <div class="taskIcons">
         <img data-id='${task._id}' class="taskEditIcon" src="assets/task-list/edit.png" />
         <img data-id='${task._id}' class="taskTrashIcon" src="assets/task-list/trash.png" />
        </div>
        <button data-id=${task._id} class="completeBtn">
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
        <p class='taskDescription'>${task.description === "" ? '<i>---no description---</i>' : task.description}</p>
       </div>
       <div class="taskActions">
        <div class="taskIcons">
         <img data-id='${task._id}' class="taskEditIcon" src="assets/task-list/edit.png" />
         <img data-id='${task._id}' class="taskTrashIcon" src="assets/task-list/trash.png" />
        </div>
        <button data-id="${task._id}" class="completeBtn">
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
        <p class='taskDescription'>${task.description === "" ? '<i>---no description---</i>' : task.description}</p>
       </div>
       <div class="taskActions">
        <div class="taskIcons">
         <img data-id='${task._id}' class="taskEditIcon" src="assets/task-list/edit.png" />
         <img data-id='${task._id}' class="taskTrashIcon" src="assets/task-list/trash.png" />
        </div>
        <button data-id='${task._id}' class="completeBtn">
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
 
 async function deleteTask(id) {
  try{
  const response = await fetch(`http://localhost:3000/api/vi/delete/${id}`, {method : "DELETE"});
  const res = await response.json();
  console.log(res);
  }
catch(e){
  console.log(e.message);
}
  renderPage();
}

 document.querySelectorAll('.completeBtn').forEach((btn)=>{
  btn.addEventListener('click',()=>{
    const id = btn.dataset.id;
    completeTask(id);
  });
 });

//  complete task
async function completeTask(id) {
    try{
  const response = await fetch(`http://localhost:3000/api/vi/complete/${id}`, {method : "DELETE"});
  const res = await response.json();
  console.log(res);
  }
  catch(e){
  console.log(e.message);
  }
  renderPage();
}

  // edit task
  document.querySelectorAll('.taskEditIcon').forEach((edit)=>{
    edit.addEventListener('click',()=>{
      const id = edit.dataset.id;
      editTask(id);
    });
  });

  async function editTask(id){
    document.querySelector('.overlay').classList.add('overlayUnhide');
    const inputTag = document.querySelectorAll('.overlay input');
    const selectTag = document.querySelector('.overlay select');
    const btn = document.querySelectorAll('.overlay button');
    setTimeout(()=>{
    taskStorage.forEach((task)=>{
      if(task._id===id){
      //  console.log(task.title,task.date,task.time);
        inputTag[0].value = task.title;
        inputTag[1].value = task.description;
        inputTag[2].value = task.date;
        inputTag[3].value = task.time;
        selectTag.value = task.priority;

      btn[1].addEventListener('click',async ()=>{
        let title = inputTag[0].value? inputTag[0].value : task.title;
        let description = inputTag[1].value ? inputTag[1].value : task.description;
        let date = inputTag[2].value ? inputTag[2].value : task.date;
        let time = inputTag[3].value ? inputTag[3].value : task.time;
        let priority = selectTag.value ? selectTag.value : task.priority;
        try{
        const res = await fetch(`http://localhost:3000/api/v1/put/${task._id}`,{
          method : "PUT",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            title,description,date,time,priority
          })
        });
        const resData = await res.json();
        console.log(resData);
        }
        catch(err){
          console.log(err.message);
        }
        document.querySelector('.overlay').classList.remove('overlayUnhide');
        renderPage();
      })

      btn[0].addEventListener('click',()=>{
        document.querySelector('.overlay').classList.remove('overlayUnhide');
      });
    }
    });
    },500);
  }
 
 // fetch the total count
 function findCount(){
  taskStorage.forEach((task)=>{
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
 
 document.querySelectorAll('.filterBtn').forEach((btn,i)=>{
  btn.addEventListener('click',async ()=>{
   if(i==0){
    renderPage();
   }
   
    else if(i==1){
      await fetchTaskDB("completedTasks");
      filterTaskHTML(completedTasks,"completed");
    }

    else if(i==2){
      taskHTML();
    }
    
    else if(i==4){
     await fetchTaskDB("deletedTasks");
     filterTaskHTML(deletedTasks,"deleted");
    }
  })
 });

}