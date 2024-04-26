class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.cart = [];
        this.purchasedItems = [];
    }

    addToCart(item) {
        this.cart.push(item);
    }

    removeFromCart(item) {
        const index = this.cart.indexOf(item);
        if (index !== -1) {
            this.cart.splice(index, 1);
        }
    }

    checkout() {
        // Code to handle checkout process
        // Move items from cart to purchasedItems
        this.purchasedItems.push(...this.cart);
        this.cart = [];
    }
}

// Function to handle form submission for creating an account
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        return; // Exit the function if passwords don't match
    }

    // Create a new instance of the User class
    const newUser = new User(email, password);

    // Store the user object in localStorage
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    // Redirect to homepage.html
    window.location.href = "homepage.html";
});

// Function to handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Create a new instance of the User class
    // OR AUTHENTICATE USER FOR LOGIN
    const loggedInUser = new User(email, password);

    // Store the user object in localStorage
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));

    // Redirect to homepage.html
    window.location.href = "homepage.html";
});
