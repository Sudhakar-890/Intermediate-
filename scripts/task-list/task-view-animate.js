// prior tab change

let currentTab=0;
const priors = document.querySelectorAll('.prior');
priors.forEach((prior,index)=>{
    prior.addEventListener('click',()=>{
        changePriorTab(index);
        scrollToTab(index);
    });
});
changePriorTab(currentTab);
function changePriorTab(Tab){
    priors.forEach((prior,index)=>{
        if(Tab!=index){
            prior.classList.remove('curPriorTab');
        }
        else{
            prior.classList.add('curPriorTab');
        }
    });
    
}

function scrollToTab(Tab){
    const tabs = document.querySelectorAll('.priorTabs');
    tabs[Tab].scrollIntoView({
        behavior:'smooth',
        block:'start',
        inline:'center'
    })
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}


let currentBtn = 0;
const filterBtns = document.querySelectorAll('.filterBtn');
filterBtns.forEach((filterBtn,index)=>{
    filterBtn.addEventListener('click',()=>changeFilterBtn(index));
});
changeFilterBtn(currentBtn);

function changeFilterBtn(btn){
    filterBtns.forEach((filterBtn,index)=>{
        if(btn!=index){
            filterBtn.classList.remove('curPriorTab');
        }
        else{
            filterBtn.classList.add('curPriorTab');
        }
    });
}

/* searchbar change */

const priorityBox = document.querySelector('#priorityBox');
const searchIcon = document.querySelector('#searchIcon');
const search = document.querySelector('input[type=search]');
searchIcon.addEventListener('click',toggleSearch);

function toggleSearch(){
    priorityBox.style.animation = 'rotateTask 0.3s ease-out';
    search.style.animation = 'rotateSearch 0.3s ease-out';
    priorityBox.classList.toggle('task-hide');
    search.classList.toggle('search-active');
}

