let cartCount = 0;
let totalAmount = 0;

function addToCart(price) {
    cartCount++;
    totalAmount += price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total").innerText = totalAmount;
}

function removeFromCart() {
    if (cartCount > 0) {
        cartCount--;
        totalAmount -= 500; // default removal price

        document.getElementById("cart-count").innerText = cartCount;
        document.getElementById("total").innerText = totalAmount;
    } else {
        alert("Cart is empty!");
    }
}

