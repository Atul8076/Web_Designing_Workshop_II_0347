let cartCount = 0;

const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        document.getElementById("cart-count").innerText = cartCount;
        alert("Product Added to Cart");
    });
});