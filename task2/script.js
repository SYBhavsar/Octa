

document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    const priority = document.querySelector('input[name="priority"]:checked');

    if (todoText !== "" && priority !== null) {
      const todoItem = createTodoItem(todoText, priority.value);
      insertSorted(todoList, todoItem);
      todoInput.value = "";
      priority.checked = false;
    }
  });

  function createTodoItem(todoText, priority) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todoText;
    todoTextSpan.classList.add("task");
    todoItem.appendChild(todoTextSpan);

    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = priority;
    prioritySpan.classList.add("priority", priority);
    todoItem.appendChild(prioritySpan);

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "COMPLETED";
    completedBtn.addEventListener("click", function () {
      todoItem.remove();
    });
    todoItem.appendChild(completedBtn);

    return todoItem;
  }

 function insertSorted(todoList, todoItem) {
  const todoItems = Array.from(todoList.children);
  const priority = todoItem.getElementsByClassName("priority")[0].textContent;
  let insertIndex = 0;

  for (let i = 0; i < todoItems.length; i++) {
    const currentItem = todoItems[i];
    const currentItemPriority = currentItem.getElementsByClassName("priority")[0].textContent;

    if (currentItemPriority === "Low" && priority !== "Low") {
      insertIndex = i;
      break;
    }

    if (currentItemPriority === "Medium" && priority === "High") {
      insertIndex = i;
      break;
    }

    if (currentItemPriority !== "High" && priority === "Medium") {
      insertIndex = i;
      break;
    }

    insertIndex++;
  }

  todoList.insertBefore(todoItem, todoList.children[insertIndex]);
}

});
