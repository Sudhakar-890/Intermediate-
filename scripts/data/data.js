const taskStorage = JSON.parse(localStorage.getItem('inputData')) || [];
export default taskStorage;

export function saveToStorage(key,datum) {
 let temp = JSON.stringify(datum);
 localStorage.setItem(key,temp);
}


