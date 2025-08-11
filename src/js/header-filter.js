const filterList = document.querySelector('#header-submenu-filter-list');
const sections = document.querySelectorAll('main section');
const filterBtn = document.getElementById('nav-link');

filterList.addEventListener('click', onFilterItemClick);
filterBtn.addEventListener('click', onAllButtonClick);

function onFilterItemClick(event) {
    const filteredTarget =event.target.id;

    if(filteredTarget === 'numerical' || filteredTarget === 'game' || filteredTarget === 'acquaintance') {
        sections.forEach(section => {
            if(section.dataset.category === filteredTarget) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        })
    }
};

function onAllButtonClick(event) {
    event.preventDefault();
    sections.forEach(section => {
        section.style.display = 'block';
    })
}