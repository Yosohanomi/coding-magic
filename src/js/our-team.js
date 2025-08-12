import SofiaImg from '../img/our-team/Sofia.jpg';
import ArtemImg from '../img/our-team/Artem.png';
import KirillImg from '../img/our-team/Kirill.png';

const teamMembers = [{
        img: SofiaImg,
        name: "Лисенко Софія(Team Leader)",
        info: "Виконала: футер+модалка, гугл діно, футбол, вчені"
    },
    {
        img: ArtemImg,
        name: "Чеглов Артем(Scrum Master)",
        info: "Виконав: вгадай число, камінь ножиці папір, калькулятор, наша команда"
    },
    {
        img: KirillImg,
        name: "Карайсенлі Кирило(робітник)",
        info: "Виконав: хедер+модалка, Перевір рік, калькулятор часу, введіть 3 числа"
    }
];


const imgEl = document.querySelector(".our-team__img");
const nameEl = document.querySelector(".our-team__name");
const infoEl = document.querySelector(".our-team__info");
const arrowLeft = document.querySelector(".our-team__arrow__left");
const arrowRight = document.querySelector(".our-team__arrow__right");
const indicators = document.querySelectorAll(".our-team__indicator");

let currentIndex = 0;

function updateTeamMember(index) {
    const member = teamMembers[index];
    imgEl.src = member.img;
    imgEl.alt = member.name;
    nameEl.textContent = member.name;
    infoEl.textContent = member.info;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
    });
}

arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    updateTeamMember(currentIndex);
});

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teamMembers.length;
    updateTeamMember(currentIndex);
});

updateTeamMember(currentIndex);