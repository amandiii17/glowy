// 📌 UPDATE CART TOTAL FUNCTION
function updateCartTotal() {
    let cartItems = document.querySelectorAll(".cart-item");
    let subtotal = 0;

    cartItems.forEach(item => {
        // Remove "Rs" text
        let price = parseFloat(item.querySelector(".cart-price").innerText.replace("Rs", "").trim());
        let qty = parseInt(item.querySelector("input").value);

        subtotal += price * qty;
    });

    // Update Subtotal
    document.querySelector(".cart-summary p span").innerText = "Rs " + subtotal.toFixed(2);

    // Shipping (You can change this)
    let shipping = 500; // Example Rs 500
    document.querySelectorAll(".cart-summary p span")[1].innerText = "Rs " + shipping.toFixed(2);

    // Total
    let total = subtotal + shipping;
    document.querySelector(".total span").innerText = "Rs " + total.toFixed(2);
}

// 📌 QUANTITY CHANGE
document.querySelectorAll(".cart-qty input").forEach(input => {
    input.addEventListener("change", () => {
        if (input.value < 1) input.value = 1;
        updateCartTotal();
    });
});

// 📌 REMOVE ITEM
document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
        updateCartTotal();
    });
});

// 📌 INITIAL CALCULATION
updateCartTotal();


//button

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

