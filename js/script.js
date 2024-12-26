document.addEventListener('click', function(event) {
    const burgerCheckbox = document.getElementById('burger-checkbox');
    const menuList = document.querySelector('.menu-list');

    // Verifică dacă clicul a fost în afara meniului burger
    if (!menuList.contains(event.target) && !burgerCheckbox.contains(event.target)) {
        burgerCheckbox.checked = false; // Ascunde meniul
    }
});
