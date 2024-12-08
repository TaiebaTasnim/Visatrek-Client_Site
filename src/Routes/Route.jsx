import {
      createBrowserRouter,
      
    } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddVisa from "../Pages/AddVisa";
import AllVisa from "../Pages/AllVisa";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import VisaDetails from "../Pages/VisaDetails";
import MyVisas from "../Pages/MyVisas";
import MyApplications from "../Pages/MyApplications";
import ErrorPage from "../Pages/ErrorPage";
import FilterVisa from "../Pages/FilterVisa";

    const Route = createBrowserRouter([
      {
        path: "/",
        element: <Root></Root>,
        //loader:()=>fetch("https://visatrek-server-site.vercel.app/users"),
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>,
                  loader:()=>fetch("https://visatrek-server-site.vercel.app/visas")
            },
            {
                  path:"/register",
                  element:<Register></Register>
            },
            {
                  path:"/login",
                  element:<Login></Login>
            },
            {
                  path:"/fiterVisa",
                  element:<FilterVisa></FilterVisa>
            },
            {
                  path:"/addVisa",
                  element:<PrivateRoute>
                        <AddVisa></AddVisa>
                  
                        </PrivateRoute>,
            },
            {
                  path:"/allVisa",
                  element:<AllVisa></AllVisa>,
                  loader:()=>fetch("https://visatrek-server-site.vercel.app/visas1")
            },
            {
                  path:"/visaDetails/id",
                  element:<PrivateRoute>
                           <VisaDetails></VisaDetails>
                          </PrivateRoute>,
                  loader:({params})=>fetch(`https://visatrek-server-site.vercel.app/visas4/${params.id}`)
            },
            {
                  path:"/visaDetails/:id",
                  element:<PrivateRoute>
                           <VisaDetails></VisaDetails>
                          </PrivateRoute>,
                  loader:({params})=>fetch(`https://visatrek-server-site.vercel.app/visas/${params.id}`)
            },
            {
                  path:"/myVisas/:email",
                  element:<PrivateRoute>
                           <MyVisas></MyVisas>
                          </PrivateRoute>,
                  loader:({params})=>fetch(`https://visatrek-server-site.vercel.app/visas2/${params.email}`)
            },
            {
                  path:"/myVisaApp",
                  element:<PrivateRoute>
                           <MyApplications></MyApplications>
                          </PrivateRoute>,
                  //loader:()=>fetch("https://visatrek-server-site.vercel.app/application")
            },
            
        ]
      },
    ]);
    
    export default Route;