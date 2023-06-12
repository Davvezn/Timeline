function showCard(cardIndex) {
    // Hide all cards
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
  
    // Show the selected card
    var selectedCard = document.getElementById("card-" + (cardIndex + 1));
    selectedCard.style.display = "block";
  }
  