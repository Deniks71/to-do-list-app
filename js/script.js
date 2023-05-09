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
    input.value = "";
    
    

}

addButton.addEventListener('click', () => {
    if (input.value == ""){
        alert('Digite algo')
    } else{
        saveTodo(input.value);
    }
    
    //inserindo lista e button dentro da div e após isso div dentro da ul.
    //todoContainer.appendChild(list);
   

})
// ESTUDAR TARGET ELEMENT PARA PROSSEGUIR COM OS PROXIMOS EVENTOS! CONSULTAR VIDEO DO  MATHEYS BATTISTI

document.addEventListener('click', (event) => {
    const targetEvent = event.target
    const parentEvent = targetEvent.closest('div');

    if (targetEvent.classList.contains('delete-btn')){
        parentEvent.remove();
    }

    if(targetEvent.classList.contains('list-style')) {
        targetEvent.classList.toggle('line-through');

    }
    
})



