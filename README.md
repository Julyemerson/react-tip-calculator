# Tip React Calculator

This application is a simple tip calculator built with React and Vite. It allows users to calculate the tip amount based on the bill and the service rating.

## Main Components

- [`App`](src/App.jsx): This is the main component of the application. It maintains the state of the bill amount, the service rating, and the calculated tip. It also renders the other components and handles the reset functionality.

- [`BillInput`](src/components/BillInput.jsx): This component allows users to input the bill amount. It accepts a number and ensures that the value is always positive.

- [`ServiceInput`](src/components/ServiceInput.jsx): This component is used to rate the service. The rating affects the calculated tip.

- [`Output`](src/components/Output.jsx): This component displays the calculated tip based on the bill amount and the service rating.

## Running the Application

To run the application, use the `dev` script in the [package.json](package.json) file:

```sh
npm run dev