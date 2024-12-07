import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import ServicesWeProvide from "../Components/ServiceWeProvide";
import VisaCards from "../Components/VisaCards";



const Home = () => {
      return (
            <div className="bg-black">
                  <Banner></Banner>
                  <AboutUs></AboutUs>
                  
                  <VisaCards ></VisaCards>
                  <ServicesWeProvide></ServicesWeProvide>

                  
                 
                  
            </div>
      );
};

export default Home;