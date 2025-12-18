// Simple live search filter
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


//button

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}
