const taskList = [];
      
      function addTask(task) {
        taskList.push(task);
      }
      
      function displayTasks() {
        const taskListElement = document.getElementById("taskList");
        taskListElement.innerHTML = "";
        for (const task of taskList) {
          const taskItem = document.createElement("li");
          taskItem.innerText = task;
          taskListElement.appendChild(taskItem);
        }
      }
      
      const form = document.getElementById("form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskInput = document.getElementById("taskInput");
        addTask(taskInput.value);
        taskInput.value = "";
        displayTasks();
      });
      
      displayTasks();