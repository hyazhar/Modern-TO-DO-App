// Hamburger Menu Toggle
const menu = document.querySelector(".menus");
const hamburger = document.getElementById("hamburger-icon");
let addtodo=document.querySelector("#addtodo");

addtodo.addEventListener("click",()=>{
    let todo=document.querySelector("#todolist");
    let todosection=document.querySelector(".todo-list");
    let todoitem=document.createElement("li");
    let delbtn=document.createElement("span");
    let todoitemname=document.createElement("span");
    todoitemname.innerText=todo.value;
    delbtn.innerText=" X ";
    delbtn.classList.add("delete");
    todoitem.appendChild(todoitemname);
     delbtn.addEventListener("click",()=>{
        todosection.removeChild(todoitem);
    });
    todoitem.appendChild(delbtn);
    todosection.appendChild(todoitem);
})
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Dark / Light Theme Toggle
const lightIcon = document.getElementById("light-mode-icon");
const darkIcon = document.getElementById("dark-mode-icon");

darkIcon.addEventListener("click", () => {
    document.body.classList.add("dark");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
});

lightIcon.addEventListener("click", () => {
    document.body.classList.remove("dark");
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
});
