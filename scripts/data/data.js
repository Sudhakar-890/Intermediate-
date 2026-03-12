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

