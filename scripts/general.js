/* pile animation */

const file = document.title;
const piles = document.querySelectorAll('footer a');
changeTab()

function changeTab(){
    if(file=='Smart Task Pro'){
        piles[0].style.filter='grayscale(0)';
    }
    else if(file=='Task List'){
        piles[1].style.filter='grayscale(0)';
    }
}
