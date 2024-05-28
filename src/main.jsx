import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ErrorPage from "./error-page";
// import News from "./home/news";
import Index from "./home/index";
// import {
//   action as editAction,
// } from "./account/account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // action: editAction,
    children: [
      { index: true, element: <Index /> },
      // {
      //   path: "news/:newsId",
      //   element: <News />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
