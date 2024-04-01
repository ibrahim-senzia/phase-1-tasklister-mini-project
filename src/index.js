document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let todoList = document.querySelector("form");
  todoList.addEventListener("submit", function(e) {
    e.preventDefault();
    addtask(e.target.new_task_description_value);
    todoList.reset();
  });
});

function addtask(todoTasks) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", dltTask);
  btn.textContent = "X";
  li.textContent = `${todoTasks} `;
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

function dltTask(e) {
  e.target.parentNode.remove();
}

