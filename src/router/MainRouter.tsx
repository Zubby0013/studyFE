import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomeScreen from "../pages/Home/HomeScreen";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import DashLayout from "../components/Layout/DashLayout";
import DashHomeScreen from "../pages/DashBoard/DashHomeScreen";
import Layout2 from "../dashboard2.ts/Layout2";
import HomeScreen2 from "../dashboard2.ts/HomeScreen2";


export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ],
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/dashboard',
        element: <DashLayout/>,
        children: [
            {
                index: true,
                element: <DashHomeScreen/>
            }
        ],
    },
    {
        path: '/dashboard2',
        element: <Layout2/>,
        children: [
            {
                index: true,
                element: <HomeScreen2/>
            }
        ],
    },
]);