const mural = document.getElementById("mural");
const cards = JSON.parse(localStorage.getItem("cards")) || [];

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

//limpa os campos de input
function clearInput(title, data) {
  title.value = "";
  data.value = "";
}

//Salva as cards no LOCAL STORAGE
function saveCards() {
  localStorage.setItem("cards", JSON.stringify(cards));
}

//mostra as CARTAS
function showCards() {
  for (const card of cards) {
    mural.innerHTML += card;
  }
}

//ADICIONA as cards no mural e SALVA NO LOCAL STORAGE
function addCard(newCard) {
  cards.push(newCard);
  mural.innerHTML += newCard;
  saveCards();
}

showCards();
