export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // para fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
