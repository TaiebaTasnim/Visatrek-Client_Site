import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Register from "../Pages/Register";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import { Typewriter } from 'react-simple-typewriter';



const Root = () => {
      useEffect(() => {
            AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
      }, []);
      return (
            <div className="font-style ">
                  <div className=" bg-[#e20934]">
                  <Header></Header>

                  </div>
                 
                  <div className="min-h-[calc(100vh-288px)]">
                  <Outlet></Outlet>

                  </div>
                  
                  <Footer></Footer>
                  
            </div>
      );
};

export default Root;