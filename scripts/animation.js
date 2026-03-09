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
    next = fields[index+1];
    if (next) {
     next.focus();
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
   document.querySelector('#textSpan').classList.remove('moveTextSpan');
  }
 });
 
 // fix clicks on date and time

 [date, time].forEach((field) => {
  field.addEventListener('focus', (event) => {
   event.preventDefault();
   if(field){
    field.showPicker()
   }
  });
 });

 
});

//;autofocus to next after value set 
 priority.addEventListener('change',()=>{
  priority.blur();
 });
 
 try{
date.addEventListener('change',()=>{
  time.focus();
  });
 }catch(e){}
  
  time.addEventListener('change',()=>{
   priority.focus();
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

// back to input stage after alertSpan

const alertSpan = document.querySelector('#alertSpan');


title.addEventListener('input', () => {
 const alertSpan1 = document.querySelector('.alertSpan1');
    if (alertSpan1) {
     console.log("₹")
        alertSpan1.remove();
        title.style.borderColor = 'darkmagenta';
        if (date.value && time.value && title.value) {
            alertSpan.remove();
        }
    }
});


date.addEventListener('change', () => {
 const alertSpan2 = document.querySelector('.alertSpan2');
    if (alertSpan2) {
        alertSpan2.remove();
        date.style.outline = 'none';
        date.style.boxShadow = 'var(--input-box-shade)';

        if (date.value && time.value && title.value) {
            alertSpan.remove();
        }
    }
});



time.addEventListener('change', () => {
 const alertSpan3 = document.querySelector('.alertSpan3');
    if (alertSpan3) {
        alertSpan3.remove();
        time.style.outline = 'none';
        time.style.boxShadow = 'var(--input-box-shade)';

        if(date.value && time.value && title.value){
            alertSpan.remove();
        }
    }
});

