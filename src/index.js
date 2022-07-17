/* https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
  Once your project is set up and React Router is installed as a dependency,
  open the src/index.js in your text editor.
  Import BrowserRouter from react-router-dom near the top of your file
    and wrap your app in a <BrowserRouter>
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
