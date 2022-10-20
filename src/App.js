import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageOne from "./components/pageOne/PageOne";
import PageTwo from "./components/pageTwo/PageTwo";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageOne />,
    },
    {
      path: 'projects',
      element: <PageTwo />
    }
  ])
  return (<RouterProvider router={router} />);
}

export default App;
