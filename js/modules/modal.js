export default function initModal() {
  const openButton = document.querySelector('[data-modal="abrir"]');
  const closeButton = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openButton && closeButton && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
      if (event.target === this) {  
        toggleModal(event);
      }
    }

    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
};