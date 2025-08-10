import whiteIcon from "/img/svg/white.svg";
import darkIcon from "/img/svg/dark.svg";

const icon = document.getElementById("icon");
const inputBtn = document.querySelectorAll('.light-border')
const teamArrow = document.querySelectorAll('.team-arrow')

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    const img = document.querySelectorAll('.png-switch');
    img.forEach(image => {
        image.classList.toggle('change-color');
    });

    teamArrow.forEach(arrow => {
        arrow.classList.toggle('change-color');
    });

    inputBtn.forEach(btn => {
        btn.style.filter = 'drop-shadow(2px 2px 0px rgba(255, 255, 255, 0.226))';
    })

    if (document.body.classList.contains("dark-theme")) {
icon.src = darkIcon
    } else {
        icon.src = whiteIcon
    }
})