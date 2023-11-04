const buttonShowAside = document.getElementById("aside-toggler")
const growcastEpsContainer = document.getElementById("growcast-eps-container")
const flutterEpsContainer = document.getElementById("flutter-eps-container")
const uxUiEpsContainer = document.getElementById("ux/ui-eps-container")
const diverseEpsContainer = document.getElementById("diverse-eps-container")

function toggleAside() {
    buttonShowAside.classList.toggle("open")
}

function showModal() {
    
}

function createVideoCard(episode, container) {
    const videoCard = document.createElement("div")
    videoCard.classList.add("video-cards")

    videoCard.innerHTML = `
        <div class="container-fluid h-100">
            <div class="row justify-content-center align-items-end h-50">
                <button>
                    <img class="img-fluid" src="./src/assets/images/play-button.png" alt="Play icon.">
                </button>
            </div>
            <div class="row align-items-center h-50">
                <h3>${episode.title}</h3>
            </div>     
        </div>
                            
        <img src="${episode.image}" alt="Imagem em miniatura do video ${episode.title}.">
    `

    container.appendChild(videoCard)
}

buttonShowAside.addEventListener("click", toggleAside)

episodes.forEach(episode => {
    if (episode.category === "Growcast [Episódios]") createVideoCard(episode, growcastEpsContainer)
    if (episode.category === "Webinar em Flutter") createVideoCard(episode, flutterEpsContainer)
    if (episode.category === "Jornada UX/UI") createVideoCard(episode, uxUiEpsContainer)
    if (episode.category === "Diversos") createVideoCard(episode, diverseEpsContainer)
})