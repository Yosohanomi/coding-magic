import { scientists } from '../data/scientists-data';

const scientistsList = document.getElementById('scientists-list');
const scientistsListBtn = document.getElementById('scientists-list-btn');

const scientistImagesImport = import.meta.glob('../img/scientists/*.jpg', {
    eager: true,
});

const scientistImages = {};

for (const path in scientistImagesImport) {
    const fileName = path.split('/').pop();
    scientistImages[fileName] = scientistImagesImport[path].default;
}

function markUpScientistsGallery(scientists) {
    return scientists.map(({name, surname, born, dead, id}) => {
        const fileName = `${name.toLowerCase()}-${surname.toLowerCase()}.jpg`;
        const imageUrl = scientistImages[fileName] || '';

        return `
        <li class="scientists__item" id="${id}" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${imageUrl});">
        <div class="scientists__item-wrapper">
          <p class="scientists__item__text">${name} ${surname} <br />${born}-${dead}</p>
        </div>
      </li>
        `
    }).join('')
}

function animateScientistItems() {
    const scientistItems = document.querySelectorAll('.scientists__item');
    scientistItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 100); // Плавне з'явлення кожного елемента
    });
}

function updateGallery(scientistsArray) {
    scientistsList.innerHTML = markUpScientistsGallery(scientistsArray);
    animateScientistItems(); // Анімація після оновлення
  }

updateGallery(scientists)

scientistsListBtn.addEventListener('click', filteredScientists)

function filteredScientists(event) {
    switch (event.target.id) {
        case 'nineteen-century':
            updateGallery(
                scientists.filter(({born}) => born >= 1800 && born < 1900),
            )
            break;
        case 'alphabet':
            updateGallery(
                [...scientists].sort((a, b) => a.name.localeCompare(b.name))
            )
            break;
        case 'liven-years':
            updateGallery(
                scientists.toSorted((a, b) => (a.dead - a.born) >= (b.dead - b.born) ? 1 : -1)
            )
            break
        case 'latest-born':
            updateGallery(
                [scientists.reduce((latest, curr) => curr.born > latest.born ? curr : latest, {born: 0})]
            )
            break
        case 'albert-year':
            updateGallery(
                scientists.filter(({ name }) => name == 'Albert')
            )
            break
        case 'start-C':
            updateGallery(
                scientists.filter(({ surname }) => surname[0] == 'C')
            )
            break
        case 'start-A':
            updateGallery(
                scientists.filter(({ name }) => name[0] != 'A')
            )
            break
        case 'longest-shortest':
            updateGallery(
                scientists.reduce((latest, curr) => 
                    [(curr.dead - curr.born) <= (latest[0].dead - latest[0].born) ? curr : latest[0],
                    (curr.dead - curr.born) >= (latest[1].dead - latest[1].born) ? curr : latest[1]],
                [{born: 0, dead: 999}, {born: 0, dead: 0}])
            )
            break
        case 'same-letter':
            updateGallery(
                scientists.filter(({ name, surname}) => name[0] == surname[0])
            )
            break
    }
}
