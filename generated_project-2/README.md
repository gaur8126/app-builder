# SimpleTripPlanner
## Table of Contents
* [Project Overview](#project-overview)
* [Live Demo](#live-demo)
* [Installation / Setup](#installation--setup)
* [Usage Guide](#usage-guide)
* [File Structure](#file-structure)
* [Design Decisions](#design-decisions)
* [Future Improvements](#future-improvements)
* [License](#license)
## Project Overview
SimpleTripPlanner is a web application designed to help users plan and organize their trips. The application allows users to add, edit, and delete destinations, and it includes date validation to ensure that the trip dates are valid. The application uses localStorage to persist data, so users can access their trip plans even after closing the browser.
## Live Demo
![Live Demo](live-demo.gif)
## Installation / Setup
To install and set up the application, follow these steps:
1. Clone the repository using `git clone https://github.com/username/repository.git`
2. Open the `index.html` file in a web browser
## Usage Guide
To use the application, follow these steps:
1. Add a new destination by clicking the "Add Destination" button and entering the destination name and dates
2. Edit a destination by clicking the "Edit" button next to the destination and updating the name and dates
3. Delete a destination by clicking the "Delete" button next to the destination
The application includes date validation to ensure that the trip dates are valid. The data is persisted using localStorage, so users can access their trip plans even after closing the browser.
```javascript
// Example of using localStorage to persist data
localStorage.setItem('destinations', JSON.stringify(destinations));
```
## File Structure
The application consists of the following files:
* `index.html`: The main HTML file for the application
* `style.css`: The CSS file for styling the application
* `script.js`: The JavaScript file for the application logic
* `README.md`: This file, which contains documentation for the application
## Design Decisions
The application uses localStorage to persist data because it is a simple and effective way to store data locally in the browser. The application uses plain JavaScript because it is a widely supported and versatile language. The application uses a responsive design approach to ensure that it works well on different devices and screen sizes.
## Future Improvements
Some potential future improvements for the application include:
* Exporting and importing trip plans
* Integrating with a map service to display trip locations
* Adding unit tests to ensure the application is working correctly
## License
The application is licensed under the MIT license.