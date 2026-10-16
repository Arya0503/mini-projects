emailjs.init("RHlehMJdkT_QVHQmb");

const services = [
  { id: 1, name: "Dry Cleaning", price: 200, icon: "fa-shirt" },
  { id: 2, name: "Wash & Fold", price: 100, icon: "fa-socks" },
  { id: 3, name: "Ironing", price: 30, icon: "fa-temperature-empty" },
  { id: 4, name: "Stain Removal", price: 500, icon: "fa-droplet-slash" },
  { id: 5, name: "Leather & Suede Cleaning", price: 999, icon: "fa-suitcase" },
  {
    id: 6,
    name: "Wedding Dress Cleaning",
    price: 2800,
    icon: "fa-person-dress",
  },
];

let cart = [];

const servicesContainer = document.getElementById("services-container");
const cartBody = document.getElementById("cart-body");
const emptyCartMsg = document.getElementById("empty-cart-msg");
const cartTable = document.getElementById("cart-table");
const totalPriceEl = document.getElementById("total-price");
const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");
const scrollBtn = document.getElementById("scroll-to-book");

scrollBtn.addEventListener("click", () => {
  document
    .getElementById("booking-section")
    .scrollIntoView({ behavior: "smooth" });
});

function renderServices() {
  servicesContainer.innerHTML = "";
  services.forEach((service) => {
    const isInCart = cart.some((item) => item.id === service.id);
    const div = document.createElement("div");
    div.className = "service-item";
    div.innerHTML = `
            <div class="service-info">
                <i class="fa-solid ${service.icon}"></i>
                <span>${service.name} <span class="service-price">₹${service.price.toFixed(2)}</span></span>
            </div>
            <button class="${isInCart ? "remove-btn" : "add-btn"}" onclick="toggleCart(${service.id})">
                ${isInCart ? "Remove Item" : "Add Item"} <i class="fa-solid ${isInCart ? "fa-minus" : "fa-plus"}"></i>
            </button>
        `;
    servicesContainer.appendChild(div);
  });
}

window.toggleCart = function (id) {
  const existsIndex = cart.findIndex((item) => item.id === id);
  if (existsIndex > -1) {
    cart.splice(existsIndex, 1);
  } else {
    const service = services.find((item) => item.id === id);
    cart.push(service);
  }
  renderServices();
  renderCart();
};

function renderCart() {
  cartBody.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    emptyCartMsg.style.display = "block";
    cartTable.style.display = "none";
  } else {
    emptyCartMsg.style.display = "none";
    cartTable.style.display = "table";

    cart.forEach((item, index) => {
      total += item.price;
      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>₹${item.price.toFixed(2)}</td>
            `;
      cartBody.appendChild(tr);
    });
  }
  totalPriceEl.innerText = `₹ ${total.toFixed(2)}`;
}

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    formMessage.style.color = "#ef4444";
    formMessage.innerText = "Add the items to the cart to book";
    return;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const orderDetails = cart
    .map((item) => `${item.name} (₹${item.price})`)
    .join(", ");

  const templateParams = {
    from_name: name,
    reply_to: email,
    phone_number: phone,
    order_details: orderDetails,
    total_amount: totalPriceEl.innerText,
  };

  emailjs.send("service_mn5775q", "template_dck6mhd", templateParams).then(
    () => {
      formMessage.style.color = "#10b981";
      formMessage.innerText =
        "Thank you For Booking the Service We will get back to you soon!";
      cart = [];
      bookingForm.reset();
      renderServices();
      renderCart();
    },
    (error) => {
      formMessage.style.color = "#ef4444";
      formMessage.innerText = "Failed to send email. Please try again.";
    },
  );
});

renderServices();
renderCart();
