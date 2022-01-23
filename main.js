const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-form input")

let toDos = []  //투두 리스트 저장 할 배열
const TODOS_KEY = "toDos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerHTML="X";
    button.id = "DeleteBtn";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj={
        text : newTodo,
        id : Date.now(),
    };
    todoInput.value = "";
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function deleteTodo(event){
    console.dir(event);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
} 