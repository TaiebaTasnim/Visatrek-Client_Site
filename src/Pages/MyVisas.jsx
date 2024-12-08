import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const MyVisas = () => {
      const loadedVisas = useLoaderData()
      //console.log(loadedVisas)
      const [myVisas, setMyVisas] = useState(loadedVisas)
      //const { user } = useContext(AuthContext)
      const [selectedVisaId, setSelectedVisaId] = useState(null);
      const [formData, setFormData] = useState({
            country_image: "",
            country_name: "",
            visa_type: "Tourist Visa",
            processing_time: "",
            required_documents: [],
            description: "",
            age_restriction: "",
            fee: "",
            validity: "",
            application_method: "",
      });

      const documentOptions = [
            "Valid passport",
            "Visa application form",
            "Recent passport-sized photograph",
            "Invitation from government",
            "Letter of admission",
            "Travel insurance"
      ];
      const handleUpdateClick = (visa) => {
            setFormData(visa);
            setSelectedVisaId(visa._id); // Track the visa being updated
            document.getElementById("my_modal_5").showModal();
          };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      // const handleCheckboxChange = (e) => {
      //       const { value, checked } = e.target;
      //       setFormData((prev) => ({
      //             ...prev,
      //             required_documents: checked
      //                   ? [...prev.required_documents, value]
      //                   : prev.required_documents.filter((doc) => doc !== value),
      //       }));
      // };
      const handleUpdateSubmit = (e) => {
            e.preventDefault();
            fetch(`https://visatrek-server-site.vercel.app/visas/${selectedVisaId}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.modifiedCount > 0) {
                  Swal.fire({
                    title: "Updated!",
                    text: "Visa information has been updated successfully.",
                    icon: "success",
                  });
        
                  // Update the UI to reflect changes
                  const updatedVisas = myVisas.map((visa) =>
                    visa._id === selectedVisaId ? { ...visa, ...formData } : visa
                  );
                  setMyVisas(updatedVisas);
                  document.getElementById("my_modal_5").close();
                }
              })
              .catch((error) => console.error("Error updating visa:", error));
          };
      
        

      const handleDelete = (id) => {
            console.log(id)
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            })
                  .then((result) => {
                        if (result.isConfirmed) {

                              fetch(`https://visatrek-server-site.vercel.app/visas3/${id}`, {
                                    method: "Delete",
                              })
                                    .then(res => res.json())
                                    .then(data => {
                                          if (data.deletedCount > 0) {
                                                console.log(data)
                                                Swal.fire({
                                                      title: "Deleted!",
                                                      text: "Your visa has been deleted.",
                                                      icon: "success"
                                                });

                                                const remainning = myVisas.filter(visa => visa._id !== id);
                                                console.log("remainning:", remainning)
                                                setMyVisas(remainning)

                                          }
                                    })

                        }
                  });

      }


      return (
            <div className="bg-black min-h-screen px-6 py-10">
  {/* Title */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold text-[#e20934] animate__animated animate__fadeInDown">
      My Visas
    </h1>
    <p className="text-lg text-gray-300 mt-2 animate__animated animate__fadeInUp">
      Manage your visas with all the details you need at a glance. Update or delete with ease.
    </p>
  </div>

  {/* Visa Cards */}
  <div
    className=""
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    {
      myVisas.length>0?(
    myVisas.map((myVisa, index) => (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         <div
        key={myVisa._id}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#e20934]"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        {/* Visa Image */}
        <figure className="relative h-52 p-2 overflow-hidden">
          <img
            src={myVisa.country_image}
            alt={myVisa.country_name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
          <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
            {myVisa.country_name}
          </h2>
        </figure>

        {/* Visa Info */}
        <div className="p-4">
          <h3 className="text-[#e20934] text-lg font-semibold mb-2">
            Visa Type: {myVisa.visa_type}
          </h3>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Processing Time:</strong> {myVisa.processing_time}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Fee:</strong> ${myVisa.fee}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Validity:</strong> {myVisa.validity}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            <strong>Application Method:</strong> {myVisa.application_method}
          </p>

          {/* Card Actions */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleUpdateClick(myVisa)}
              className="px-4 py-2 bg-[#e20934] text-white rounded-lg font-semibold hover:bg-black hover:text-[#e20934] border-[#e20934] border transition duration-300"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(myVisa._id)}
              className="px-4 py-2 bg-black text-[#e20934] rounded-lg font-semibold hover:bg-[#e20934] hover:text-white border-[#e20934] border transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      </div>


      // <div
      //   key={myVisa._id}
      //   className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-[#e20934]"
      //   data-aos="fade-up"
      //   data-aos-delay={index * 100}
      // >
      //   {/* Visa Image */}
      //   <figure className="relative h-52 p-2 overflow-hidden">
      //     <img
      //       src={myVisa.country_image}
      //       alt={myVisa.country_name}
      //       className="w-full h-full object-cover rounded-lg"
      //     />
      //     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      //     <h2 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
      //       {myVisa.country_name}
      //     </h2>
      //   </figure>

      //   {/* Visa Info */}
      //   <div className="p-4">
      //     <h3 className="text-[#e20934] text-lg font-semibold mb-2">
      //       Visa Type: {myVisa.visa_type}
      //     </h3>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Processing Time:</strong> {myVisa.processing_time}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Fee:</strong> ${myVisa.fee}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-1">
      //       <strong>Validity:</strong> {myVisa.validity}
      //     </p>
      //     <p className="text-gray-700 text-sm mb-4">
      //       <strong>Application Method:</strong> {myVisa.application_method}
      //     </p>

      //     {/* Card Actions */}
      //     <div className="flex justify-between mt-4">
      //       <button
      //         onClick={() => handleUpdateClick(myVisa)}
      //         className="px-4 py-2 bg-[#e20934] text-white rounded-lg font-semibold hover:bg-black hover:text-[#e20934] border-[#e20934] border transition duration-300"
      //       >
      //         Update
      //       </button>
      //       <button
      //         onClick={() => handleDelete(myVisa._id)}
      //         className="px-4 py-2 bg-black text-[#e20934] rounded-lg font-semibold hover:bg-[#e20934] hover:text-white border-[#e20934] border transition duration-300"
      //       >
      //         Delete
      //       </button>
      //     </div>
      //   </div>
      // </div>
    ))):(
            
      <div >
       <p className=" text-center text-gray-300 text-2xl mt-24  ">No visas have been added yet.<br></br> Please check back later for updates!</p>

    </div>)}
  </div>

  {/* Update Visa Modal */}
  <dialog id="my_modal_5" className="modal  mx-auto container">
    <div className="modal-box  bg-black text-white border border-[#e20934]">
      <h3 className="font-bold text-lg mb-4 text-[#e20934]">Update Visa</h3>
      <form onSubmit={handleUpdateSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Country Name</label>
          <input
            type="text"
            name="country_name"
            value={formData.country_name || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Country Image URL</label>
          <input
            type="text"
            name="country_image"
            value={formData.country_image || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Visa Type</label>
          <select
            name="visa_type"
            value={formData.visa_type || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          >
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Official Visa">Official Visa</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Processing Time</label>
          <input
            type="text"
            name="processing_time"
            value={formData.processing_time || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Fee</label>
          <input
            type="number"
            name="fee"
            value={formData.fee || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Validity</label>
          <input
            type="text"
            name="validity"
            value={formData.validity || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Application Method</label>
          <input
            type="text"
            name="application_method"
            value={formData.application_method || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-[#e20934] text-white rounded-lg font-semibold hover:bg-black hover:text-[#e20934] border-[#e20934] border transition duration-300"
          >
            Update
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-black text-[#e20934] rounded-lg font-semibold hover:bg-[#e20934] hover:text-white border-[#e20934] border transition duration-300"
            onClick={() => document.getElementById("my_modal_5").close()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </dialog>
</div>

      //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      //             {
      //                   myVisas.map(myVisa =>
      //                         <div key={myVisa._id} className="card card-compact bg-base-100  shadow-xl">
      //                               <figure>
      //                                     <img
      //                                           src={myVisa.country_image}
      //                                           alt="Shoes" />
      //                               </figure>
      //                               <div className="card-body">
      //                                     <h2 className="card-title">{myVisa.country_name}</h2>
      //                                     <p>If a dog chews shoes whose shoes does he choose?</p>
      //                                     <div className="card-actions justify-end">
      //                                           <button
      //                                                 onClick={() => handleUpdateClick(myVisa)}
      //                                                 className="btn btn-primary">Update</button>
      //                                           <button
      //                                                 onClick={() => handleDelete(myVisa._id)}
      //                                                 className="btn btn-primary">Delete</button>
      //                                     </div>
      //                               </div>
                                    
      //                         </div>

      //                   )
                       
      //             }
      //             <dialog id="my_modal_5" className="modal">
      //   <div className="modal-box">
      //     <h3 className="font-bold text-lg">Update Visa</h3>
      //     <form onSubmit={handleUpdateSubmit}>
      //       <div className="form-control">
      //         <label className="label">Country Name</label>
      //         <input
      //           type="text"
      //           name="country_name"
      //           value={formData.country_name || ""}
      //           onChange={handleChange}
      //           className="input input-bordered"
      //         />
      //       </div>
      //       <div className="form-control">
      //       <label className="block mb-2 font-semibold">Country Image URL</label>
      //           <input
      //               type="text"
      //               name="country_image"
      //               value={formData.country_image}
      //               onChange={handleChange}
      //               className="w-full border px-3 py-2 rounded mb-4"
      //               required
      //           />
      //       </div>
      //       <div className="form-control">
      //       <label className="block mb-2 font-semibold">Visa Type</label>
      //           <select
      //               name="visa_type"
      //               value={formData.visa_type}
      //               onChange={handleChange}
      //               className="w-full border px-3 py-2 rounded mb-4"
      //               required
      //           >
      //               <option value="Tourist Visa">Tourist Visa</option>
      //               <option value="Student Visa">Student Visa</option>
      //               <option value="Official Visa">Official Visa</option>
      //           </select>
      //       </div>
      //       <div className="form-control">
      //         <label className="label">Processing Time</label>
      //         <input
      //           type="text"
      //           name="processing_time"
      //           value={formData.processing_time || ""}
      //           onChange={handleChange}
      //           className="input input-bordered"
      //         />
      //       </div>
      //       <div className="form-control">
      //       <label className="block mb-2 font-semibold">Required Documents</label>
      //           <div className="mb-4">
      //               {documentOptions.map((doc, idx) => (
      //                   <div key={idx}>
      //                       <label className="flex items-center gap-2">
      //                           <input
      //                               type="checkbox"
      //                               value={doc}
      //                               checked={formData.required_documents.includes(doc)}
      //                               onChange={handleCheckboxChange}
      //                           />
      //                           {doc}
      //                       </label>
      //                   </div>
      //               ))}
      //           </div>
      //       </div>
      //       <div className="form-control">
      //         <label className="label">Fee</label>
      //         <input
      //           type="number"
      //           name="fee"
      //           value={formData.fee || ""}
      //           onChange={handleChange}
      //           className="input input-bordered"
      //         />
      //       </div>
      //       <div className="form-control">
      //       <label className="block mb-2 font-semibold">Description</label>
      //           <textarea
      //               name="description"
      //               value={formData.description}
      //               onChange={handleChange}
      //               className="w-full border px-3 py-2 rounded mb-4"
      //               rows="4"
      //               required
      //           ></textarea>
      //       </div>
      //       <div className="form-control">
      //       <label className="block mb-2 font-semibold">Age Restriction</label>
      //           <input
      //               type="number"
      //               name="age_restriction"
      //               value={formData.age_restriction}
      //               onChange={handleChange}
      //               className="w-full border px-3 py-2 rounded mb-4"
      //               required
      //           />
      //       </div>
      //       <div className="modal-action">
      //         <button type="submit" className="btn btn-success">
      //           Update
      //         </button>
      //         <button
      //           type="button"
      //           className="btn"
      //           onClick={() => document.getElementById("my_modal_5").close()}
      //         >
      //           Cancel
      //         </button>
      //       </div>
      //     </form>
      //   </div>
      // </dialog>
                  


      //       </div>
      );
};

export default MyVisas;