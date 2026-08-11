export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
    // aqui ele só fecha o modal se o target do clique for igual ao "this", nesse caso o this é o proprio container-modal, que é a section da pagina
  }

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  if (btnAbrir && btnFechar && containerModal) {
    //simplificando com toggle

    // function abrirModal(event) {
    //   event.preventDefault();
    //   containerModal.classList.add("ativo");
    // }

    // function fecharModal(event) {
    //   event.preventDefault();
    //   containerModal.classList.remove("ativo");
    // }

    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
