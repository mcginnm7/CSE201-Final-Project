function populateCart() {
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';

    user.cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('item-container'); // Add a class for styling purposes
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Remove item from user's cart and update the cart display
            user.removeFromCart(item);
            populateCart();
        });
        
        // Create a div to hold the item information and the remove button
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info'); // Add a class for styling purposes
        itemInfo.textContent = `Name: ${item.name}, Price: ${item.price}, Stock: ${item.stock}, Rating: ${item.rating}`;
        
        // Append the remove button and item information to the list item
        li.appendChild(removeButton);
        li.appendChild(itemInfo);
        
        // Append the list item to the cart
        cartItems.appendChild(li);
    });
}

window.addEventListener('load', populateCart);
