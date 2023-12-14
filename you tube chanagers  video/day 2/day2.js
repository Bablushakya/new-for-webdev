var tasks = []; // Array to store tasks

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        // Create a task object
        var task = {
            id: tasks.length + 1,
            content: taskInput.value
        };

        // Add task to the array
        tasks.push(task);

        // Create a task element
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = task.content;

        // Add a click event listener to delete the task
        taskElement.onclick = function () {
            deleteTask(task.id);
        };

        // Append the task element to the task list
        taskList.appendChild(taskElement);

        // Clear the input field
        taskInput.value = "";
    }
}

function deleteTask(id) {
    // Remove the task from the array
    tasks = tasks.filter(task => task.id !== id);

    // Remove all tasks from the DOM
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    // Re-render the tasks in the DOM
    tasks.forEach(task => {
        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = task.content;
        taskElement.onclick = function () {
            deleteTask(task.id);
        };
        taskList.appendChild(taskElement);
    });
}
