// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const popup = document.getElementById('cart-popup');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h3').innerText;
      
      // Change popup text dynamically
      popup.textContent = `${productName} added to cart!`;

      // Show popup
      popup.classList.add('show');

      // Hide after 2 seconds
      setTimeout(() => {
        popup.classList.remove('show');
      }, 2000);
    });
  });
});


//button

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}