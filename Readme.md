# Task 25: CSS Mini Project - Multi-Page Sneaker Store

## Project Overview
This project is an e-commerce layout for the "Thala 7 Sneaker Store." It contains four distinct, linked HTML pages: a Landing Page, a Product Page, a Shopping Cart, and a Checkout Page.

## How to Run
1. Unzip the project folder.
2. Double-click `index.html` to start on the homepage.
3. Use the top navigation bar to click between the different pages naturally, or use the buttons like "Shop Now" and "Add to Cart" to flow through the shopping experience.

## Personal Reflection
For this project, I chose to separate the views into 4 distinct HTML files (`index.html`, `product.html`, `cart.html`, and `checkout.html`). I felt this was the most beginner-friendly and realistic way to practice building a multi-page site, as it mimics how traditional websites route users between different pages.

The biggest challenge and learning opportunity here was keeping my CSS clean and reusable (DRY methodology). Since all four HTML files point to a single `style.css` file, I had to ensure my class names were consistent. For example, I created a `.split-layout` class using simple Flexbox logic. I was then able to reuse that exact same class on the Product page (to split the image and details), the Cart page (to split the list and totals), and the Checkout page (to split the form and order summary). 

Using the `<a>` tag to link between my local HTML files instead of just scrolling down a single page made the project feel much more like a real, functional e-commerce store!