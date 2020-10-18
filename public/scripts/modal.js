// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == getModal()) {
    closeModal();
  }
};

function alertSuccess() {
    document.querySelector('#modal-header').innerHTML = `<span class="green">Parabéns!</span>`;
    document.querySelector('#body-alert').innerHTML = `<img src="/images/checkmark.svg" alt="Sucesso" class="icon-success"> <span class="green">Você cadastrou um novo <strong>orfanato</strong>!</span>`;

    openModal();
}

function alertError() {
    document.querySelector('#modal-header').innerHTML = `<span class="red">ERRO</span>`;
    document.querySelector('#body-alert').innerHTML = `<img src="/images/error-page.svg" alt="Erro" class="icon-success"> <span class="red">Tem um erro aí irmão!</span>`;

    openModal();
}

function getModal() {
    return document.getElementById("modalAlert");
}

function closeModal() {
    getModal().style.display = "none";
}

function openModal() {
    getModal().style.display = "flex";
}

function initModal() {
  const htmlModal = `
    <div id="modalAlert" class="modal">

    <div class="modal-content">
    <div class="modal-header">
    <h2 id="modal-header"></h2>
  </div>
  <div class="modal-body" id="body-alert">
  </div>
  <div class="modal-footer">
    <button class="ok-button" onClick="closeModal();" type="button">Ok</button>
  </div>
</div>
  
  </div>
  `;
  document.querySelector("body").insertAdjacentHTML("beforeend", htmlModal);
}

initModal();