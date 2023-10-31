const buttonShowMenu = document.getElementById("menu-toggler")
const menu = document.querySelector(".menu")

buttonShowMenu.addEventListener("click", toggleMenu)

function toggleMenu() {
    buttonShowMenu.classList.toggle("open")
}

