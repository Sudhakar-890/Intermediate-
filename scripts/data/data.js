const taskStorage = JSON.parse(localStorage.getItem('data')) || [];

export default taskStorage;

export function saveToStorage(key,datum){
 localStorage.setItem(key,datum)
}


