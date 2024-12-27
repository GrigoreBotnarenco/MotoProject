const burgerCheckbox = document.getElementById('burger-checkbox');
const menuList = document.querySelector('.menu-list');
const searchInput = document.querySelector('.input-search');

burgerCheckbox.addEventListener('change', function(event) {
    if (this.checked) {
        menuList.style.display = 'flex'; 
    } else {
        menuList.style.display = 'none'; 
    }
});

document.addEventListener('click', function(event) {
    if (!menuList.contains(event.target) && !burgerCheckbox.contains(event.target) && !searchInput.contains(event.target)) {
        burgerCheckbox.checked = false; 
        menuList.style.display = 'none'; 
    }
});

menuList.addEventListener('click', function(event) {
    if (event.target.classList.contains('menu-item')) {
        burgerCheckbox.checked = false; 
        menuList.style.display = 'none'; 
    }
});

document.querySelector('.burger-button').addEventListener('click', function(event) {
    burgerCheckbox.checked = !burgerCheckbox.checked; 
    menuList.style.display = burgerCheckbox.checked ? 'flex' : 'none'; 
});

searchInput.addEventListener('focus', function(event) {
});

searchInput.addEventListener('blur', function(event) {
    if (!menuList.contains(document.activeElement)) {
        burgerCheckbox.checked = false; 
        menuList.style.display = 'none'; 
    }
});