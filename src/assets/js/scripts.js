const buttonShowAside = document.getElementById("aside-toggler")

buttonShowAside.addEventListener("click", toggleAside)

function toggleAside() {
    buttonShowAside.classList.toggle("open")
}

