(() => {
  const refs = {
    openModalBtn: document.querySelector(".dataModalOpen"),
    closeModalBtn: document.querySelector(".dataModalClose"),
    modal: document.querySelector(".dataModal"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("isHidden");
  }
})();
