const openModal = document.querySelector('#open-modal-footer__button')
const backdrop = document.querySelector('#backdrop-footer')
const closeBtn = document.querySelector('#close-modal-footer-btn')
const inputEmail = document.querySelector('#footer-email')
const style = document.createElement('style');
openModal.addEventListener('click', onOpenModalFooter)
closeBtn.addEventListener('click', onCloseModalFooter)
// backdrop.classList.remove('footer__active')

function onEscapePressFooter(event) {
    if(event.code === 'Escape') {
        onCloseModalFooter()
    }
}

backdrop.addEventListener('click', onBackdropClickFooter)

function onEnterPressFooter(event) {
    if(event.code === 'Enter') {
        onOpenModalFooter()
    }
}
inputEmail.addEventListener('keydown', onEnterPressFooter)

function onBackdropClickFooter(event) {
    if (event.target === event.currentTarget) {
        onCloseModalFooter()
    }
}

function changePlaceholderColor() {
    style.innerHTML = `
            #footer-email::placeholder {
                color: red;
            }
            `;
        document.head.appendChild(style);
}

function onOpenModalFooter(event) {
    event.preventDefault()
    console.log(inputEmail.value.length);
    if (inputEmail.value.length > 0 && inputEmail.value.length < 4 || inputEmail.value.length > 16 ) {
        changePlaceholderColor()
        inputEmail.value = '';
        inputEmail.placeholder = 'Ел. адреса від 4-16 символів'
    } else if (inputEmail.value.length == 0) {
        changePlaceholderColor()
        inputEmail.placeholder = 'Ви не ввели ел. адресу'
    } else if (!inputEmail.value.includes('@')) {
        changePlaceholderColor()
        inputEmail.value = '';
        inputEmail.placeholder = 'Відсутній символ @'
    } else {
        window.addEventListener('keydown', onEscapePressFooter);
        backdrop.classList.remove('is-hidden');
    }
}

function onCloseModalFooter() {
    window.removeEventListener('keydown', onEscapePressFooter)
    backdrop.classList.add('is-hidden')
}