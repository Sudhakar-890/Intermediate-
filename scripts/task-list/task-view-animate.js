// prior tab change

let currentTab;
const priors = document.querySelectorAll('.prior');
priors.forEach((prior,index)=>{
    prior.addEventListener('click',()=>changePriorTab(index))
});

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