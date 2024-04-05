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
