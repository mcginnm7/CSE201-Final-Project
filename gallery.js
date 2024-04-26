// Define an array of image objects
const images = [
    { src: 'carpet_1.png', alt: 'Carpet', caption: 'Carpet' },
    { src: 'carpet_2.png', alt: 'Carpet', caption: 'Carpet' },
    { src: 'fabric_1.png', alt: 'Fabric', caption: 'Fabric' },
    { src: 'granite_1.png', alt: 'Granite', caption: 'Granite' },
    { src: 'granite_2.png', alt: 'Granite', caption: 'Granite' },
    { src: 'grass_1.png', alt: 'Grass', caption: 'Grass' },
    { src: 'mountain_1.png', alt: 'Mountain', caption: 'Mountain' },
    { src: 'mulch_1.png', alt: 'Mulch', caption: 'Mulch' },
    { src: 'plastic_surface_1.png', alt: 'Plastic Surface', caption: 'Plastic Surface' },
    { src: 'plastic_wood_1.png', alt: 'Plastic Wood', caption: 'Plastic Wood' },
    { src: 'road_1.png', alt: 'Road', caption: 'Road' },
    { src: 'rubber_1.png', alt: 'Rubber', caption: 'Rubber' },
    { src: 'rubber_2.png', alt: 'Rubber', caption: 'Rubber' },
    { src: 'sky_1.png', alt: 'Sky', caption: 'Sky' },
    { src: 'wall_1.png', alt: 'Wall', caption: 'Wall' },
    { src: 'wood_1.png', alt: 'Wood', caption: 'Wood' },
    { src: 'wood_2.png', alt: 'Wood', caption: 'Wood' }
];


// Function to display images
function displayImages() {
    const gallery = document.getElementById('imageGallery');
    images.forEach(image => {
        let figure = document.createElement('figure');
        let imgContainer = document.createElement('div'); // Container for image and caption
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');

        img.src = `images/${image.src}`;
        img.alt = image.alt;
        img.width = 200;
        img.height = 200;
        figcaption.textContent = image.caption;

        // Set up container style
        imgContainer.style.transition = 'transform 0.3s'; // Smooth transition

        // Add event listener for mouseover to enlarge the image and caption
        imgContainer.addEventListener('mouseover', () => {
            imgContainer.style.transform = 'scale(1.2)'; // Enlarge container
        });

        // Add event listener for mouseout to restore the original size
        imgContainer.addEventListener('mouseout', () => {
            imgContainer.style.transform = 'scale(1)'; // Restore original size
        });

        // Add event listener for click to handle click behavior
        imgContainer.addEventListener('click', () => {
            // Example: Open a modal or navigate to a new page with full-size image
            console.log(`Clicked on ${image.alt}`);
        });

        // Append image and caption to container
        imgContainer.appendChild(img);
        imgContainer.appendChild(figcaption);
        
        // Append container to figure
        figure.appendChild(imgContainer);
        
        // Append figure to gallery
        gallery.appendChild(figure);
    });
}

// Call the function on page load
window.onload = displayImages;
