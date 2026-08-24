const services = [
    { name: "Dry Cleaning", price: 200, img: "https://images.unsplash.com/photo-1582735689146-2b1d609bd867?w=500" },
    { name: "Leather & Suede Cleaning", price: 999, img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500" },
    { name: "Ironing", price: 30, img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=500" },
    { name: "Wash And Fold", price: 140, img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=500" },
    { name: "Stain Removal", price: 500, img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" }
];

let currentIndex = 0;
let cart = [];
let total = 0;

const serviceCard = document.getElementById("serviceCard");
const endMessage = document.getElementById("endMessage");
const serviceImg = document.getElementById("serviceImg");
const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");
const skipBtn = document.getElementById("skipBtn");
const addBtn = document.getElementById("addBtn");

const emptyCart = document.getElementById("emptyCart");
const cartList = document.getElementById("cartList");
const totalAmount = document.getElementById("totalAmount");
const bookingForm = document.getElementById("bookingForm");
const successMsg = document.getElementById("successMsg");

function renderService() {
    if (currentIndex < services.length) {
        const currentService = services[currentIndex];
        serviceImg.src = currentService.img;
        serviceName.innerText = currentService.name;
        servicePrice.innerText = `₹${currentService.price.toFixed(2)}`;
    } else {
        serviceCard.classList.add("hidden");
        endMessage.classList.remove("hidden");
    }
}

function updateCartUI() {
    if (cart.length > 0) {
        emptyCart.classList.add("hidden");
    }

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${index + 1}. ${item.name}</span> <span>₹${item.price.toFixed(2)}</span>`;
        cartList.appendChild(li);
    });

    totalAmount.innerText = `₹ ${total.toFixed(2)}`;
}

skipBtn.addEventListener("click", () => {
    currentIndex++;
    renderService();
});

addBtn.addEventListener("click", () => {
    const currentService = services[currentIndex];
    
    cart.push(currentService);
    total += currentService.price;
    
    updateCartUI();
    currentIndex++;
    renderService();
});

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    successMsg.classList.remove("hidden");
    
    setTimeout(() => {
        bookingForm.reset();
        successMsg.classList.add("hidden");
    }, 3000);
});

renderService();