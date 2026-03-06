import taskStorage,{saveToStorage} from './data/data.js';

const title = document.querySelector('#text');
const description = document.querySelector('#description');
const date = document.querySelector('input[type=date]');
const time = document.querySelector('#time');
const priority = document.querySelector('#priority');

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click',fetchInput);

function fetchInput(){
 const KEY = 'inputData';
 taskStorage.push({
  title : title.value,
  description:description.value,
  date:date.value,
  time:time.value,
  priority:priority.value
 });
 
 // save the input in LS
 console.log(taskStorage);
 saveToStorage(KEY,taskStorage);

 // clear input fields
 title.value = "";
 description.value = "";
 date.value = "";
 time.value = "";
 priority.value = "high";
}

