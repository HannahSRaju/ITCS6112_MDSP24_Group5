<p align="center">
<img src="src\images\event-plan.jpg" alt="Event Planner Home Screen" />
</p>
<h1 align="center">Event Planner</h1>
<p align="center">
Create memorable experiences with Event Planner.
Manage, capture, and plan life's most special events.
</p>

	
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui/material-ui/blob/HEAD/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5886829b-1f1f-4ddb-9e2e-991cf1f5ec07/deploy-status)](https://app.netlify.com/sites/planner/deploys)


# Introduction

Event Planner is a centralized platform designed to streamline event organization. It offers tools for creating, managing, and customizing events, along with features for discovering and booking vendors, tracking tasks and budgets, and communicating with guests. With its user-friendly interface and comprehensive functionalities, the application simplifies the complexities of event planning, saving time and resources for organizers while ensuring a seamless experience for all stakeholders.

-   **Runtime used for whole application** - [Node.js](https://nodejs.org/)
-   **Frontend framework** - [React JS](https://reactjs.org/)
-   **CSS preprocessor** - [SASS](https://sass-lang.com/)
-   **Backend framework** - [Express](https://expressjs.com/)
-   **Database** - [MongoDB](https://www.mongodb.com/)

# Navigation

-   **Home Page** - Event Planner's Home page contains a link for different pages of the web app.

-   **Events** - In the events section, you can navigate to the event category tile that you would like to start planning for. If you would like our Event Managers to plan the event for you, choose the first link found at the footer. If you have used the application before and want to leave a review, choose the second link at the footer.
<p align="center">
<img src="images\event-tiles-page.png" alt="Events" style="width: 75%" />
</p>
<p align="center">
<img src="images\footer.png" alt="Events" style="width: 75%" />
</p>

-   **Wedding** - Use Event Planner's wedding section to browse through the vendors necessary for planning your wedding (venue, caterer, florist, photographer, planner).
<p align="center">
<img src="images\wedding1.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wedding2.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wedding3.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wvenues.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wcaterers.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wflorists.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wphoto.png" alt="wedding" style="width: 75%" />
</p>
<p align="center">
<img src="images\wplan.png" alt="wedding" style="width: 75%" />
</p>

-   **Birthday** - Use Event Planner's birthday section to browse through the vendors necessary for planning your birthday (venue, baker, decorator).
<p align="center">
<img src="images\bday1.png" alt="bday" style="width: 75%" />
</p>
<p align="center">
<img src="images\bday2.png" alt="bday" style="width: 75%" />
</p>
<p align="center">
<img src="images\bvenues.png" alt="bday" style="width: 75%" />
</p>
<p align="center">
<img src="images\bbakers.png" alt="bday" style="width: 75%" />
</p>
<p align="center">
<img src="images\bdecor.png" alt="bday" style="width: 75%" />
</p>

-   **Sports** - Use Event Planner's sports section for planning your sports event (coming soon).
<p align="center">
<img src="images\sports.png" alt="Sports" style="width: 75%" />
</p>

-   **Corporate** - Use Event Planner's Corporate section for planning your corporate event (coming soon).
<p align="center">
<img src="images\corporate.png" alt="Corporate" style="width: 75%" />
</p>


# Local Development

- To clone copy the following command in your terminal and start development.

```sh
gh repo clone HannahSRaju/ITCS6112_MDSP24_Group5
```

OR

- Fork the repo to your github account and then,

```sh
git clone https://github.com/<your-username>/planner.git
```

- cd into the directory

```sh
cd planner
```

- Install all the dependencies
```sh
npm i
```

- Run the project in development mode

```sh
npm run react
```

- Run the backend server

```sh
npm run server
```
This will run the server on port [$PORT](http://localhost:5000) locally with nodemon to continuously watch every change.

- If you don't have nodemon on your system, run
```sh
npm i nodemon -g
```

Open [localhost:3000](http://localhost:3000) or [localhost:5001](http://localhost:5001) to view it in the browser.

## Environment Variables:
Building the .env
- **MONGO_CONNECTION_URL:** Create a database in MongoDB cluster and paste the connection string in here

- **PORT:** Assign a PORT to run the backend server (usually `4000` or `5000`)
- **JWT_SECRET:** Assign a string for the JWT web token or request the [developers](#author) to provide you with the official one.
- **REACT_APP_BACKEND_URL:** Create the backend URL for which React App will send the server requests to. (depends on **PORT**) -> `http://localhost:${PORT}`

For EmailJS integration

- **REACT_APP_SERVICE:** Service ID provided by EmailJS
- **REACT_APP_TEMPLATE:** Template ID provided by EmailJS
- **REACT_APP_USER:** Public Access Token provided by EmailJS

# Contributing

Read the [contributing guide](https://github.com/akshatmittal61/Planner/blob/master/.github/CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to create an issue and/or raise a PR.

# License

This project is licensed under the terms of the [MIT License](https://github.com/akshatmittal61/Planner/blob/master/LICENSE)

# Author

-   [Akshat Mittal](https://akshatmittal61.vercel.app/)
-   [Sneha Sharma](https://snehasharma1111.github.io/)
-   [Hannah Raju](https://www.linkedin.com/in/hannah-raju-33503b220/)
-   [Alish Jain](https://www.linkedin.com/in/alishjain0102/)
-   [Jinita Bhatt](https://www.linkedin.com/in/jinita-bhatt/)
-   [Micheal Rawlings](https://www.linkedin.com/in/michealrawlings/)
-   [Sach Denuwara](https://www.linkedin.com/in/sachdenuwara/)
<p align="center">
<img src="images\about1.png" alt="about" style="width: 75%" />
</p>
<p align="center">
<img src="images\about2.png" alt="about" style="width: 75%" />
</p>
<p align="center">
<img src="images\about3.png" alt="about" style="width: 75%" />
</p>

## References and Libraries Used

-   [Material 3 Designs](https://m3.material.io/)
-   [Google Keep](https://keep.google.com)
-   [AOS](https://github.com/michalsnik/aos)
-   [Axios](https://axios-http.com/)
-   [Moment](https://momentjs.com/)
-   [EmailJS](https://www.emailjs.com/)

## Model Explanation

Architectural Overview: 
In the early design stage, we assessed a classic MVC architecture in addition to taking serverless and microservices designs into account. Because of the robust separation of responsibilities, which makes testing, maintenance, and scaling easier within the confines of a single application deployment environment, MVC was chosen. While microservices necessitate intricate coordination among several autonomous services, Model-View-Controller (MVC) provides a simplified method that supports swift web application development and implementation cycles.

Subsystem Architecture
Under an MVC framework, the subsystem architecture is reduced to three main parts that operate together in the server-side environment of the web application:
Model: This layer manages data logic and symbolizes the dynamic data structure of the program. It directly oversees the application's logic, rules, and data. Models for the Event Planner application comprise vendor information, event data, and event planning information.
View: The View component is in charge of giving the user access to data in a certain format. It converts models into user-interactive UI components. This layer includes the structure and user interface for elements related to event management, vendor selection, and event planning.
Controller: The Controller functions as a go-between for the Model and the View, handling all business logic and incoming requests, working with the Model component to alter data, and coordinating with the Views to produce the final product. For instance, the event management controller would be in charge of organizing the views for these operations in addition to generating, editing, and removing events.

A UML package diagram is an ideal way to represent all the dependencies and relationships between the layers and components that constitute the application's architecture. Below is the breakdown of what each layer typically contains and their responsibilities in the system:

Four Layers in a Subsystem Dependency Diagram
1. Application-Specific Layer
Responsibility: Includes the portions of the program that were specifically created for it and are exclusive to its domain. This covers unique controllers, views, models, services, and utilities required especially for the Event Planner program.
Architectural Styles: Primarily influenced by MVC for separation of concerns—models handle the data logic, views manage the presentation logic, and controllers deal with application logic. The choice of MVC here addresses the need for maintainability, scalability, and clear separation between user interface and business logic.
2. Application-Generic Layer
Responsibility: Consists of general-purpose libraries and modules that are utilized across the application and are not particular to any one application domain. This might include utilities that offer cross-cutting functions, such as logging services, data validation, and authentication libraries.
Architectural Styles: Makes frequent use of shared libraries or the concepts of service-oriented architecture (SOA), which promotes reuse and modularity. The architecture of this layer facilitates efficiency and minimizes redundancy by offering shared services and functions that the application-specific layer may utilize.
3. Middleware Layer
Responsibility: Acts as the intermediary layer that provides communication and data management services between the application and the operating system or network services. This includes web servers, application servers, message brokers, and database management systems.
Architectural Styles: Often based on client-server and request-response patterns to support the application’s needs for data exchange, session management, and communication. Middleware abstraction facilitates scalability and integration by offering a uniform interface to diverse underlying technologies.
4. System-Software Layer
Responsibility: Comprises the operating systems, database servers, and network software that provide foundational services and resources for the application. This layer is responsible for managing hardware resources, data storage, and low-level network communications.
Architectural Styles: Influenced by layered architecture, ensuring that higher-level layers abstract away the complexities of hardware and system software interactions. This separation ensures application portability and simplifies deployment across different environments.
Architectural Styles Applied
Model-View-Controller (MVC): Selected for its capacity to divide issues, making maintenance and scalability simpler. It facilitates a clear division between the backend functionality and the user interface and increases developer efficiency.
Service-Oriented Architecture (SOA): Used at the application-generic layer to handle the requirement for efficient development processes and the ease of replacing or updating common services. It allows for the modularity and reuse of generic services throughout the application.
Layered Architecture: Managing dependencies and interactions between the application and the system environment requires the use of layered architecture. By dividing the program into discrete layers with defined roles, it reduces complexity and improves security and maintainability.

UML Package Diagram - 
<p align="center">
<img src="images\architecture.png" alt="about" style="width: 75%" />
</p>

