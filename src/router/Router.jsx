import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/Blog"
import MainLayout from "../layout/MainLayout"
import ChefRecipes from "../Components/ChefRecipes";
import NotFound from "../Components/NotFound";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Foods from "../Components/Foods";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UserProfile from "../Components/UserProfile";
import About from "../pages/About";
import ProfilePrivateRoute from "../privateRoute/ProfilePrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://still-hungry-server-sarowar-hossain.vercel.app/chefs')
                
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params})=>fetch(`https://still-hungry-server-sarowar-hossain.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'foods',
                element: <Foods></Foods>
            },
            {
                path: 'user',
                element: <ProfilePrivateRoute> <UserProfile></UserProfile> </ProfilePrivateRoute> 
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]) 