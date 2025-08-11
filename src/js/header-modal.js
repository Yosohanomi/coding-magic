const backdrop = document.querySelector('#backdrop');
const closeBtn = document.querySelector('#close-modal-btn');
const formInput = document.querySelector('#modal__input-form')
const formbutton = document.querySelector('#modal__button-form')
const usetText = document.querySelector('.header__username')

closeBtn.addEventListener('click', (e) => { 
    backdrop.classList.remove('active');
});

formbutton.addEventListener('click', (e) => { 
        e.preventDefault();
            if (formInput.value === "") {
 usetText.textContent = 'User'
 backdrop.classList.remove('active');
    } else
         usetText.textContent = formInput.value
    backdrop.classList.remove('active');
});
