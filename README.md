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

-   **Birthday** - Use Event Planner's birthday section to browse through the vendors necessary for planning your birthday (venue, baker, decorator).
<p align="center">
<img src="images\bday1.png" alt="bday" style="width: 75%" />
</p>
<p align="center">
<img src="images\bday2.png" alt="bday" style="width: 75%" />
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

-   [Hannah Raju](https://www.linkedin.com/in/hannah-raju-33503b220/)
-   [Alish Jain](https://www.linkedin.com/in/alishjain0102/)
-   [Jinita Bhatt](https://www.linkedin.com/in/jinita-bhatt/)
-   [Micheal Rawlings](https://www.linkedin.com/in/michealrawlings/)
-   [Sach Denuwara](https://www.linkedin.com/in/sachdenuwara/)
-   [Akshat Mittal](https://akshatmittal61.vercel.app/)
-   [Sneha Sharma](https://snehasharma1111.github.io/)

## References and Libraries Used

-   [Material 3 Designs](https://m3.material.io/)
-   [Google Keep](https://keep.google.com)
-   [AOS](https://github.com/michalsnik/aos)
-   [Axios](https://axios-http.com/)
-   [Moment](https://momentjs.com/)
-   [EmailJS](https://www.emailjs.com/)
