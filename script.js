// 1. Smooth Scroll to Booking Section
document.getElementById('scrollToBooking').addEventListener('click', () => {
    document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
});

// 2. Application State for Cart
let cart = [];
let totalAmount = 0;

const emptyCartMsg = document.getElementById('empty-cart-msg');
const cartItemsList = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');

// 3. Handle Add/Remove Buttons in Services List
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));

        // Check current state of button to toggle Add/Remove
        if (this.innerText.includes("Add")) {
            // Add to cart
            cart.push({ name, price });
            totalAmount += price;
            
            // Transform button to "Remove"
            this.innerText = "Remove item ⊖";
            this.classList.replace('add-btn', 'remove-btn');
        } else {
            // Remove from cart
            cart = cart.filter(item => item.name !== name);
            totalAmount -= price;
            
            // Transform button back to "Add"
            this.innerText = "Add item ⊕";
            this.classList.replace('remove-btn', 'add-btn');
        }
        
        updateCartUI();
    });
});

// 4. Update the UI whenever state changes
function updateCartUI() {
    cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCartMsg.classList.remove('hidden');
    } else {
        emptyCartMsg.classList.add('hidden');
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${index + 1}. ${item.name}</span> <span>₹${item.price.toFixed(2)}</span>`;
            cartItemsList.appendChild(li);
        });
    }
    
    totalPriceDisplay.innerText = `₹ ${totalAmount.toFixed(2)}`;
}

// 5. Handle Form Submission & EmailJS
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from refreshing
    
    if (cart.length === 0) {
        alert("Please add at least one service to your cart before booking.");
        return;
    }

    // Parameters matching the fields in your EmailJS template
    const templateParams = {
        to_name: document.getElementById('user_name').value,
        to_email: document.getElementById('user_email').value,
        order_total: totalAmount,
        order_items: cart.map(item => item.name).join(", ")
    };

    emailjs.send('service_mn5775q', 'template_dck6mhd', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('success-msg').classList.remove('hidden');
            document.getElementById('booking-form').reset(); // Clear form
        }, function(error) {
            console.log('FAILED...', error);
            alert("There was an error sending the confirmation email.");
        });
});