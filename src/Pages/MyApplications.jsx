import { useContext, useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const MyApplications = () => {
      const {user}=useContext(AuthContext)
      //const loadedApp=useLoaderData()
      const [myApp,setmyApp]=useState([])
      //console.log(loadedApp)
      useEffect(()=>{
            fetch("http://localhost:4000/application")
            .then(res=>res.json())
            .then(data=>{
                  console.log(data)
                  const targetApp=data.filter(app=>app.email===user.email)
                  setmyApp(targetApp)
                  console.log(targetApp)
            })
      },[])

      
      
      return (
            <div>
                  

                  
            </div>
      );
};

export default MyApplications;