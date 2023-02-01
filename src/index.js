import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import browserHistory from "history/browser";
import { syncHistoryWithStore } from "react-router-redux";

import pages from "./pages";
import NotFound from "./components/Errors/404";

const container = document.getElementById("root");
const root = createRoot(container);
const history = syncHistoryWithStore(browserHistory, store);

// Suspense в майбутньому потрібно оновити лоадером
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Suspense> 
          <Routes>
            {pages.map(({ path, component }) => (
              <Route exact key={path} path={path} element={component} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
