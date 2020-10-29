const mural = document.getElementById('mural');
const cards = JSON.parse(localStorage.getItem('cards')) || [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createCard() {
  const titulo = document.getElementById('exampleInputEmail1');
  const conteudo = document.getElementById('exampleInputPassword1');
  const avatar = `https://www.gravatar.com/avatar/${getRandomInt(
    1,
    500
  )}?d=monsterid`;

  const newCard = {
    title: titulo.value,
    data: conteudo.value,
    avatar: avatar,
  };

  addCard(newCard);
  titulo.value = '';
  conteudo.value = '';
}

function addCard(newCard) {
  const html = ` <div class="col 12 col-sm-3 col-lg3 mb-5" id=${cards.length}">
  <div class="card">
  <img src="${newCard.avatar}" class="card-img-top" alt ="...">
  
    <div class="card-body">
      <h5 class="card-title">${newCard.title}</h5>
      <p class="card-text">${newCard.data}</p>
            <a href="#" class="btn btn-danger" onclick="deleteCard(event)">Excluir</a>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#editCard"
        onclick="onclick="editCard(event)"
      >
        EDIT
      </button>
    </div>
  </div>
  </div>
  
`;
  cards.push(newCard);
  mural.innerHTML += html;
  saveCards();
}

function deleteCard(event) {
  const cardRemove = event.path[3];
  cards.splice(cardRemove.dataset.position, 1);
  cardRemove.remove();
  saveCards();
  showCards();
}

function editCard() {
  const titulo = document.getElementById('edit_ExampleInputEmail1');
  const conteudo = document.getElementById('edit_ExampleInputPassword1');
  const inputPosition = document.getElementById('editPostion');
  const position = cardEdit.dataset.position;
  const cardEdit = event.path[3];

  inputPosition.value = position;

  titulo.value = cards[position].title;
  conteudo.value = cards[position].data;
}

function saveCards() {
  localStorage.setItem('cards', JSON.stringify(cards));
}

function updateCards() {
  const titulo = document.getElementById('edit_ExampleInputEmail1');
  const conteudo = document.getElementById('edit_ExampleInputPassword1');
  const inputPosition = document.getElementById('editPostion');
  card[inputPosition.value].title = titulo.value;
  card[inputPosition.value].title = conteudo.value;

  showCards();
  saveCards();
}

function showCards() {
  mural.innerHTML = '';

  for (const card in cards) {
    const html = ` <div class="col 12 col-sm-3 col-lg3 mb-5" data-position="${card}">
  <div class="card">
  <img src="${cards[card].avatar}" class="card-img-top" alt ="...">
  
    <div class="card-body">
      <h5 class="card-title">${cards[card].title}</h5>
      <p class="card-text">${cards[card].data}</p>
      
      <a href="#" class="btn btn-danger" onclick="deleteCard(event)">Excluir</a>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#editCard"
        onclick="editCard(event)"
      >
        EDIT
      </button>
    </div>
  </div>
  </div>
  
`;

    mural.innerHTML += html;
  }
}

// function clearStorage(){
//   localStorage.clear();
//   cards.length:
// }

showCards();
