export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.btnAbrir = document.querySelector(botaoAbrir);
    this.btnFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    //bind this ao callback para
    //fazer referencia ao objeto
    //da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  //adiciona evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //abre/fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  //fecha modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
    // aqui ele só fecha o modal se o target do clique for igual ao "this", nesse caso o this é o proprio container-modal, que é a section da pagina
  }

  //adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.btnAbrir.addEventListener("click", this.eventToggleModal);
    this.btnFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
