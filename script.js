const modal = document.getElementById("ct-form");
const windowContent = document.querySelector(".window-content");

function showModal() {
    modal.classList.remove("form-state");
    windowContent.classList.add("dim-background");
}

function closeModal() {
    modal.classList.add("form-state");
    windowContent.classList.remove("dim-background");
}