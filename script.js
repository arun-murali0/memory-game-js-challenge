const displayResult = document.getElementById("result");
const gridContainer = document.getElementById("gridContainer");

// data
const cardArray = [
  {
    name: "fires",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "fires",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];

const sortedCard = cardArray.sort(() => 0.5 - Math.random());
let choosenCards = [];
let choosenId = [];
let cardWon = [];

function createCard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("dataId", i);
    gridContainer.append(card);
    gridContainer.addEventListener("click", flipCard);
  }
}
createCard();

function checkMatch() {
  const card = document.querySelectorAll("img");
  if (choosenId[0] == choosenId[1]) {
    alert("You have clicked same card");
    card[choosenId[0]].setAttribute("src", "./images/blank.png");
    card[choosenId[1]].setAttribute("src", "./images/blank.png");
  }
  if (choosenCards[0] == choosenCards[1]) {
    alert("You Found a Match");
    card[choosenId[0]].setAttribute("src", "./images/white.png");
    card[choosenId[1]].setAttribute("src", "./images/white.png");
    card[choosenId[0]].removeEventListener("click", flipCard);
    card[choosenId[1]].removeEventListener("click", flipCard);
    cardWon.push(choosenCards);
  } else {
    card[choosenId[0]].setAttribute("src", "./images/blank.png");
    card[choosenId[1]].setAttribute("src", "./images/blank.png");
    alert("sorry try Again");
  }
  choosenCards = [];
  choosenId = [];

  displayResult.textContent = cardWon.length;

  if (cardWon.length == cardArray.length / 2) {
    return (displayResult.textContent = "Congarts you found them all");
  }
}

function flipCard(e) {
  const clickedCard = e.target;
  const cardId = clickedCard.getAttribute("dataId");
  choosenCards.push(cardArray[cardId].name);
  clickedCard.setAttribute("src", cardArray[cardId].img);
  choosenId.push(cardId);
  if (choosenCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
