
let saveTaskButton = document.getElementById("saveTask");
let taskList = document.getElementById("todoList");
let userInput = document.getElementById("userInput");

function addTask(task) {
    let newTask = document.createElement("li");

    newTask.innerText = task;

    taskList.appendChild(newTask)
}

saveTaskButton.addEventListener("click", () => {
    addTask(userInput.value);
    userInput.value = "";
})