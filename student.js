
function updateCount(){

    let total =
        document.querySelectorAll(".student-card").length;

    document.getElementById("count").textContent =
        "Total Students: " + total;
}
function addStudent() {
    //get values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    //validation
    if (name === "" || age === "" || course === "") {
        alert("Please fill in all fields.");
    }
    //create div card for result
    let card=document.createElement("div");
    //create classList
    card.classList.add("student-card");
    //add content
    card.innerHTML = 
    `<h3>${name}</h3>
    <p>Age: ${age}</p>
    <p>Course: ${course}</p>
    <button class="edit-btn">Edit</button>

    <button class="delete-button">Delete</button>`;

    //delete button
    let deleteBtn = card.querySelector(".delete-button");
    deleteBtn.onclick = function() {
        card.remove();
        updateCount();
    }
    let editBtn =
    card.querySelector(".edit-btn");

editBtn.onclick = function () {

    let newName =
        prompt("Enter new name", name);

    let newAge =
        prompt("Enter new age", age);

    let newCourse =
        prompt("Enter new course", course);

    if(newName && newAge && newCourse){

        card.querySelector("h3").textContent =
            newName;

        card.querySelectorAll("p")[0].textContent =
            "Age: " + newAge;

        card.querySelectorAll("p")[1].textContent =
            "Course: " + newCourse;
    }
};
    //Add page
    document.getElementById("studentList").appendChild(card);
    updateCount();

    //clear fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

}
function searchStudent(){

    let input =
        document.getElementById("search")
        .value
        .toLowerCase();

    let students =
        document.querySelectorAll(".student-card");

    students.forEach(function(card){

        let name =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        if(name.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
}