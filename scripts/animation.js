import { fetchInput } from './main.js';

/* searchbar change */

const text = document.querySelector('.center-heading');
const searchIcon = document.querySelector('#searchIcon');
const search = document.querySelector('input[type=search]');
searchIcon.addEventListener('click', toggleSearch);

function toggleSearch() {
 text.style.animation = 'rotateTask 0.3s ease-out';
 search.style.animation = 'rotateSearch 0.3s ease-out';
 text.classList.toggle('task-hide');
 search.classList.toggle('search-active');
}

// keyboard events 

const title = document.querySelector('#text');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const priority = document.querySelector('#priority');
const addBtn = document.querySelector('#addBtn');

document.addEventListener('DOMContentLoaded', () => {
 const fields = [title, description, date, time, priority, addBtn];
 fields.forEach((field, index) => {
  field.addEventListener('keydown', (event) => {
   if (event.key == 'Enter') {
    event.preventDefault();
    let next = index + 1;
    field = fields[next];
    if (field) {
     field.focus();
    }
    else {
     fetchInput();
    }
    
   }
  });
 });
 
 // move span on focus
 fields[0].addEventListener('focus',()=>{
  document.querySelector('#textSpan').classList.add('moveTextSpan');
 });
 
 // move span on blur
 fields[0].addEventListener('blur',()=>{
  if(!fields[0].value){
   console.log('back')
   document.querySelector('#textSpan').classList.remove('moveTextSpan');
  }
 });
 
});


// fix clicks on date and time
document.addEventListener("DOMContentLoaded", () => {
 [date, time].forEach((field) => {
  field.addEventListener('focus', (event) => {
   event.preventDefault();
   field.showPicker();
  });
 });
});

// clear inputs 

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
 title.value = "";
 description.value = "";
 date.value = "";
 time.value = "";
 priority.value = "high";
});