import { useContext, useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const MyApplications = () => {
      const {user}=useContext(AuthContext)
      //const loadedApp=useLoaderData()
      const [myApp,setmyApp]=useState([])
      const [search,setSearch]=useState("")
      //console.log(loadedApp)
      useEffect(()=>{
            fetch("https://visatrek-server-site.vercel.app/application")
            .then(res=>res.json())
            .then(data=>{
                  console.log(data)
                  const targetApp=data.filter(app=>app.email===user.email)
                  setmyApp(targetApp)
                  console.log(targetApp)
            })
      },[])
      const handleChange=(e)=>{
        setSearch(e.target.value)

      }
      const handleSearch=()=>{
        console.log(search)
        fetch(`https://visatrek-server-site.vercel.app/application?searchCountry=${search}`)
        .then(res=>res.json())
        .then(data=>{
          const filteredApps = data.filter((app) => app.email === user.email); // Ensure filtering by user email
          setmyApp(filteredApps);
        })
      }

      const handleCancel = (id) => {
            console.log(id)
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#e20934",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            })
                  .then((result) => {
                        if (result.isConfirmed) {

                              fetch(`https://visatrek-server-site.vercel.app/application/${id}`, {
                                    method: "Delete",
                              })
                                    .then(res => res.json())
                                    .then(data => {
                                          if (data.deletedCount > 0) {
                                                console.log(data)
                                                Swal.fire({
                                                      title: "Deleted!",
                                                      text: "Your application has been deleted.",
                                                      icon: "success"
                                                });

                                                const remainning = myApp.filter(app => app._id !== id);
                                                console.log("remainning:", remainning)
                                                setmyApp(remainning)

                                          }
                                    })

                        }
                  });

      }


      
      
      return (
            <div className="bg-black">
                  <div className="container mx-auto w-[90%] min-h-screen px-6 py-10">
  {/* Title and Subtitle */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold text-[#e20934] animate__animated animate__fadeInDown">
      My Applications
    </h1>
    <p className="text-lg text-gray-300 mt-2 animate__animated animate__fadeInUp">
      View and manage all your visa applications in one place.
    </p>
  </div>

  {/* Search Bar */}
  <div className="flex justify-center mb-8">
    <input
      type="text"
      placeholder="Search by Country name..."
      onChange={handleChange}
      className="px-4 py-2 w-3/4 sm:w-1/2 lg:w-1/3 rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
    />
    <button onClick={handleSearch}
     className="px-6 py-2 bg-[#e20934] text-white rounded-r-lg font-semibold hover:bg-black hover:text-[#e20934] border-[#e20934] border transition duration-300">
      Search
    </button>
  </div>
  <div  className=""
    data-aos="fade-up"
    data-aos-duration="1200">
      { myApp.length>0?(
            myApp.map((app,index)=>(
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div
        key={app._id}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#e20934]"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        {/* Visa Image */}
        <figure className="relative h-48 overflow-hidden p-2">
          <img
            src={app.country_img}
            alt={app.country}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
          <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
            {app.country}
          </h2>
        </figure>

        {/* Application Info */}
        <div className="p-4">
          <h3 className="text-[#e20934] text-lg font-semibold mb-2">
            Visa Type: {app.visa_type}
          </h3>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Processing Time:</strong> {app.processing_time}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Fee:</strong> ${app.fee}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Validity:</strong> {app.validity}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Application Method:</strong> {app.application_method}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Applied Date:</strong> {app.appliedDate
            }
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Applicant's Name:</strong>{" "}
            {`${app.firstName} ${app.lastName}`}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            <strong>Applicant's Email:</strong> {app.email}
          </p>

          {/* Cancel Button */}
          <div className="flex justify-end mt-4">
          <button
              onClick={() => handleCancel(app._id)}
              className="flex items-center gap-2 py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
            
              Cancel
              </span>
            </button>
          </div>
        </div>
                 </div>
              </div>
      //             <div
      //   key={app._id}
      //   className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#e20934]"
      //   data-aos="fade-up"
      //   data-aos-delay={index * 100}
      // >
      //   {/* Visa Image */}
      //   <figure className="relative h-48 overflow-hidden p-2">
      //     <img
      //       src={app.country_img}
      //       alt={app.country}
      //       className="w-full h-full object-cover rounded-lg"
      //     />
      //     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      //     <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
      //       {app.country}
      //     </h2>
      //   </figure>

      //   {/* Application Info */}
      //   <div className="p-4">
      //     <h3 className="text-[#e20934] text-lg font-semibold mb-2">
      //       Visa Type: {app.visa_type}
      //     </h3>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Processing Time:</strong> {app.processing_time}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Fee:</strong> ${app.fee}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Validity:</strong> {app.validity}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Application Method:</strong> {app.application_method}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Applied Date:</strong> {app.appliedDate
      //       }
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Applicant's Name:</strong>{" "}
      //       {`${app.firstName} ${app.lastName}`}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-4">
      //       <strong>Applicant's Email:</strong> {app.email}
      //     </p>

      //     {/* Cancel Button */}
      //     <div className="flex justify-end mt-4">
      //     <button
      //         onClick={() => handleCancel(app._id)}
      //         className="flex items-center gap-2 py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
      //             <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      //             <span className="relative group-hover:text-white transition duration-500 ease-in-out">
            
      //         Cancel
      //         </span>
      //       </button>
      //     </div>
      //   </div>
      //            </div>
            ))
          ):(
            
              <div >
               <p className=" text-center text-gray-300 text-2xl mt-10">No applications found for your search.</p>

            </div>
            
            

           
          )
          
          }
      
  </div>
  </div>

                  
            </div>
      );
};

export default MyApplications;