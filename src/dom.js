import { determine_project, create_object, todo_array } from "./object"

const add = document.querySelector(".add_project")
const all_projects = document.querySelector(".projects")
let count = true
let count2 = true
const add_todo = document.querySelector(".add_todo")
const all_todos = document.querySelector(".all_todos")



const add_project = () => {
    add.addEventListener("click", function() {
        if(count === true) {
            const create = document.createElement("div")
            create.classList.add("create_project")
            create.innerHTML = `<input class="add_input" maxlength="35" autofocus type="text"><button class="add_btn">add</button>`
            all_projects.appendChild(create)
            count = false

            const add_btn = document.querySelector(".add_btn")

            add_btn.addEventListener("click", update_projects)
        }
    })
}

let projects_array = []

const update_projects = () => {
    let title =  document.querySelector(".add_input").value
    const new_project = document.createElement("div")
    new_project.classList.add("today")
    new_project.textContent = title
    const create = document.querySelector(".create_project")
    all_projects.replaceChild(new_project, create);
    projects_array.push(title)
    count = true

    determine_project();

    const every_project = document.querySelectorAll(".today")
    every_project.forEach((single_project) => {
        single_project.addEventListener("click", todo_load)
    })
}


const create_todo = () => {
    add_todo.addEventListener("click", function () {
        if(count2 === true) {
            const make_todo = document.createElement("div")
            make_todo.classList.add("make_todo")
            make_todo.innerHTML = `                  <h1>Add todo</h1>
            <div class="input">
                <label for="title">Title</label>
                <input type="text" class="title">
            </div>
            <div  class="input">
                <label for="description">Description</label>
                <input type="text" class="description">
            </div>
            <div  class="input">
                <label for="date">Due Date</label>
                <input type="date" class="date">
            </div>
            <div class="container_priority">
                <button data-priority="low" class="priority">Low</button>
                <button data-priority="medium" class="priority">Medium</button>
                <button data-priority="high" class="priority">High</button>
            </div>
            <div class="container_submit">
                <button class="submit">Submit</button>
            </div>`;
            count2 = false  
            all_todos.appendChild(make_todo)

            const priority = document.querySelectorAll(".priority")
            priority.forEach((btn) => {
                btn.addEventListener("click", () => {
                    priority.forEach((btn) => btn.classList.remove("selected"));
                    btn.classList.add("selected");
                });
            });

            const submit = document.querySelector(".submit")
            submit.addEventListener("click", () => {
                let priority_value;
                priority.forEach((btn) => {
                    if (btn.classList.contains("selected")) {
                        priority_value = btn.textContent;
                    }
                });

                create_object(priority_value);
                count2 = true
                all_todos.removeChild(make_todo)
                todo_load();
            })
        }
    })
}



const todo_load = () => {
    const page_title_select = document.querySelector(".todo_title");
    let page_title = page_title_select.textContent;

    const all_todos = document.querySelector(".all_todos");
    const delete_todos = document.querySelectorAll(".todo");
    Array.from(delete_todos).forEach(todo => all_todos.removeChild(todo));

    let length = todo_array.length;
    for (let i = 0; i < length; i++) {
        if (todo_array[i].project === page_title) {
            const create_todo = document.createElement("div");
            create_todo.classList.add("todo");
            create_todo.innerHTML = `<div class="cont1">
                    <button class="check"></button>
                    <h2>${todo_array[i].title}</h2>
                </div>
                <div class="cont2">
                    <h4>${todo_array[i].description}</h4>
                </div>
                <div class="cont3">
                    <h2>${todo_array[i].date}</h2>
                    <button class="delete"><i class='bx bxs-trash'></i></button>
                </div>`;
            if( todo_array[i].priority === "Low") {
                create_todo.classList.add("green")
            }
            else if (todo_array[i].priority === "Medium") {
                create_todo.classList.add("yellow")
            }
            else if (todo_array[i].priority === "High") {
                create_todo.classList.add("red")
            }

            all_todos.appendChild(create_todo);

            
            // Remove existing event listeners
                const checkButtons = document.querySelectorAll(".check");
                checkButtons.forEach((btn) => {
                    btn.removeEventListener("click", handleCheckButtonClick);
                });

                // Attach new event listeners after adding todos
                checkButtons.forEach((btn) => {
                    btn.addEventListener("click", handleCheckButtonClick);
                });



                const remove = document.querySelectorAll(".delete");
                remove.forEach((btn) => {
                    btn.removeEventListener("click", remove_todo);
                });

                // Attach new event listeners after adding todos
                remove.forEach((btn) => {
                    btn.addEventListener("click", remove_todo);
                });
        }
    }
};


function handleCheckButtonClick() {
    let sibling = this.nextElementSibling.textContent;
    length = todo_array.length

    for (let j = 0; j < length; j++) {
        if (todo_array[j].title === sibling) {
            if (todo_array[j].check === false) {
                todo_array[j].check = true;
                let parent = this.parentElement.parentElement;
                parent.classList.add("opacity");
                this.innerHTML = `<i class='bx bx-check'></i>`
            } else {
                todo_array[j].check = false;
                let parent = this.parentElement.parentElement;
                parent.classList.remove("opacity");
                this.innerHTML = ""
            }
        }
    }
}


function remove_todo() {
    let todo = this.parentElement.parentElement
    todo.remove();
}


let view_all = document.querySelector(".view_all")
view_all.addEventListener("click", function() {
    const all_todos = document.querySelector(".all_todos");
    const delete_todos = document.querySelectorAll(".todo");
    Array.from(delete_todos).forEach(todo => all_todos.removeChild(todo));

    const page_title_select = document.querySelector(".todo_title");
    page_title_select.textContent = "view all"

    let length = todo_array.length;
    for (let i = 0; i < length; i++) {
            const create_todo = document.createElement("div");
            create_todo.classList.add("todo");
            create_todo.innerHTML = `<div class="cont1">
                    <button class="check"></button>
                    <h2>${todo_array[i].title}</h2>
                </div>
                <div class="cont2">
                    <h4>${todo_array[i].description}</h4>
                </div>
                <div class="cont3">
                    <h2>${todo_array[i].date}</h2>
                    <button class="delete"><i class='bx bxs-trash'></i></button>
                </div>`;
            if( todo_array[i].priority === "Low") {
                create_todo.classList.add("green")
            }
            else if (todo_array[i].priority === "Medium") {
                create_todo.classList.add("yellow")
            }
            else if (todo_array[i].priority === "High") {
                create_todo.classList.add("red")
            }

            all_todos.appendChild(create_todo);

            
            // Remove existing event listeners
                const checkButtons = document.querySelectorAll(".check");
                checkButtons.forEach((btn) => {
                    btn.removeEventListener("click", handleCheckButtonClick);
                });

                // Attach new event listeners after adding todos
                checkButtons.forEach((btn) => {
                    btn.addEventListener("click", handleCheckButtonClick);
                });



                const remove = document.querySelectorAll(".delete");
                remove.forEach((btn) => {
                    btn.removeEventListener("click", remove_todo);
                });

                // Attach new event listeners after adding todos
                remove.forEach((btn) => {
                    btn.addEventListener("click", remove_todo);
                });
        
    }
});



export {add_project, create_todo}