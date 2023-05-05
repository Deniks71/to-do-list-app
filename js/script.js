let input = document.querySelector(".todolist-cadastro-input");
let addButton = document.querySelector(".button");
let todoContainer = document.querySelector(".todolist-list-tasks");


addButton.addEventListener('click', () => {
    let list = document.createElement('li');
    list.classList.add('list-style')
    list.innerText = input.value;
    todoContainer.appendChild(list);

    let deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-delete-left');
    todoContainer.appendChild(deleteItem);
    

    input.value = "";

    deleteItem.addEventListener('click', (evento) => {
        

    })
})
