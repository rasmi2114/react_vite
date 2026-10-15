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
    element: <Greeting name="Hello Alok!" />
   },
   {
    path: "/productcard",
    element: <ProductCard product="laptop" price="$50" />
   },
   {
    path: "/studentcard",
    element: <StudentCard name="Alok" age="43" Marks="89%" />
   }
]);
export default router;