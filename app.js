function addTask() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    // Basic input validation to prevent XSS
    if (taskValue) {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskValue; // Use textContent to prevent XSS
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task!');
    }
}