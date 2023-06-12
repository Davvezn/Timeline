function showCard(cardIndex) {
    // Hide all cards
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  
    // Show the selected card
    let selectedCard = document.getElementById("card-" + (cardIndex + 1));
    selectedCard.style.display = "block";
  }

  let currentCardIndex = 0; // Track the currently displayed card index

function showCard(cardIndex) {
    // Hide the currently displayed card
    let currentCard = document.getElementById("card-" + (currentCardIndex + 1));
    currentCard.style.display = "none";
  
    // Show the selected card
    let selectedCard = document.getElementById("card-" + (cardIndex + 1));
    selectedCard.style.display = "block";
  
    currentCardIndex = cardIndex; // Update the currently displayed card index
}
  
  