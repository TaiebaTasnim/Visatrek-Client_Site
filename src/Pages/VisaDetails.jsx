import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const VisaDetails = () => {
      const {user}=useContext(AuthContext)
      const loadedVisa = useLoaderData()
      //const [visa,setVisa]=useState(loadedVisa)
      //console.log(loadedVisa)
      const handleApply=async(e)=>{
            e.preventDefault()
            const email=e.target.email.value;
            const firstName=e.target.firstName.value;
            const lastName=e.target.lastName.value;
            const appliedDate=e.target.appliedDate.value; 
            const fee=e.target.fee.value;
            const country=loadedVisa?.country_name;
            const country_img=loadedVisa?.country_image;
            const validity=loadedVisa?.validity;
            const visa_type=loadedVisa?.visa_type;
            const processing_time=loadedVisa?.processing_time;
            const application_method=loadedVisa?.application_method;
            const myVisaMail=loadedVisa?.email;
            console.log(email,firstName,lastName,appliedDate,fee,processing_time,myVisaMail)
            const newApplication={email,firstName,lastName,appliedDate,fee,country,country_img,validity,visa_type,processing_time,application_method,myVisaMail}

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
                  }else {
                        alert('Failed to add visa!');
                    }
                  } catch (error) {
                        console.error('Error adding visa:', error);
                    }

      }

      return (
            <div>
                  <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                              <img
                                    src={loadedVisa?.country_image}
                                    alt="Country Image" />
                        </figure>
                        <div className="card-body">
                              <h2 className="card-title">{loadedVisa?.country_name}</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                    <button
                                          onClick={() => document.getElementById('my_modal_5').showModal()}
                                          className="btn btn-primary">Apply For visa</button>
                              </div>
                        </div>
                  </div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}


                  <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                              <form onSubmit={handleApply}>
                                    <h2 className="text-xl font-semibold mb-4 text-blue-600">
                                          Apply for a Visa
                                    </h2>

                                    <div className="mb-4">
                                          <label className="block text-gray-700 font-medium mb-2">Email</label>
                                          <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                defaultValue={user.email}
                                                //value={formData.email}
                                                //onChange={handleChange}
                                                readOnly
                                                className="w-full p-2 border rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                                          />
                                    </div>

                                    <div className="mb-4">
                                          <label className="block text-gray-700 font-medium mb-2">First Name</label>
                                          <input
                                                type="text"
                                                name="firstName"
                                                //value={formData.firstName}
                                                //onChange={handleChange}
                                                placeholder="Enter your first name"
                                                required
                                                className="w-full p-2 border rounded"
                                          />
                                    </div>

                                    <div className="mb-4">
                                          <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                                          <input
                                                type="text"
                                                name="lastName"
                                                //value={formData.lastName}
                                                //onChange={handleChange}
                                                placeholder="Enter your last name"
                                                required
                                                className="w-full p-2 border rounded"
                                          />
                                    </div>

                                    <div className="mb-4">
                                          <label className="block text-gray-700 font-medium mb-2">Applied Date</label>
                                          <input
                                                type="date"
                                                name="appliedDate"
                                                //value={formData.appliedDate}
                                                //onChange={handleChange}
                                                //readOnly
                                                className="w-full p-2 border rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                                          />
                                    </div>

                                    <div className="mb-4">
                                          <label className="block text-gray-700 font-medium mb-2">Fee</label>
                                          <input
                                                type="number"
                                                name="fee"
                                                defaultValue={loadedVisa?.fee}
                                                readOnly
                                                //value={formData.fee}
                                                //onChange={handleChange}
                                                placeholder="Enter visa fee"
                                                required
                                                className="w-full p-2 border rounded"
                                          />
                                    </div>
                                    

                                   
                                          
                                          <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Apply</button>
                                          
                                          
                                          {/* if there is a button in form, it will close the modal */}
                                          
                                    
                              </form>
                              {/* <button className="btn" >Close</button> */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_5').close()}>✕</button>

                        </div>
                    
                  </dialog >

            </div >
      );
};

export default VisaDetails;