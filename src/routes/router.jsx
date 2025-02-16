import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import CategoryNews from "../Pages/CategoryNews";



const router =createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>,
        children:[
            {
               path:'',
               element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews> ,
                loader: ({params})=>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                

            }
        ]
    },
    {
        path:'/news',
        element:<h1>This News</h1>
    },
    {
        path:'/auth',
        element:<h1>This is Auth Login</h1>
    },
    {
        path:'*',
        element:<h1>This is Error</h1>
    }
])
export default router;