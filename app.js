const formAddTodo = document.querySelector(".form-add-todo");
const todoContainer = document.querySelector(".todos-container");
const inputSearch = document.querySelector(".form-search input");
const deleteButton = document.querySelector(".delete");

const addTodo = (todoContainer, inputValue) => {
  todoContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-li=${inputValue}>
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash=${inputValue}></i>
        </li>
        `;
};
formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.add.value.trim();

  if (inputValue.length) {
    addTodo(todoContainer, inputValue);
    event.target.reset();
  }
});

const removeElement = (clickeElement) => {
  const dataSetValue = clickeElement.dataset.trash;
  if (dataSetValue) {
    document.querySelector(`[data-li="${dataSetValue}"]`).remove();
  }
};

todoContainer.addEventListener("click", (event) => {
  const clickeElement = event.target;
  removeElement(clickeElement);
});

const todosHidden = (todos, inputValue)=>{
  todos.filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo =>{
    todo.classList.remove("d-flex");
    todo.classList.add('hidden');
  });
}
const todosShow = (todos, inputValue)=>{
  todos.filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo =>{
    todo.classList.remove("hidden");
    todo.classList.add('d-flex');
  });
}

inputSearch.addEventListener("input", (event) => {

  const inputValue = event.target.value.trim().toLowerCase();
  const todos = Array.from(todoContainer.children);
  
  todosHidden(todos, inputValue);
  todosShow(todos, inputValue);
});
