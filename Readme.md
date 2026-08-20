# Task 9: Laundry Services Mobile Hamburger Menu

## Project Overview
This task required building a mobile hamburger menu for our Laundry web app. The major constraint was that we could not use any JavaScript to handle the click event to open the menu. Instead, I had to use purely HTML structure and CSS pseudo-classes.

## How to Run
1. Unzip the folder.
2. Open `index.html` in your browser.
3. **Important:** Right-click, select "Inspect", and toggle the "Device Toolbar" (or resize your browser window) to see the mobile view. The hamburger icon is hidden on desktop!
4. Click the hamburger icon to see the black menu slide in on the right.

## Personal Reflection
I will admit, when I first read the instructions I was pretty confused about how to make a menu open on click without using an `onclick` JavaScript function. 

The hint in the instructions is what made it click for me. I learned that you can use the `:focus` state of a `<button>` element to trigger a style change on a sibling element. By putting the `.menu-list` div immediately after the `.hamburger-btn` in my HTML, I was able to use the CSS sibling selector (`~`). So when you click the button, `.hamburger-btn:focus ~ .menu-list` forces the menu to switch from `display: none` to `display: block`. It feels like a really cool CSS hack!