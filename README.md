<h1 align="center">
  <a href="https://github.com/Technigo/react-router-boiler-plate-minimal-css/tree/main">
    <img src="/src/assets/boiler-plate-b.svg" alt="Boiler Plate">
  </a>
</h1>

# React Router Boilerplate for Technigo Students

### React + Vite + React Router Library + Minimal CSS

Welcome, Technigo students! This boilerplate is designed specifically for you. We understand the importance of a smooth start, especially when diving into libraries like React Router. With this in mind, we've crafted an out-of-the-box solution to help you seamlessly integrate the router library into your projects.

### NO CSS Boiler Plate

If you want a cleaner version of this boiler plate with no css, please go to the following link:

<a href="https://github.com/Technigo/react-router-boiler-plate-minimal-css/tree/main">
React Router Boiler Plate - No CSS
</a>

## Original Features:

- **Vite Integration:** Experience the speed and efficiency of Vite, ensuring your React projects are lightning-fast.
- **Hot Module Replacement (HMR):** No more manual reloads. With HMR, see your changes in real-time as you code.
- **ESLint Rules:** Maintain code quality and consistency with pre-configured ESLint rules.

## Custom Integrations:

- **React Router:** React Router is an external library for React that provides routing capabilities. It allows developers to create multi-page applications within React, enabling navigation between different components without reloading the entire page.

## Installing the React Library

React Router is an essential library for routing in React applications. There are a couple of ways you can install it, depending on your project's needs.

For a straightforward installation of just the React Router library, you can use the following command. This is the command being applied to this boiler plate.

```bash
npm install react-router-dom
```

With this boilerplate, you're not just getting a template; you're getting a head start. Dive in and make the most of your learning journey with Technigo!

### Navigating through this repository

#### 1. **Routes Configuration (`src/routes/routes.jsx`)**:

This file is the heart of the routing system in this repository. It defines the paths and their associated components. Here's a quick look:

```jsx
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </>
);

export default routes;
```

#### 2. Pages Folder Structure:

These are the components that get rendered when you navigate to a specific route.

**Home (src/pages/Home.jsx):** This is the landing page. It provides a warm welcome to Technigo students and offers some insights into the boilerplate's features.

**About (src/pages/About.jsx):** A simple about page with some placeholder text. It also displays some logos using the Logos component.

**Contact (src/pages/Contact.jsx):** Similar to the About page, it's a placeholder for contact information.

#### 3. Main App Component (src/App.jsx):

This is where the magic happens! The `BrowserRouter` wraps our entire application, enabling the use of routing functionalities. Inside, you'll find a navigation bar with links to our defined routes and a Routes component that renders the appropriate page based on the current path.

```jsx
import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
```

#### 4. Happy Coding !
