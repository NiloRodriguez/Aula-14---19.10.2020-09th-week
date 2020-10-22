const mural = document.getElementById("mural");

function createCard() {
  const titulo = document.getElementById("exampleInputEmail1");
  const conteudo = document.getElementById("exampleInputPassword1");

  //FORÇAR a PREENCHER os campos

  if (titulo.value.length < 3 || titulo.value == null) {
    alert("Titulo deve conter no mínimo 03 caracteres");
    return;
  }

  if (!conteudo.value) {
    alert("Preencha o comentário");
    return;
  }

  //criar o card no CONTAINER e LIMPAR os INPUTS
  const newCard = `<div class="col-sm">
  <div class="card w-50">
    <div class="card-body">
      <h5 class="card-title">${titulo.value}</h5>
      <p class="card-text">${conteudo.value}</p>
      <a href="#" class="btn btn-primary">Editar</a>
      <a href="#" class="btn btn-danger">Excluir</a>
    </div>
  </div>
</div>`;

  addCard(newCard);
  clearInput(titulo, conteudo);
}

function clearInput(title, data) {
  title.value = "";
  data.value = "";
}

function removeCard() {}

function addCard(newCard) {
  mural.innerHTML += newCard;
}
