import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../src/components/Home';
import Signin from '../src/components/Signin';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    // {
    //   path: "/error",
    //   errorElement: <Error />,
    // }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;