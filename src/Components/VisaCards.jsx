import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";
//import AOS from "aos";
//import "aos/dist/aos.css";




const VisaCards = () => {

      const loadedVisa = useLoaderData()
      const [visas, setVisas] = useState(loadedVisa)

      
      return (
            <div className=" py-12 container mx-auto w-[90%]">
                  <div className="container mx-auto">
                        <h2 className="text-4xl text-[#e20934] font-bold text-center mb-8" data-aos="fade-up">
                              Our Latest Visas
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {
                                    visas.map((visa,index) =>(<div key={visa._id}  data-aos="fade-up" data-aos-delay={index * 200}> <VisaCard visa={visa}></VisaCard></div>))
                              }

                        </div>
                        <div className="text-center mt-8">
                              <Link to="/allVisa">
                              <button className=" py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                    See All Visas
                    
                  </span>
                  
                </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default VisaCards;