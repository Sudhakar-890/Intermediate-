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
let isFromEnter = false;
document.addEventListener('DOMContentLoaded', () => {
    const fields = [title, description, date, time, priority];
    fields.forEach((field, index) => {
        field.addEventListener('keydown', (event) => {
            if (event.key == 'Enter') {
                event.preventDefault();
                let next = fields[index + 1];
                if (next) {
                    next.focus();
                    isFromEnter = true;
                }
                else {
                    fetchInput();
                }
            }
        });
    });

    // move span on focus
    fields[0].addEventListener('focus', () => {
        document.querySelector('#textSpan').classList.add('moveTextSpan');
    });

    // move span on blur
    fields[0].addEventListener('blur', () => {
        if (!fields[0].value) {
            document.querySelector('#textSpan').classList.remove('moveTextSpan');
        }
    });

    // fix clicks on date and time

    [date, time].forEach((field) => {
        field.addEventListener('focus', (event) => {
            event.preventDefault();
            try{if (field) {
                field.showPicker()
            }}catch(e){}
        });
    });

    [date, time].forEach((field) => {
        field.addEventListener('click', (event) => {
            event.preventDefault();
            try{if (field) {
                field.showPicker()
            }}catch(e){}
        });
    });

});

//autofocus to next after value set 
const inputBox = document.querySelector('#inputBox');
priority.addEventListener('change', () => {
    if (!isFromEnter) {
        inputBox.focus();
    }
});

try {
    date.addEventListener('change', () => {
        if (!isFromEnter) {
            inputBox.focus()
        }
    });
} catch (e) { }

time.addEventListener('change', () => {
    if (!isFromEnter) {
        inputBox.focus();
    }
});

// clear inputs 
const clearBtn = document.querySelector('#clearBtn');
const alertSpan = document.querySelector('#alertSpan');
clearBtn.addEventListener('click', () => {
    title.value = "";
    description.value = "";
    date.value = "";
    time.value = "";
    priority.value = "high";
    removeAlertSpan1();
    removeAlertSpan2();
    removeAlertSpan3();
    alertSpan.style.visibility = 'hidden';
});

// back to input stage after alertSpan 
title.addEventListener('input',removeAlertSpan1);
date.addEventListener('change',()=>removeAlertSpan2());
time.addEventListener('change',()=>removeAlertSpan3());

function removeAlertSpan1(){
    const alertSpan1 = document.querySelector('.alertSpan1');
    if (alertSpan1) {
        alertSpan1.remove();
        title.style.borderColor = 'darkmagenta';
        if (date.value && time.value && title.value) {
            alertSpan.style.visibility = 'hidden';
        }
    }
}

function removeAlertSpan2(){

    const alertSpan2 = document.querySelector('.alertSpan2');
    if (alertSpan2) {
        alertSpan2.remove();
        date.style.outline = 'none';
        date.classList.add('focusInput');
        if (date.value && time.value && title.value) {
            alertSpan.style.visibility = 'hidden';
        }
    }

}

function removeAlertSpan3(){

    const alertSpan3 = document.querySelector('.alertSpan3');
    if (alertSpan3) {
        alertSpan3.remove();
        time.style.outline = 'none';
        time.classList.add('focusInput');
        if (date.value && time.value && title.value) {
            alertSpan.style.visibility = 'hidden';
        }
    }
}