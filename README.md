# Odin Todo App
This repository contains a simple Todo application built with vanilla JavaScript, showcasing the use of Webpack for bundling and modular development practices. The application allows users to create todos, organize them into projects, and manage their tasks efficiently.

## Features
- Create Todos: Users can add todos with titles, descriptions, due dates, and priority levels.
- Project Management: Todos can be categorized into different projects for better organization.
- Priority Levels: Each todo can be marked with a priority level (Low, Medium, High) to manage tasks better.
- Dynamic UI: The application dynamically updates the UI to reflect changes in the todo list and projects.
## Installation
To get the application running locally, follow these steps:

- Clone the repository to your local machine:
- git clone https://github.com/lolocompa/odin-todo.git
- Navigate to the project directory:
- cd odin-todo
- Install the necessary dependencies:
- npm install
- Build the project using Webpack:
- npm run build
- Open the dist/index.html file in your browser to view the application.
## Usage
- Adding a Todo: Click on the "+ Create Todo" button, fill in the details, select a priority, and click "Submit".
- Viewing Todos: Todos are displayed under their respective project titles. Click on a project to view its todos.
- Adding a Project: Click on the "+" next to "View all projects", enter a project name, and click "add".
## Code Structure
- src/index.js: Entry point for the application. Initializes the todo and project functionalities.
- src/dom.js: Contains functions for dynamically updating the DOM based on user interactions.
- src/object.js: Defines the todo class and related functionalities.
- src/styles.css: Contains the styles for the application.
## Contributing
Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License
This project is open source and available under the MIT License.

