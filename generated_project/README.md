# SimpleTodoApp

A straightforward and responsive web application for managing your daily tasks. This app allows users to add, complete, delete, and persist to-do items directly in their browser.

## Tech Stack

*   **HTML**: Provides the structure and content of the application.
*   **CSS**: Styles the application for a clean and intuitive user interface.
*   **JavaScript**: Handles all the interactive functionalities, including task management and data persistence.

## Features

*   **Add Todo**: Easily add new tasks to your list.
*   **Complete Todo**: Mark tasks as complete to track your progress.
*   **Delete Todo**: Remove tasks that are no longer needed.
*   **Persist Todos**: All your tasks are saved locally in your browser, so they remain even after you close and reopen the application.
*   **Responsive Design**: The application is designed to work well on various screen sizes, from desktops to mobile devices.
*   **Clear Completed**: A convenient option to remove all completed tasks at once.

## Setup

There are no build steps required to run this application. Follow these simple steps:

1.  **Clone the repository** (if applicable):
    ```bash
    git clone <repository-url>
    cd SimpleTodoApp
    ```
2.  **Open `index.html`**: Navigate to the project directory and open the `index.html` file in your preferred web browser. The application will load automatically.

## Usage

*   **Adding a Task**: Type your task into the input field at the top and press `Enter` or click the "Add" button.
*   **Completing a Task**: Click on the checkbox next to a task to mark it as complete or incomplete.
*   **Deleting a Task**: Click the "X" button next to a task to remove it from the list.
*   **Clearing Completed Tasks**: Click the "Clear Completed" button to remove all tasks that are currently marked as complete.

Your to-do items are automatically saved in your browser's `localStorage`, ensuring your tasks are preserved across sessions.

## Development Notes

*   **`index.html`**: This file contains the main structure of the web page, including the header, the to-do input, the task list, and the filter/clear controls.
*   **`style.css`**: This file is responsible for the visual presentation of the application. It defines the layout, colors, fonts, and responsiveness.
*   **`script.js`**: This is the core logic of the application. It handles:
    *   Adding new tasks to the DOM and `localStorage`.
    *   Toggling task completion status.
    *   Deleting tasks.
    *   Filtering tasks (all, active, completed).
    *   Persisting data using `localStorage`.
    *   Event listeners for user interactions.

    When adding new features, most of the JavaScript logic will reside in `script.js`. Functions typically interact with the DOM by creating, updating, or deleting HTML elements to reflect the current state of the to-do list.

## License

[License Placeholder]