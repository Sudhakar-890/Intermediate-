const trashBtn = document.querySelector('.taskTrashIcon');
trashBtn.addEventListener('click',deleteTask);
console.log('hi')
function deleteTask(){
 const id = trashBtn.dataset;
 console.log(id);
}