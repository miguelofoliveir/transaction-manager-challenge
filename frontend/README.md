<!-- You are required to create a simple web application that allows users to submit a monetary transaction. The application should consist of a front-end built with React and a back-end using Node.js and Express. The application should allow users to input the transaction amount and a description, and upon submission, it should display the transaction details on the front-end.

Requirements
Front-End (React)

Create a form that accepts:

Transaction Amount (number)

Transaction Description (text)

On form submission, display the transaction details below the form.

Ensure the application is responsive and user-friendly.

Back-End (Node.js + Express)
Set up a simple Express server that handles POST requests to save transaction data.
Implement a GET endpoint to retrieve the transaction data.
Use an in-memory array to store transactions (no database required for this challenge).

Debugging and Testing

Ensure that the application handles errors gracefully (e.g., invalid input).

Write a simple test case to verify that the transaction data is being saved correctly.
 -->


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
