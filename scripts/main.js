import { saveToStorage, taskStorage } from './data/data.js';

const title = document.querySelector('#text');
const description = document.querySelector('#description');
const date = document.querySelector('input[type=date]');
const time = document.querySelector('#time');
const priority = document.querySelector('#priority');

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', fetchInput);
let timeoutAddTask ;
export function fetchInput() {
    if(timeoutAddTask){
        console.log('Please wait !')
    }
    else{
        setTimeout(() => {
            addBtn.classList.remove('js-addBtn')
        }, 200);
        addBtn.classList.add('js-addBtn')
        const KEY = 'inputData';

        if (title.value && date.value && time.value) {
            timeoutAddTask = setTimeout(() => {
                let count = (taskStorage.length) + 101;
                let li = []
                taskStorage.forEach((task, index) => {
                    li.push(task.id);
                });
                while (li.includes(count)) {
                    count += 1;
                }

                taskStorage.push({
                    title: title.value,
                    description: description.value || 'no description',
                    date: date.value,
                    time: time.value,
                    priority: priority.value,
                    id: count
                });
                // save the input in LS
                console.log(taskStorage);
                saveToStorage(KEY, taskStorage);

                // clear input fields
                title.value = "";
                description.value = "";
                date.value = "";
                time.value = "";
                priority.value = "high";

                overlayImg.setAttribute('src', 'assets/loading/task-added.gif');
                document.addEventListener('click', (event) => {
                    if (event.target.closest('.overlay')) {
                        overlay.classList.remove('overlayUnhide');
                    }
                });
            }, 3000);
            const overlayImg = document.querySelector('.overlayImg');
            const overlay = document.querySelector('.overlay');
            overlay.classList.add('overlayUnhide');
            overlayImg.setAttribute('src', 'assets/loading/task-loading.gif');
        }

        else {
            document.querySelector('#alertSpan').style.visibility = 'visible';
            const alertSpan1 = `<span class='alertSpan1'>please enter title...</span>`;

            if (!title.value && !document.querySelector('.alertSpan1')) {
                title.insertAdjacentHTML('afterend', alertSpan1);
                title.style.borderColor = 'red';
            }

            if (!date.value && !document.querySelector('.alertSpan2')) {
                const alertSpan2 = `<span class='alertSpan2'>please set date...</span>`;
                date.insertAdjacentHTML('afterend', alertSpan2);
                date.style.outline = '1px solid red';
                date.classList.remove('focusInput');
            }

            if (!time.value && !document.querySelector('.alertSpan3')) {
                const alertSpan3 = `<span class='alertSpan3'>please set time...</span>`;
                time.insertAdjacentHTML('afterend', alertSpan3);
                time.style.outline = '1px solid red';
                time.classList.remove('focusInput');
            }

        }
    }
 
}