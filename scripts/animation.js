const text = document.querySelector('.center-heading');

const searchIcon = document.querySelector('#searchIcon');

const search = document.querySelector('input[type=search]');

searchIcon.addEventListener('click',toggleSearch);

function toggleSearch(){
    text.style.animation = 'rotateTask 0.5s';
    search.style.animation = 'rotateSearch 0.5s';
    text.classList.toggle('task-hide');
    search.classList.toggle('search-active');
}