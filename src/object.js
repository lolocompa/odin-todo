import { format} from "date-fns";

let current_project 

class todo {
    constructor(title, description, date , priority, check, project) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.check = check;
        this.project = project;
    }
}



const determine_project = ()=> {
    const projects = document.querySelectorAll(".today")
    projects.forEach((project) =>{
        project.addEventListener("click", ()=> {
            let title = project.textContent
            current_project = title
            
            const page_title = document.querySelector(".todo_title")
            page_title.textContent = current_project
        })
    })
}


let todo_array = []


const create_object = (priority)=> {
    const title = document.querySelector(".title")
    const description = document.querySelector(".description")
    const date = document.querySelector(".date")
    const page_title = document.querySelector(".todo_title")

    let date_value = date.value

    let title_value = title.value
    let description_value = description.value
    let formattedDate = format(new Date(date_value), "MM/dd/yyyy");
    let priority_value = priority
    let project = page_title.textContent

    let newTodo = new todo(
        title_value,
        description_value,
        formattedDate,
        priority_value,
        false,
        project
      );
    todo_array.push(newTodo)
}

export {create_object, determine_project, todo_array}