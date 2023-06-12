function showCard(cardIndex) {
    // Hide em goofy mfs
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  
    // bro be showing the selected ahh cards
    let selectedCard = document.getElementById("card-" + (cardIndex + 1));
    selectedCard.style.display = "block";
  }

  let currentCardIndex = 0; // tracks the mfs

function showCard(cardIndex) {
    // Hide the currently displayed card
    let currentCard = document.getElementById("card-" + (currentCardIndex + 1));
    currentCard.style.display = "none";
  
    // bro be peaking
    let selectedCard = document.getElementById("card-" + (cardIndex + 1));
    selectedCard.style.display = "block";
  
    currentCardIndex = cardIndex; // the peaker be peaking too long
}

