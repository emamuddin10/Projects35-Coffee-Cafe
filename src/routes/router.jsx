import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";



const router =createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>
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