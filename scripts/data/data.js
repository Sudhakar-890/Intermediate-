console.log('enterrd data.js')
export let taskStorage = JSON.parse(localStorage.getItem('inputData')) ||
 [];

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
export let deletedTasks = JSON.parse(localStorage.getItem('deleted')) ||
    [];

// completed tasks

export let completedTasks = JSON.parse(localStorage.getItem('completed')) ||
    [];

