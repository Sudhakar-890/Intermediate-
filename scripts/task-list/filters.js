import { completedTasks } from "../data/data.js";

export function completedTaskHTML(){
    let html = '';

    if(completedTasks.length==0){
        html = 
        `
            <div class='taskBox'>
          no Tasks completed yet !
          </div>
        `;
    }
    else{
        completedTasks.forEach((task)=>{
            
        });
    }
}