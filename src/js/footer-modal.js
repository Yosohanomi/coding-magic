const openModal = document.querySelector('#open-modal-footer__button')
const backdrop = document.querySelector('#backdrop-footer')
const closeBtn = document.querySelector('#close-modal-footer-btn')
openModal.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', onCloseModal)

function onEscapePress(event) {
    console.log(event.code);
    if(event.code === 'Escape') {
        onCloseModal()
    }
}

backdrop.addEventListener('click', onBackdropClick)

function onBackdropClick(event) {
    if (event.turget === event.currentTarget) {
        onCloseModal()
    }
}

function onOpenModal() {
    window.addEventListener('keydown', onEscapePress)
    backdrop.classList.add('active')
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscapePress)
    backdrop.classList.remove('active')
}