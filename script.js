// This is the array that will hold the todo list items
let todoItems = [];
const ulElement = document.getElementsByClassName("todo-list")[0]

function addTodo(text)
{
    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array
    let todo = {
        "index": todoItems.length,
        "content" : text,
        "do" : false

    }
    
    todoItems.push(todo);

}

function renderTodo(todo)
{
    // Select the first element with a class of `js-todo-list`

    // Create an `li` element and assign it to the`ul`
    let newListItem = document.createElement("li");
    let newCheckBox = document.createElement("input");
    let newParagraphe = document.createElement("p");

    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.style.display = "inline"
    newCheckBox.style.marginRight = "10px"
    newParagraphe.style.display = "inline"
    newCheckBox.addEventListener('click', () => toggleDone(todo.index))
    newListItem.appendChild(newCheckBox);
    newParagraphe.textContent = todo.content;
    newListItem.appendChild(newParagraphe);

    // Set the contents of the `li` element created above
    // Append the element to the DOM as the last child of
    // the element referenced by the `list` variable
    ulElement.appendChild(newListItem);

} 



function toggleDone(key)
{
    // Locate the todo item in the todoItems array and set its checked
    // property to the opposite. That means, `true` will become `false` and vice
    // versa.
    todoItems[key].do = !todoItems[key].do
    const curentListElement = ulElement.children[key];
    if (todoItems[key].do){
        curentListElement.style.textDecoration = "line-through";
    }else {
        curentListElement.style.textDecoration = "none";
    }

}

// Select the form element
const form = document.getElementById("todo-form");

// Add a submit event listener
form.addEventListener('submit', event =>
{
    const inputTodo = document.getElementById("todo-input");
    // prevent page refresh on form submission
    event.preventDefault();
    if (inputTodo.value != ""){

        // select the text input
    
        // Get the value of the input
        let value = inputTodo.value;
        inputTodo.value = ""
        // send the value to the addTodo function
        addTodo(value);
        renderTodo(todoItems[todoItems.length-1])

    }
});