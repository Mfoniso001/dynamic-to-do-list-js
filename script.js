document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create the list item
        const li = document.createElement('li');

        // Create a text span to hold the task description
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add event to remove the task
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        // Append text and button to the list item
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
<<<<<<< HEAD

});

=======
>>>>>>> 40821b9 (New commit)
