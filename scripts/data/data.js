export let taskStorage = [];

export async function fetchTaskDB(collectionName){
    try{
        const response = await fetch(`http://localhost:3000/api/v1/${collectionName}`);
        if(response.ok){
            const data = await response.json();
            console.log(data,"get - data.js");
            switch(collectionName){
                case "taskStorage":
                    taskStorage = data;
                    break;
                case "completedTasks":
                    completedTasks = data;
                    break;
                case "deletedTasks":
                    deletedTasks = data;
                    break;
                case "pendingTasks":
                    pendingTasks = data;
                    break;
                case "failedTasks":
                    failedTasks = data;
                    break;
                default:
                    console.log("fetchTaskDB failed for",collectionName);
            }
            
        }
        else{
            console.log("no tasks")
            return
        }
    }
    catch(err){
        console.log(err.message);
    }
}

export function saveToStorage(key,datum) {
 let temp = JSON.stringify(datum);
 localStorage.setItem(key,temp);
 updateTaskStorage();
}

 function updateTaskStorage(){
 taskStorage = JSON.parse(localStorage.getItem('inputData')) ||
 [];
}

// deletedTasks
export let deletedTasks = [];

// completed tasks
export let completedTasks = [];

