// cart.js

// Function to populate the cart in cart.html
function populateCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = ''; // Clear existing items

    // Loop through items in the user's cart and populate the HTML
    user.cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Price: ${item.price}, Stock: ${item.stock}, Rating: ${item.rating}`;
        cartItems.appendChild(li);
    });
}

// Call populateCart when the page loads
window.addEventListener('load', populateCart);
