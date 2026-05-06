
export function filterTaskHTML(Tasks,filterType,all=false){
   let highCount = 0;
   let mediumCount = 0;
   let lowCount = 0;
   taskHTML(Tasks);
   
 function taskHTML(Tasks)
 {
  let highHTML = "";
  let mediumHTML = '';
  let lowHTML = "";
  console.log(Tasks)
   all ? null : findCount(Tasks);
  //  console.log(highCount,mediumCount,lowCount);
  

  if(Tasks.length===0){
    Tasks.push(1);
  }

  Tasks.forEach((task) => {
    if (task.priority === 'high' || highCount == 0) {
     if (highCount== 0 && !all){
      console.log('high html reached 0')
      highHTML = 
      `
          <div class='taskBox'>
          no ${filterType} Tasks !
          </div>
      `;
     }
    else{

    highHTML +=
     `
        <div class='taskBox' style="background-color:${filterType==="deleted"?"rgba(255,0,0,0.4)":"rgba(0,255,0,0.6)"}">
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

      </div>
    `;
    }
    
   }
   
   if (task.priority == 'medium' || mediumCount==0) {
     if (mediumCount == 0 && !all) {
       mediumHTML =
         `
          <div class='taskBox'>
          no ${filterType} Tasks !
          </div>
      `;
     }
     else{
    mediumHTML +=
     `
        <div class='taskBox' style="background-color:${filterType==="deleted"?"rgba(255,0,0,0.4)":"rgba(0,255,0,0.6)"}">
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
      </div>
    `;}
   }
   
    if (task.priority == 'low' || lowCount == 0) {
     if (lowCount == 0 && !all) {
       lowHTML =
         `
          <div class='taskBox'>
          no ${filterType} Tasks !
          </div>
      `;
     }
     else {
    lowHTML +=
     `
        <div class='taskBox' style="background-color:${filterType==="deleted"?"rgba(255,0,0,0.4)":"rgba(0,255,0,0.6)"}">
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
   all ? null :tab.innerHTML = "";
   tab.insertAdjacentHTML('afterbegin', variables[option]);
  });
 }
 
 function findCount(Tasks){
  Tasks.forEach((task)=>{
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