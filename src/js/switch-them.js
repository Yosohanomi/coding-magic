import whiteIcon from "/img/svg/header/white.svg"
import darkIcon from "/img/svg/header/dark.svg"

const icon = document.getElementById("icon")

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    if (document.body.classList.contains("dark-theme")) {
icon.src = darkIcon
    } else {
        icon.src = whiteIcon
    }
})