# To Do List

A small React application for managing everyday tasks.

[Live demo](https://person5494.github.io/todo-react/) · [Repository](https://github.com/person5494/todo-react)

The project started as part of my React studies and was developed with guidance from an instructor. A significant part of the implementation, structure and UI work was done by me.

## Features

- add new tasks;
- mark tasks as completed;
- delete individual tasks or clear the entire list;
- search tasks by title;
- task statistics;
- jump to the first incomplete task;
- light and dark themes;
- small UI animations when tasks are added or removed;
- persistent data in the deployed version.

## Tech stack

- React 19
- JavaScript
- SCSS Modules
- Vite
- Context API
- `useReducer` and custom hooks
- JSON Server
- Local Storage
- ESLint
- GitHub Pages

## Structure

The application is split into several layers:

```text
src/
├── app/
├── entities/
├── features/
├── pages/
├── shared/
└── widgets/
```

The structure is inspired by Feature-Sliced Design: task data and related logic live in `entities`, user actions are separated into `features`, reusable UI and API code are kept in `shared`, and the main To Do interface is assembled in `widgets`.

Task state is managed with `useReducer`, while Context is used to make task data and actions available to the components that need them. The project also contains custom hooks for task logic, persistence and scrolling to the first incomplete item.

## Data storage

The project supports two data sources.

During local development it can work with a JSON Server backend. The production build used for GitHub Pages switches to a static/local implementation, so the application remains usable without a separate server.

## Run locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/person5494/todo-react.git
cd todo-react
npm install
```

Start JSON Server:

```bash
npm run server
```

Then, in another terminal, start the application:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The project is deployed to GitHub Pages:

https://person5494.github.io/todo-react/
