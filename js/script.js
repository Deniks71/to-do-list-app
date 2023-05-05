let input = document.querySelector(".todolist-cadastro-input");
let addButton = document.querySelector(".button");
let todoContainer = document.querySelector(".todolist-list-tasks");


const saveTodo = (text) => {
     // creating div for li , button and icon
     const todo = document.createElement('div');
     todo.classList.add('todolist-list-item');
     
     // creating li
     let list = document.createElement('li');
     list.classList.add('list-style'); 
     list.innerText = text;
     //list.innerText = input.value;
     todo.appendChild(list);

     //creating button
    let deleteItem = document.createElement('button');
    deleteItem.classList.add('delete-btn');
    deleteItem.innerHTML = '<i class="fa-solid fa-delete-left">';
    todo.appendChild(deleteItem);
    todoContainer.appendChild(todo);

}

addButton.addEventListener('click', () => {
    saveTodo(input.value);
    //inserindo lista e button dentro da div e após isso div dentro da ul.
    //todoContainer.appendChild(list);
    input.value = "";

})
// ESTUDAR TARGET ELEMENT PARA PROSSEGUIR COM OS PROXIMOS EVENTOS! CONSULTAR VIDEO DO  MATHEYS BATTISTI

