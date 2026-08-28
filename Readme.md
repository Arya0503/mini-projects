# Task: Tailwind Hero Landing Page

## Project Overview
This project is a modern "Project Workspace" hero landing page built entirely with Tailwind CSS using the CDN approach. The primary goal was to master advanced CSS positioning techniques—specifically implementing `relative`, `absolute`, `sticky`, and `fixed` layout structures without writing any custom CSS files.

## How to Run
1. Unzip the project folder.
2. Double-click the `index.html` file to open it in your web browser. 
*(No build tools or command-line installations are required!)*

## Personal Reflection & Learnings
Switching from writing standard CSS in a separate file to using Tailwind utility classes directly in the HTML was a huge mental shift. At first, the HTML looked a bit crowded, but I quickly realized how fast it is to prototype a design when you don't have to jump back and forth between files.

The biggest challenge I faced in this task was the exact requirement for the Call-To-Action buttons. The instructions specifically asked to align the two buttons horizontally using `relative` and `absolute` utilities rather than just a simple Flexbox row. I solved this by creating a wrapper `<div>` with `relative` and a fixed width (`w-[340px]`), and then placing the two buttons inside using `absolute left-0` and `absolute right-0`. It forced me to really understand how absolute elements anchor themselves to the nearest relative parent!

I applied this same logic to the Dashboard Preview section. By giving the large parent container `relative`, I was easily able to use `absolute` and `z-20` on the three smaller information cards to make them float around the main image. Finally, placing the chat widget using `fixed bottom-6 right-6 z-50` was surprisingly easy and locked it perfectly to the viewport window just as expected.