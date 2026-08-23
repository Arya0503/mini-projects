const students = [
    { name: "Salmaan Ahmed", marks: "38%", class: "3rd", address: "India" },
    { name: "Riya Sharma", marks: "85%", class: "10th", address: "123, ABC Colony, Delhi" },
    { name: "Rohan Patel", marks: "70%", class: "12th", address: "456, XYZ Street, Mumbai" },
    { name: "Priya Singh", marks: "95%", class: "8th", address: "789, PQR Nagar, Bangalore" },
    { name: "Ankit Gupta", marks: "60%", class: "9th", address: "101, LMN Road, Kolkata" },
    { name: "Neha Verma", marks: "80%", class: "11th", address: "222, DEF Avenue, Chennai" }
];

const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

function renderStudents(studentArray) {
    // map() loops through the array and returns a block of HTML for each student
    const htmlBlocks = studentArray.map(function(student) {
        return `
            <div class="card">
                <h3>Student Name: ${student.name}</h3>
                <p>Marks: ${student.marks}</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
    });

    container.innerHTML = htmlBlocks.join("");
}

renderStudents(students);

searchInput.addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredStudents = students.filter(function(student) {
        const studentNameLower = student.name.toLowerCase();
        return studentNameLower.includes(searchTerm);
    });

    renderStudents(filteredStudents);
});