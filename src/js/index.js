/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#sort").onclick = () => {
    let currentDraws = parseInt(document.querySelector("#nbrOfDraws").value);
    let unsortedCards = getUnsortedCards(currentDraws);
    console.log(unsortedCards);
  };

  let suit = () => {
    let randomSuit = Math.floor(Math.random() * 4);
    let existingSuits = ["&;", "&;", "&;", "&;"];
  };

  let card = () => {
    let randomCard = Math.floor(Math.random() * 12);
    let existingCards = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    return existingCards[randomCard];
  };

  let getUnsortedCards = draw => {
    console.log(draw);
    let i = 0;
    let unsortedCards = [];

    while (i < draw) {
      let cardSS = card();
      unsortedCards.push(cardSS);
      i++;
    }

    return unsortedCards;
  };
};
