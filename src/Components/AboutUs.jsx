import React, { useEffect } from "react";



const AboutUs = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true, // Animation occurs only once
//     });
//   }, []);

  return (
    <div className="bg-black py-16 px-6">
      <div className="container mx-auto w-[90%]">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#e20934]"
            data-aos="fade-down"
          >
            About Us
          </h1>
          <p
            className="text-white text-lg mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Welcome to Visatrek, where we make visa applications and
            immigration consulting simple, transparent, and hassle-free.
          </p>
        </div>

        {/* About Us Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="p-4 border-[#e20934] border-2 rounded-lg "data-aos="fade-right">
          <div className="h-full" >
            <img
              src="https://i.ibb.co.com/BySrCdw/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>

          </div>
          

          {/* Content Section */}
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#e20934] mb-6">
              Your Trusted Partner for Visa Solutions
            </h2>
            <p className="text-white text-lg leading-relaxed mb-6">
              With years of expertise, we’ve guided countless clients in their
              visa and immigration journeys. Our platform ensures that you
              receive the best services, from tourist visas to business
              applications, tailored to your unique requirements.
            </p>
            <button className="flex justify-center items-center gap-2 py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                    Learn More
                    
                  </span>
                  
                </button>
          </div>
        </div>

      
        
      </div>
    </div>
  );
};

export default AboutUs;
