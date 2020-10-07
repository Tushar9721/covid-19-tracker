This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Divided React application into steps

1. Create Wireframes
2. Create React app
3. Setting up the environment
4. Structure of COVID Tracker
5. Create a header
6. Create boxes to show cases
7. Create a country table
8. create a chart
9. create a map
10. Styling (Material Ui)

### Create Wireframes

Designed a basic wireframe using a free tool [draw.io](https://app.diagrams.net/)

<img src="https://github.com/Tushar9721/covid-19-tracker/blob/master/images/Wireframe.png" height="300px" width="500px" />

### Create Wireframes

All that's needed to install npx is to use npm to install it globally.

```
npm install npx
```

> Note: npx installing

To create a new React app just need to write

```
npx create-react-app app-name
```

> Note: It can take upto 2 mins to create a react app

### Setting up the environment

Removing unwanted code from the react app

### Structure of COVID Tracker

> Note: Dividing the covid tracker app in different components

1. Header
2. Title + Select Input drop down feild
3. Info Box 1
4. Info Box 2
5. Info Box 3
6. Table of Countries
7. Graph
8. Map

### Create a Header

> Note: In the header seaction we have displayed our project name and a drop down selector to implement the drop down I have used [Material UI](https://material-ui.com/)

### Create boxes to show cases

> Note: Data is fetched from api provided by [Diesease](https://disease.sh/docs/)
> 3 Information boxes were created to display the country covid data:

1. Coronavirus Today Cases
2. Totoal Recoverd
3. Total Deaths

### Create a country table

A table is built to show the COVID-19 cases of Every country. The first country has the most cases in the world and last country has the least cases.

### create a chart

Using 3-rd party [charts](https://github.com/jerairrest/react-chartjs-2) to implement the chart, Line graph is implemented

>Note: To install open terminal and use the given command
```
npm install --save react-chartjs-2 chart.js
```

### create a Map

Creating a map in with the help of (react-leaflet)[https://react-leaflet.js.org/]

>Note: To install open terminal and use the given command
```
npm i react-leaflet
```
And 

```
npm i leaflet
```

### Styling

Styling is done with the help of Material UI

## Final Screen Shot of the application

This the final Screenshot of the application
<img src="https://github.com/Tushar9721/covid-19-tracker/blob/master/images/final.PNG" height="300px" width="500px" />
