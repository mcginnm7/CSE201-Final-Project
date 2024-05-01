// Define an array of image objects
const images = [
    { src: 'carpet_1.png', alt: 'Carpet', caption: 'Carpet', stock: 5, index: 1 },
    { src: 'carpet_2.png', alt: 'Carpet', caption: 'Carpet', stock: 3, index: 2 },
    { src: 'fabric_1.png', alt: 'Fabric', caption: 'Fabric', stock: 78, index: 3  },
    { src: 'granite_1.png', alt: 'Granite', caption: 'Granite', stock: 20, index: 4 },
    { src: 'granite_2.png', alt: 'Granite', caption: 'Granite', stock: 45, index: 5 },
    { src: 'grass_1.png', alt: 'Grass', caption: 'Grass', stock: 12, index: 6 },
    { src: 'mountain_1.png', alt: 'Mountain', caption: 'Mountain', stock: 67, index: 7 },
    { src: 'mulch_1.png', alt: 'Mulch', caption: 'Mulch', stock: 34, index: 8 },
    { src: 'plastic_surface_1.png', alt: 'Plastic Surface', caption: 'Plastic Surface', stock: 8, index: 9 },
    { src: 'plastic_wood_1.png', alt: 'Plastic Wood', caption: 'Plastic Wood', stock: 52, index: 10 },
    { src: 'road_1.png', alt: 'Road', caption: 'Road', stock: 97, index: 11 },
    { src: 'rubber_1.png', alt: 'Rubber', caption: 'Rubber', stock: 15, index: 12 },
    { src: 'rubber_2.png', alt: 'Rubber', caption: 'Rubber', stock: 42, index: 13 },
    { src: 'sky_1.png', alt: 'Sky', caption: 'Sky', stock: 25, index: 14 },
    { src: 'wall_1.png', alt: 'Wall', caption: 'Wall', stock: 30, index: 15 },
    { src: 'wood_1.png', alt: 'Wood', caption: 'Wood', stock: 63, index: 16 },
    { src: 'wood_2.png', alt: 'Wood', caption: 'Wood', stock: 19, index: 17 }
];

const cart = [];

function displayImages() {
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = ''; // Clear the gallery before populating it again

    images.forEach(image => {
        let figure = document.createElement('figure');
        let imgContainer = document.createElement('div'); // Container for image, caption, and button
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        let addButton = document.createElement('button');
        let stockDisplay = document.createElement('figcaption'); // Element to display stock

        img.src = `images/${image.src}`;
        img.alt = image.alt;
        img.width = 200;
        img.height = 200;
        figcaption.textContent = image.caption;
        stockDisplay.textContent = `Stock remaining: ${image.stock}`; // Display stock
        stockDisplay.style.color = 'red'; // Style for stock info
        stockDisplay.style.fontSize = '0.8em'; // Smaller text for stock info

        // Set up container style
        imgContainer.style.transition = 'transform 0.3s'; // Smooth transition
        imgContainer.style.position = 'relative'; // Position for absolute button

        // Add event listener for mouseover to enlarge the image and caption
        imgContainer.addEventListener('mouseover', () => {
            imgContainer.style.transform = 'scale(1.2)'; // Enlarge container
            addButton.style.display = 'block'; // Show button
        });

        // Add event listener for mouseout to restore the original size and hide the button
        imgContainer.addEventListener('mouseout', () => {
            imgContainer.style.transform = 'scale(1)'; // Restore original size
            addButton.style.display = 'none'; // Hide button
        });

        // Style for the button
        addButton.textContent = 'Add to Cart';
        addButton.style.position = 'absolute';
        addButton.style.top = '0'; // Position on top
        addButton.style.left = '50%';
        addButton.style.transform = 'translateX(-50%)';
        addButton.style.display = image.stock > 0 ? 'block' : 'none'; // Initially hidden if stock is 0
        addButton.disabled = image.stock === 0; // Disable the button when stock is 0
        addButton.addEventListener('click', () => {
            console.log(`Added ${image.alt} to cart`);
            if (image.stock > 0) {
                image.stock--;
                stockDisplay.textContent = `Stock remaining: ${image.stock}`; // Update stock display
                addButton.disabled = image.stock === 0; // Disable the button when stock reaches 0
                cart.push(image);
            }
        });

        // Append image, caption, and button to container
        imgContainer.appendChild(img);
        imgContainer.appendChild(addButton);
        imgContainer.appendChild(stockDisplay);
        imgContainer.appendChild(figcaption);

        // Append container to figure
        figure.appendChild(imgContainer);

        // Append figure to gallery
        gallery.appendChild(figure);
    });
}

function populateCart() {
    const messageBox = document.getElementById('messageBox');
    messageBox.innerHTML = ''; // Clear previous content in the message box

    // Create title for the message box
    const title = document.createElement('h3'); // Changed to h3
    title.textContent = 'Items in Cart';
    title.style.textAlign = 'center'; // Center align the title
    messageBox.appendChild(title);

    // Check if cart is empty
    if (cart.length === 0) {
        const messageText = document.createElement('p');
        messageText.textContent = "Your cart is empty.";
        messageBox.appendChild(messageText);
    } else {
        // Create a container for the items
        const itemsContainer = document.createElement('div');
        itemsContainer.style.margin = '10px'; // Add some margin for better appearance

        // Add each image details to the message
        cart.forEach((image, index) => {
            // Create a container for each item
            const itemContainer = document.createElement('div');
            itemContainer.style.display = 'flex';
            itemContainer.style.alignItems = 'center';
            itemContainer.style.marginBottom = '10px';

            // Create image element
            const itemImage = document.createElement('img');
            itemImage.src = `images/${image.src}`;
            itemImage.alt = image.alt;
            itemImage.style.width = '50px'; // Set the width as desired
            itemImage.style.marginRight = '10px'; // Add some margin between image and text

            // Create text element for the item
            const itemText = document.createElement('p');
            itemText.textContent = image.caption;

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            deleteButton.style.marginLeft = '10px';
            deleteButton.addEventListener('click', () => {
                // Remove item from cart and re-populate the cart
                cart.splice(index, 1);
                // Restore the stock in the images array
                const imageIndex = images.findIndex(img => img.src === image.src);
                if (imageIndex !== -1) {
                    images[imageIndex].stock++;
                }
                populateCart();
                displayImages(); // Update the stock display in the gallery
            });

            // Append image, text, and delete button to the item container
            itemContainer.appendChild(itemImage);
            itemContainer.appendChild(itemText);
            itemContainer.appendChild(deleteButton);

            // Append item container to the items container
            itemsContainer.appendChild(itemContainer);
        });

        // Append items container to message box
        messageBox.appendChild(itemsContainer);
        
        // Create checkout button
        const checkoutButton = document.createElement('button');
        checkoutButton.textContent = 'Checkout';
        checkoutButton.style.marginTop = '20px'; // Add some top margin
        checkoutButton.style.display = 'block'; // Make the button a block element to ensure it appears below the items
        checkoutButton.style.margin = '0 auto'; // Center the button horizontally
        checkoutButton.addEventListener('click', () => {
            // Clear the cart
            cart.length = 0;
            // Show thank you message
            alert('Thank you for your purchase!');
            // Redirect to the homepage
            window.location.href = 'homepage.html'; // Replace 'homepage.html' with the actual URL of your homepage
        });

        // Append checkout button to the message box
        messageBox.appendChild(checkoutButton);
    }

    // Show the message box
    messageBox.style.display = "block";
}


// Call the function on page load
window.onload = displayImages;

let messageVisible = false; // Variable to track message box visibility

function toggleMessage() {
    if (messageVisible) {
        hideMessage(); // If message is visible, hide it
    } else {
        showMessage(); // If message is hidden, show it
    }
}

function showMessage() {
    populateCart();
    document.getElementById('messageBox').style.display = 'block';
    messageVisible = true; // Update message visibility status
}

function hideMessage() {
    document.getElementById('messageBox').style.display = 'none';
    messageVisible = false; // Update message visibility status
}
