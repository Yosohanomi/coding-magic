import whiteIcon from "/img/svg/white.svg";
import darkIcon from "/img/svg/dark.svg";

const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    const img = document.querySelectorAll('.png-switch');
    img.forEach(image => {
        image.classList.toggle('change-color');
    });

    if (document.body.classList.contains("dark-theme")) {
icon.src = darkIcon
    } else {
        icon.src = whiteIcon
    }
})