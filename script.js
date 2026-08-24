const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', function() {
    const userName = nameInput.value;
    
    if (userName.trim() !== "") {
        greeting.innerText = "Hello, " + userName;
    }
});


const boxes = document.querySelectorAll('.box');

boxes.forEach(function(box) {
    box.addEventListener('click', function() {
        box.style.backgroundColor = box.id;
        
        if (box.id === 'yellow') {
            box.style.color = 'black';
        } else {
            box.style.color = 'white';
        }
    });
});