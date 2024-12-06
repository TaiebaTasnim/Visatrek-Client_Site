import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Register from "../Pages/Register";
import Footer from "../Components/Footer";


const Root = () => {
      return (
            <div>
                  <Header></Header>
                  <div className="min-h-[calc(100vh-288px)]">
                  <Outlet></Outlet>

                  </div>
                  
                  <Footer></Footer>
                  
            </div>
      );
};

export default Root;