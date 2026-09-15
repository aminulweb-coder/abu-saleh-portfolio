import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Home/Services";
import Portfolio from "../Pages/Home/Portfolio";
import Pricing from "../Pages/Home/pricingPlans";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home,
        },

        {
            path: "/about",
            Component: About,
        },

        {
            path: "/services",
            Component: Services,
        },

        {
            path: "/portfolio",
            Component: Portfolio,
        },

        {
            path: "/pricing",
            Component: Pricing,

        },

        {
            path: "/contact",
            Component: Contact,
        }

        
    ]
},
]);