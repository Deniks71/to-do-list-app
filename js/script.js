let input = document.querySelector(".todolist-cadastro-input");
let addButton = document.querySelector(".button");
let todoContainer = document.querySelector(".todolist-list-tasks");

addButton.addEventListener('click', () => {
    let list = document.createElement('li');
    list.classList.add('list-style')
    list.innerText = input.value;
    todoContainer.appendChild(list);

    input.value = "";
})
