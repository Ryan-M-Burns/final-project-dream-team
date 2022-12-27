# HARVEST

Created by [Ryan Burns](https://github.com/Ryan-M-Burns), [Anouk Van Bogaert](https://github.com/anoukvanbogaert), and [Taylor Smith](https://github.com/t-smift).

Harvest is an online marketplace app that connects local farms to the people in their community in one centralized place. Harvest makes it easy to find high quality produce from local farms and your community, and build your own custom box with only the produce you want. 

Farms can sign up, list products and update stock of current products. Shoppers can browse products from all the member farms at once, or filter by Farm or by Category. They can add produce into their custom delivery box and place an order to be delivered the following week! 

## Tech Stack

Havest utilizes the PERN stack to cover front-end, back-end and database management. 

- PostgresSQL
- Express
- React
- Node

## Screenshots

## Setup
- Clone the project from your terminal with the repo link `git@github.com:Ryan-M-Burns/final-project-dream-team.git`
- In your code editor, open up the root project folder. 
  - The env.example file shows which environment variables you will need to fill out to link your database to the project. 
  - Copy that file, and remove the .example. Then fill in the variables with your local information.
  - Run `npm i` in your terminal to install the relevant dependencies. 
- For the back end, navigate to the API directory.
  - Run `npm i` in your terminal here as well. 
  - Run `npm run db:reset` to initialize your database and any seed data you want to be featued on the project. 
  - To finish, run `npm start` to start up the API server.
- On a separate terminal tab, run `npm start` from the main root directory to start up the website. 
- On your browser, go to `http://localhost:3000` to view the app! 

### Dependencies
#### Front End
- Axios
- Bootstrap
- Classnames
- React-Bootstrap
- React Modal
- React-router-dom
- React Scripts
- Sass
- Web Vitals
- SCSS

#### Back End
- EJS
- Express
- Morgan
- Sass
- dotenv
- Nodemon

## Available Scripts

In the project main directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


In the API directory, you can run:

### `npm run db:rest`

To be run from the API directory. This is a script that will wipe any test data that has been enetered into the Database, re-build the tables from scratch and re-insert any seed data. For staging purposes only. 
