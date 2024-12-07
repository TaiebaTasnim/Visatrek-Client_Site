import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const VisaDetails = () => {
      const { user } = useContext(AuthContext)
      const loadedVisa = useLoaderData()
      //const [visa,setVisa]=useState(loadedVisa)
      //console.log(loadedVisa)
      const handleApply = async (e) => {
            e.preventDefault()
            const email = e.target.email.value;
            const firstName = e.target.firstName.value;
            const lastName = e.target.lastName.value;
            const appliedDate = e.target.appliedDate.value;
            const fee = e.target.fee.value;
            const country = loadedVisa?.country_name;
            const country_img = loadedVisa?.country_image;
            const validity = loadedVisa?.validity;
            const visa_type = loadedVisa?.visa_type;
            const processing_time = loadedVisa?.processing_time;
            const application_method = loadedVisa?.application_method;
            const myVisaMail = loadedVisa?.email;
            console.log(email, firstName, lastName, appliedDate, fee, processing_time, myVisaMail)
            const newApplication = { email, firstName, lastName, appliedDate, fee, country, country_img, validity, visa_type, processing_time, application_method, myVisaMail }

            try {
                  // Use fetch to send the form data to the backend
                  const response = await fetch('http://localhost:4000/application', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newApplication),
                  });
                  if (response.ok) {
                        alert('Visa added successfully!');
                        e.target.reset;
                  } else {
                        alert('Failed to add visa!');
                  }
            } catch (error) {
                  console.error('Error adding visa:', error);
            }

      }

      return (
            <div className="bg-black min-h-screen px-6 py-10">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold text-[#e20934] animate__animated animate__bounceIn">
                Visa Details
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Explore all the necessary details about your visa requirements.
              </p>
            </div>
          
            {/* Visa Details Section */}
            <div
              className="max-w-4xl mx-auto space-y-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/* Country Image */}
              <div className="w-full overflow-hidden mb-8">
                <img
                  src={loadedVisa?.country_image}
                  alt="Country"
                  className="w-full h-80 object-cover rounded-md shadow-md border border-[#e20934]"
                />
              </div>
          
              {/* Country Name */}
              <h2 className="text-6xl font-bold text-center text-[#e20934] mb-6 animate__animated animate__fadeInDown">
                {loadedVisa?.country_name}
              </h2>
          
              {/* Description */}
              <p className="text-[20px] text-gray-300 mb-8 text-center">
                {loadedVisa?.description ||
                  "Learn more about the visa requirements and guidelines for this country to make your travel smooth and hassle-free."}
              </p>
          
              {/* Visa Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
                {/* Visa Type */}
                <div className="flex items-center gap-4">
                  <span className="text-[#e20934] text-xl font-semibold">Visa Type:</span>
                  <p className="text-lg">{loadedVisa?.visa_type}</p>
                </div>
          
                {/* Processing Time */}
                <div className="flex items-center gap-4">
                  <span className="text-[#e20934] text-xl font-semibold">
                    Processing Time:
                  </span>
                  <p className="text-lg">{loadedVisa?.processing_time}</p>
                </div>
          
                {/* Required Documents */}
                <div className="sm:col-span-2">
                  <span className="text-[#e20934] text-xl font-semibold">
                    Required Documents:
                  </span>
                  <ul className="list-disc list-inside mt-2 text-lg">
                    {loadedVisa?.required_documents?.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
          
                {/* Age Restriction */}
                <div className="flex items-center gap-4">
                  <span className="text-[#e20934] text-xl font-semibold">
                    Age Restriction:
                  </span>
                  <p className="text-lg">{loadedVisa?.age_restriction}+</p>
                </div>
          
                {/* Fee */}
                <div className="flex items-center gap-4">
                  <span className="text-[#e20934] text-xl font-semibold">Fee:</span>
                  <p className="text-lg">${loadedVisa?.fee}</p>
                </div>
          
                {/* Validity */}
                <div className="flex items-center gap-4">
                  <span className="text-[#e20934] text-xl font-semibold">Validity:</span>
                  <p className="text-lg">{loadedVisa?.validity}</p>
                </div>
          
                {/* Application Method */}
                <div className="sm:col-span-2">
                  <span className="text-[#e20934] text-xl font-semibold">
                    Application Method:
                  </span>
                  <p className="text-lg mt-2">{loadedVisa?.application_method}</p>
                </div>
              </div>
          
              {/* Apply Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => document.getElementById("my_modal_5").showModal()}
                  className=" py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
            
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                   <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center"> 
                
                  Apply for Visa
                  </span>
                </button>
              </div>
            </div>
          
            {/* Modal for Applying */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-black text-white border border-[#e20934]">
                <form onSubmit={handleApply}>
                  <h2 className="text-2xl font-semibold mb-4 text-[#e20934]">
                    Apply for a Visa
                  </h2>
          
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      readOnly
                      className="w-full border  p-2  rounded bg-transparent text-white cursor-not-allowed focus:outline-none focus:border-white"
                    />
                  </div>
          
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                      className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:border-white"
                    />
                  </div>
          
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      required
                      className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:border-white"
                    />
                  </div>
          
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Applied Date</label>
                    <input
                      type="date"
                      name="appliedDate"
                      required
                      className="w-full p-2 border rounded bg-transparent text-white focus:outline-none focus:border-white"
                    />
                  </div>
          
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Fee</label>
                    <input
                      type="number"
                      name="fee"
                      defaultValue={loadedVisa?.fee}
                      readOnly
                      className="w-full p-2 border rounded bg-transparent text-white cursor-not-allowed focus:outline-none focus:border-white"
                    />
                  </div>
          
                  <button
                    className="w-full py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
            
                    <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                     <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center"> 
                    Apply
                    </span>
                  </button>
                </form>
                
                <button
                  className="w-8 h-8 bg-[#e20934] rounded-full absolute right-2 top-4 text-white"
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                  ✕
                </button>

                
               
              </div>
            </dialog>
          </div>
          

            // <div>
            //       <div className="card card-compact bg-base-100 w-96 shadow-xl">
            //             <figure>
            //                   <img
            //                         src={loadedVisa?.country_image}
            //                         alt="Country Image" />
            //             </figure>
            //             <div className="card-body">
            //                   <h2 className="card-title">{loadedVisa?.country_name}</h2>
            //                   <p>If a dog chews shoes whose shoes does he choose?</p>
            //                   <div className="card-actions justify-end">
            //                         <button
            //                               onClick={() => document.getElementById('my_modal_5').showModal()}
            //                               className="btn btn-primary">Apply For visa</button>
            //                   </div>
            //             </div>
            //       </div>
            //       {/* Open the modal using document.getElementById('ID').showModal() method */}


            //       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            //             <div className="modal-box">
            //                   <form onSubmit={handleApply}>
            //                         <h2 className="text-xl font-semibold mb-4 text-blue-600">
            //                               Apply for a Visa
            //                         </h2>

            //                         <div className="mb-4">
            //                               <label className="block text-gray-700 font-medium mb-2">Email</label>
            //                               <input
            //                                     type="email"
            //                                     name="email"
            //                                     placeholder="Enter your email"
            //                                     defaultValue={user.email}
            //                                     //value={formData.email}
            //                                     //onChange={handleChange}
            //                                     readOnly
            //                                     className="w-full p-2 border rounded bg-gray-100 text-gray-500 cursor-not-allowed"
            //                               />
            //                         </div>

            //                         <div className="mb-4">
            //                               <label className="block text-gray-700 font-medium mb-2">First Name</label>
            //                               <input
            //                                     type="text"
            //                                     name="firstName"
            //                                     //value={formData.firstName}
            //                                     //onChange={handleChange}
            //                                     placeholder="Enter your first name"
            //                                     required
            //                                     className="w-full p-2 border rounded"
            //                               />
            //                         </div>

            //                         <div className="mb-4">
            //                               <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            //                               <input
            //                                     type="text"
            //                                     name="lastName"
            //                                     //value={formData.lastName}
            //                                     //onChange={handleChange}
            //                                     placeholder="Enter your last name"
            //                                     required
            //                                     className="w-full p-2 border rounded"
            //                               />
            //                         </div>

            //                         <div className="mb-4">
            //                               <label className="block text-gray-700 font-medium mb-2">Applied Date</label>
            //                               <input
            //                                     type="date"
            //                                     name="appliedDate"
            //                                     //value={formData.appliedDate}
            //                                     //onChange={handleChange}
            //                                     //readOnly
            //                                     className="w-full p-2 border rounded bg-gray-100 text-gray-500 cursor-not-allowed"
            //                               />
            //                         </div>

            //                         <div className="mb-4">
            //                               <label className="block text-gray-700 font-medium mb-2">Fee</label>
            //                               <input
            //                                     type="number"
            //                                     name="fee"
            //                                     defaultValue={loadedVisa?.fee}
            //                                     readOnly
            //                                     //value={formData.fee}
            //                                     //onChange={handleChange}
            //                                     placeholder="Enter visa fee"
            //                                     required
            //                                     className="w-full p-2 border rounded"
            //                               />
            //                         </div>




            //                               <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Apply</button>


            //                               {/* if there is a button in form, it will close the modal */}


            //                   </form>
            //                   {/* <button className="btn" >Close</button> */}
            //                   <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_5').close()}>✕</button>

            //             </div>

            //       </dialog >

            // </div >
      );
};

export default VisaDetails;