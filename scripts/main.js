import {saveToStorage,taskStorage} from './data/data.js';
const title = document.querySelector('#text');
const description = document.querySelector('#description');
const date = document.querySelector('input[type=date]');
const time = document.querySelector('#time');
const priority = document.querySelector('#priority');

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click',fetchInput);

export function fetchInput(){
 const KEY = 'inputData';

    if (title.value && date.value && time.value){
        console.log('enterred'+taskStorage)
        taskStorage.push({
            title: title.value,
            description: description.value || 'no description',
            date: date.value,
            time: time.value,
            priority: priority.value
        }); 
        // save the input in LS
        console.log(taskStorage)
        saveToStorage(KEY, taskStorage);

        // clear input fields
        title.value = "";
        description.value = "";
        date.value = "";
        time.value = "";
        priority.value = "high";
}

else{
    document.querySelector('#alertSpan').style.display = 'block';
    const alertSpan1 = `<span class='alertSpan1'>please enter title...</span>`;

    if(!title.value && !document.querySelector('.alertSpan1')){
        title.insertAdjacentHTML('afterend',alertSpan1);
        title.style.borderColor = 'red';
    }

    if(!date.value && !document.querySelector('.alertSpan2')){
        const alertSpan2 = `<span class='alertSpan2'>please set date...</span>`;
        date.insertAdjacentHTML('afterend', alertSpan2);
        date.style.outline = '1px solid red';
        date.style.boxShadow = 'none';
    }

    if (!time.value && !document.querySelector('.alertSpan3')) {
        const alertSpan3 = `<span class='alertSpan3'>please set time...</span>`;
        time.insertAdjacentHTML('afterend', alertSpan3);
        time.style.outline = '1px solid red';
        time.style.boxShadow = 'none';
    }

}

}
