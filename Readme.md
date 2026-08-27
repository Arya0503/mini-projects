# Task 23: Greenwood Library Website (Tailwind CSS)

## Project Overview
This task is a comprehensive implementation of a modern, editorial-style landing page for the fictional Greenwood Public Library. The primary objective was to build complex, responsive layouts and fluid micro-interactions exclusively using native Tailwind CSS utility classes via the CDN, without relying on external UI frameworks or writing custom CSS files.

## How to Run
1. Unzip the project folder.
2. Open `index.html` directly in your preferred web browser. 

## Personal Reflection & Learnings
This task was an incredible exercise in pushing utility-first CSS to its limits. Building the **Asymmetrical Bento Grid** in the "Why Greenwood" section was highly rewarding. By setting a base `grid-cols-3` for desktop and using `md:col-span-1` (or adjusting spans as needed), I was able to create that popular masonry-style look entirely inline. 

Additionally, I learned how to replicate editorial newspaper styling without writing custom CSS by leveraging Tailwind's native column utilities (`columns-1 sm:columns-2`) in the "About" section text block. 

For the animations and hover states, I focused heavily on the `group` and `group-hover` modifiers to trigger image scaling (`group-hover:scale-105`) from parent containers. One of my favorite subtle touches was using `grayscale hover:grayscale-0 transition-all duration-500` on the testimonial avatar to create a smooth, modern color-reveal effect. Building this strictly with Tailwind forced me to deeply understand the framework's layout engine.