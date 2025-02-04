// @todo: Темплейт карточки
const cardTemplateContent = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardsWrapper = document.querySelector(".places__list");

// @todo: Функция создания карточки
const generateCard = (name, imageUrl, onRemove) => {
  const newCard = cardTemplateContent.cloneNode(true);
  const removeBtn = newCard.querySelector(".card__delete-button");

  newCard.querySelector(".card__title").textContent = name;
  const imageElement = newCard.querySelector(".card__image");
  imageElement.src = imageUrl;
  imageElement.alt = name;

  removeBtn.addEventListener("click", onRemove);

  cardsWrapper.append(newCard);
};

// @todo: Функция удаления карточки
const removeCard = (event) => {
  const cardToDelete = event.target.closest(".places__item.card");
  if (cardToDelete) {
    cardToDelete.remove();
  }
};

// @todo: Вывести карточки на страницу
initialCards.forEach(({ name, link }) => generateCard(name, link, removeCard));
