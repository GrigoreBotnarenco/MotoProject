document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger-checkbox');
    const menuList = document.querySelector('.menu-list');
    const searchInput = document.querySelector('.input-search');

    // Check if elements exist before adding event listeners
    if (burgerCheckbox) {
        burgerCheckbox.addEventListener('change', function(event) {
            if (this.checked) {
                menuList.style.display = 'flex'; 
            } else {
                menuList.style.display = 'none'; 
            }
        });
    }

    if (menuList) {
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
    }

    searchInput.addEventListener('focus', function(event) {
    });

    searchInput.addEventListener('blur', function(event) {
        if (!menuList.contains(document.activeElement)) {
            burgerCheckbox.checked = false; 
            menuList.style.display = 'none'; 
        }
    });

    const container = document.getElementById('sport-container');

    function createMotorcycleCard(moto) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${moto.marca}</h3>
            <div class="slider">
                ${moto.imagini.map((img, index) => `<img src="${img}" alt="${moto.marca} ${moto.model}" class="slide ${index === 0 ? 'active' : ''}">`).join('')}
            </div>
            <button class="prev" onclick="window.changeSlide(this, -1)">&#10094;</button>
            <button class="next" onclick="window.changeSlide(this, 1)">&#10095;</button>
            <p>Model: ${moto.model}</p>
            <p>Categorie: ${moto.categorie}</p>
            <p>Anul producerii: ${moto.anul_producerii}</p>
            <p>Putere: ${moto.putere_cc} cc</p>
            <p>HP: ${moto.hp}</p>
            <p>Descriere: ${moto.descriere}</p>
            <p>Pret: ${moto.pret} EUR</p>
           
           
           
        `;
        return card;
    }

    window.changeSlide = function(button, direction) {
        console.log('ChangeSlide function called with direction:', direction);
        const card = button.parentElement;
        const slides = card.querySelectorAll('.slide'); 
        let currentIndex = [...slides].findIndex(slide => slide.classList.contains('active')); 

       
        slides[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + direction + slides.length) % slides.length;

        if (currentIndex < 0 || currentIndex >= slides.length) {
            console.error('Current index out of bounds:', currentIndex);
            return;
        }

        try {
            slides[currentIndex].classList.add('active');
        } catch (error) {
            console.error('Error changing slide:', error);
        }
    };

    fetch('../sport.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(moto => {
            const card = createMotorcycleCard(moto);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
});