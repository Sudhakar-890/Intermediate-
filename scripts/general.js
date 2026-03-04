/* pile animation */

const piles = document.querySelectorAll('footer a');
piles.forEach((pile,index)=>{
    pile.addEventListener('click',()=>{
        current = index;
        localStorage.setItem('c_pile',JSON.stringify(index));
    });
})

current = JSON.parse(localStorage.getItem('c_pile')) || 0;
changePileColor(current);

function changePileColor(current){
    const temp = piles[current];
    temp.style.filter='grayscale(0)';
}