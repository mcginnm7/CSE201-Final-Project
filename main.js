const fs = require('fs');
const Item = require('./item');

// Function to read CSV file and convert it to array of Item instances
function csvToItems(filePath, delimiter=',') {
    // Read the CSV file
    const fileData = fs.readFileSync(filePath, 'utf8');
    // Split the file data into rows
    const rows = fileData.split('\n');
    // Initialize an empty array to store the items
    const items = [];

    // Loop through each row, starting from index 1 to skip the header row
    for (let i = 1; i < rows.length - 1; i++) {
        const row = rows[i];
        // Split the row into individual values based on the delimiter
        const [id, name, price, stock, rating, src] = row.split(delimiter);
        // Create a new Item instance and push it to the items array
        const newItem = new Item(name, parseInt(price), parseInt(stock), parseInt(rating), src);
        items.push(newItem);
    }

    console.log("Example Items:");
    console.log("===========================");

    // Print each item and their attributes
    items.forEach(item => {
        console.log(`Name: ${item.name}`);
        console.log(`Price: ${item.price}`);
        console.log(`Stock: ${item.stock}`);
        console.log(`Rating: ${item.rating}`);
        console.log(`Source: ${item.src}`);
        console.log("---------------------------");
    });

    return items;
}

// File path to the CSV file
const csvFilePath = 'data.csv';

// Read data from CSV file and convert it to array of Item instances
const items = csvToItems(csvFilePath);
