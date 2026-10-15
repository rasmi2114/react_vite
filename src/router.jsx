import {createBrowserRouter } from "react-router-dom";
import  { App } from "./App";
import  { Greeting } from "./components/Greeting";
import  { StudentCard } from "./components/StudentCard";
import  { ProductCard } from "./components/ProductCard";

const router = createBrowserRouter ([
    {
    path: "/",
    element: <App />
   },
   {
    path: "/greeting",
    element: <Greeting />
   },
   {
    path: "/productcard",
    element: <ProductCard />
   },
   {
    path: "/studentcard",
    element: <StudentCard />
   }
]);
export default router;