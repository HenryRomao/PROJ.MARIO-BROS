const buttonTrailer = document.querySelector('.button-trailer');
const buttonCloseModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

buttonCloseModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});