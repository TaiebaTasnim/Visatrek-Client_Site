import { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";


const AllVisa = () => {
      const loadedVisa = useLoaderData()
      const [allVisas, setAllVisas] = useState(loadedVisa)
      //console.log(allVisas)
      const handledetails=(id)=>{
            //console.log(id)
            

      }
      return (
            <div>
                  <div className="px-4 py-6 bg-black">
  {/* Title and Subtitle */}
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-[#e20934] animate__animated animate__fadeInDown">
      Explore Visa Options
    </h1>
    <p className="text-lg text-white mt-2 animate__animated animate__fadeInUp">
      Discover the perfect visa type tailored to your travel needs, complete with all the essential details.
    </p>
  </div>
            <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-6 bg-black "
>
  {allVisas.map((allVisa, index) => (
    <div
      key={allVisa._id}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-[#e20934] border-2"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image Section */}
      <figure className="relative h-48 overflow-hidden rounded-lg p-3">
        <img
          src={allVisa.country_image}
          alt={allVisa.country_name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
          {allVisa.country_name}
        </h2>
      </figure>

      {/* Card Details */}
      <div className="p-4">
        <h3 className="text-gray-600 text-lg font-semibold mb-2">
          Visa Type: {allVisa.visa_type}
        </h3>
        <p className="text-gray-700 text-sm mb-1">
          <strong>Fee:</strong> ${allVisa.fee}
        </p>
        <p className="text-gray-700 text-sm mb-4">
          <strong>Application Method:</strong> {allVisa.application_method}
        </p>
        <div className="card-actions justify-end m-3">
          
          
           <button onClick={()=>handledetails(allVisa._id)}
            className=" py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
            <Link to={`/visaDetails/${allVisa._id}`}>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                   <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center"> 
                   See Details
                    
                   </span>
           </Link>
                  
                </button> 
          
        </div>
      </div>
    </div>
  ))}
         </div>
            </div>

           </div> 

         
      );
};

export default AllVisa;