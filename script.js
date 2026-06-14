function changeText() {
    document.getElementById("title").innerText = "Text changed!";
}

function showName() {
    let name = document.getElementById("nameinput").value;
    document.getElementById("output").innerHTML = "Hello, " + name + "!";
}

function increment(){
    let count = document.getElementById("num").value;
    count++;
    document.getElementById("result").innerText = count;
}

function decrement(){
    let count = document.getElementById("num").value;
    count--;
    document.getElementById("result").innerText = count;
}

function addTask()
{
    let task = document.getElementById("taskInput").value;
    let listItem = document.createElement("li");
    listItem.innerText = task;
    document.getElementById("List").appendChild(listItem);
}
function searchTask() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let tasks = document.getElementById("List").getElementsByTagName("li");
    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear previous search results
}
function updateTask() {
    let taskIndex = document.getElementById("taskIndex").value;
    let newTask = document.getElementById("newTaskInput").value;
    let tasks = document.getElementById("List").getElementsByTagName("li");
    document.getElementById("updateResult").innerHTML = ""; // Clear previous update result
}
function deleteTask() {
    let taskIndex = document.getElementById("deleteTaskIndex").value;
    let tasks = document.getElementById("List").getElementsByTagName("li");
    document.getElementById("deleteResult").innerHTML = ""; // Clear previous delete result
}
function filterTasks() {
    let filterInput = document.getElementById("filterInput").value.toLowerCase();
    let tasks = document.getElementById("List").getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++){
        let taskText = tasks[i].innerText.toLowerCase();
        if (taskText.includes(filterInput)) {
            tasks[i].style.display = "block";
        } else {
            tasks[i].style.display = "none";
        }
        document.getElementById("filterResult").innerHTML = ""; // Clear previous filter result
    }
}
