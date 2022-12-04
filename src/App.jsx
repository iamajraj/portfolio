import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/talk",
        element: <Chat />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
