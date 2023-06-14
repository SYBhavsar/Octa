document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  addBtn.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const todoItem = createTodoItem(todoText);
      todoList.appendChild(todoItem);
      todoInput.value = "";
    }
  });

  function createTodoItem(todoText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todoText;
    todoItem.appendChild(todoTextSpan);

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.addEventListener("click", function () {
      todoItem.remove();
    });
    todoItem.appendChild(completedBtn);

    return todoItem;
  }
});
