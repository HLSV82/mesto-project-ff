// @todo: Темплейт карточки 
const cardTemplateContent = document.querySelector("#card-template").content.querySelector(".card");

// @todo: DOM узлы 
const cardsWrapper = document.querySelector(".places__list");

// @todo: Функция создания карточки 
const generateCard = (name, imageUrl, onRemove) => { 
  const cardElement = cardTemplateContent.cloneNode(true); 

  const removeBtn = cardElement.querySelector(".card__delete-button");
  const titleElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");
  
  titleElement.textContent = name;
  imageElement.src = imageUrl;
  imageElement.alt = name;

  removeBtn.addEventListener("click", onRemove);
  cardsWrapper.append(cardElement);

  return cardElement; 
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
