const modalButton = document.querySelector(".contacts-button");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const modalClose = modal.querySelector(".feedback-close-button");
const modalForm = modal.querySelector(".feedback-form");
const modalName = modal.querySelector("[name=name]");
const modalEmail = modal.querySelector("[name=email]");
const modalMessage = modal.querySelector("[name=feedback-message]");
let isStorageSupport = true;
let storage = "";

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modalOverlay.classList.add("overlay-show");

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalEmail.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalName.value);
      localStorage.setItem("email", modalEmail.value);
    }
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  modalOverlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      modalOverlay.classList.remove("overlay-show");
    }
  }
});
