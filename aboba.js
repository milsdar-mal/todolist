let spisok = [];

function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul");
    const buttonAdd = document.querySelector("a[id='add']")
    const buttonYes = document.querySelector("a[id='yes']")
    const buttonNo = document.querySelector("a[id='no']")
    const buttonAboba = document.querySelector("a[id='saki']")

    function loadTodos() {
        const data = localStorage.getItem("todos");
        if (data) {
            ul.innerHTML = data;
        }
        const deleteButtons = document.querySelectorAll("a[class='delbut']");
        for (const button of deleteButtons) {
            listenDeleteTodo(button);
        }
    }

    function createTodo() {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        const newTodo = " " + input.value;
        textSpan.append(newTodo);

        const deleteBtn = document.createElement("a");
        deleteBtn.append("delete");
        deleteBtn.classList.add("delbut");

        const chInput = document.createElement("input");
        chInput.type = "checkbox";

        ul.appendChild(li).append(chInput, textSpan, deleteBtn);
        input.value = "";
        listenDeleteTodo(deleteBtn);
    }

    function onClickTodo(event) {
        if (event.target.tagName === "LI") {
            const s = document.createElement("input");
            s.type = "checkbox";
            const a = event.target.childNodes[0];
            if (!(a.checked)) {
                s.checked = true;
            } else {
                s.checked = false;
            }
            event.target.childNodes[0].replaceWith(s)
        }
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            localStorage.setItem("todos", ul.innerHTML);
            event.stopPropagation();
        });
    }

    function listenAddTodo(element) {
        element.addEventListener("click", (event) => {
            createTodo();
            localStorage.setItem("todos", ul.innerHTML);
            event.stopPropagation();
        });
    }

    /*function listenYes(element) {
        element.addEventListener("click", (event) => {
            const data = localStorage.getItem("todos");
            if (data) {
                let todos = JSON.parse(localStorage.getItem('todos'));
                for (let i = 0; i < todos.length; i++) {
                    if (!(todos.childNodes[i].childNodes[0].checked)){
                        todos.childNodes[i].delete();
                    }
                }
                ul.innerHTML = data;
            }
            const deleteButtons = document.querySelectorAll("a[class='delbut']");
            for (const button of deleteButtons) {
                listenDeleteTodo(button);
            }
        });
    }*/

    loadTodos();
    ul.addEventListener("click", onClickTodo);
    ul.addEventListener("click", listenAddTodo(buttonAdd));
}

document.addEventListener("DOMContentLoaded", onPageLoaded);