import React, { useEffect } from 'react';
//import AOS from 'aos';
//import 'aos/dist/aos.css';
import {FaArrowRight  } from 'react-icons/fa';

const services = [
      {
            title: 'Tourist Visa',
            description: 'We assist you with the quickest and easiest tourist visa process.',
            
            image: 'https://i.ibb.co.com/gWCfX7d/visa-5.jpg',  // Replace with your image URLs
      },
      {
            title: 'Student Visa',
            description: 'Get the perfect solution for your study visa applications and approvals.',
           
            image: 'https://i.ibb.co.com/BTpRmrD/visa-6.jpg',  // Replace with your image URLs
      },
      {
            title: 'Business Visa',
            description: 'Expand your professional horizon with a hassle-free business visa process.',
            
            image: 'https://i.ibb.co.com/RyVDVtx/visa-7.jpg',  // Replace with your image URLs
      },
];

const ServiceWeProvide = () => {
      // useEffect(() => {
      //       AOS.init({ duration: 1000 });
      // }, []);

      return (
            <section className=" py-16" data-aos="fade-up">
                  <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-[#e20934] mb-12">Services We Provide</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                              {services.map((service, index) => (
                                    <div
                                          key={index}
                                          className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#e20934] border-2 border-[#e20934]"
                                          data-aos="zoom-in"
                                    >
                                          {/* Image */}
                                          <div className="relative overflow-hidden rounded-lg mb-6">
                                                <img
                                                      src={service.image}
                                                      alt={service.title}
                                                      className="w-full h-60 object-cover rounded-lg transition-all duration-300 group-hover:scale-110"
                                                />
                                          </div>

                                          {/* Content */}
                                          <div className="text-center">


                                                {/* Title */}
                                                <h3 className="text-xl font-semibold text-[#333] mb-4 group-hover:text-white transition-colors duration-300">
                                                      {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-700 mb-6 group-hover:text-white transition-colors duration-300">
                                                      {service.description}
                                                </p>

                                                {/* See Details Button */}
                                                <button className="py-2 px-6 border-2 border-[#e20934] text-[#e20934] font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 group-hover:bg-white hover:text-[#e20934] hover:border-[#e20934]">
                                                      Read More
                                                      <FaArrowRight className="text-lg" />
                                                </button>
                                          </div>
                                    </div>
                              ))}
                        </div>


                  </div>
            </section>
      );
};

export default ServiceWeProvide;
