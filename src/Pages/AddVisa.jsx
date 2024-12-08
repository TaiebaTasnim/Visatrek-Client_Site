import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
import Swal from "sweetalert2";

const AddVisa = () => {
      const {user}=useContext(AuthContext)
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            required_documents: checked
                ? [...prev.required_documents, value]
                : prev.required_documents.filter((doc) => doc !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email=user.email
        //console.log('user email')

        // Create a payload to send
        const newVisaData = { ...formData, email};
        //console.log(newVisaData)

        
            // Use fetch to send the form data to the backend
             fetch('https://visatrek-server-site.vercel.app/visas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVisaData),
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId)
                {
                    Swal.fire({
                        title: "Visa Added!",
                        text: "Visa information has been added successfully.",
                        icon: "success",
                      });
                      setFormData({
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


                }
            })


            // Handle the response
            // if (response.ok) {
                

            //     // alert('Visa added successfully!');
            //     // console.log('Response from server:', await response.json());
                
            // } else {
            //     Swal.fire({
            //         icon: "error",
            //         title: "Oops...",
            //         text: "Failed to add visa!",
            //         //footer: '<a href="#">Why do I have this issue?</a>'
            //       });
            // }
        
    };

    return (
        
       <div className="bg-black">
        <div className="max-w-4xl mx-auto bg-black text-white p-8 shadow-lg rounded-md">
  <h2 className="text-3xl font-bold mb-6 text-center text-[#e20934] flex items-center justify-center gap-2">
    <span className="material-icons"></span> Add Visa
  </h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Row 1: Country Image and Name */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Country Image */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Country Image URL
        </label>
        <input
          type="text"
          name="country_image"
          value={formData.country_image}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>

      {/* Country Name */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Country Name
        </label>
        <input
          type="text"
          name="country_name"
          value={formData.country_name}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>
    </div>

    {/* Row 2: Visa Type and Processing Time */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Visa Type */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Visa Type
        </label>
        <select
          name="visa_type"
          value={formData.visa_type}
          onChange={handleChange}
          className="w-full  border border-[#e20934] bg-black px-3 py-2 rounded text-white focus:outline-none focus:border-white "
          required
        >
           
            <option value="Tourist Visa" className="">Tourist Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Official Visa">Official Visa</option>

            
          
        </select>
      </div>

      {/* Processing Time */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Processing Time
        </label>
        <input
          type="text"
          name="processing_time"
          value={formData.processing_time}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>
    </div>

    {/* Row 3: Required Documents */}
    <div>
      <label className="font-semibold flex items-center gap-2 mb-2">
        <span className="material-icons text-[#e20934]"></span> Required Documents
      </label>
      <div className="grid grid-cols-2 gap-4">
        {documentOptions.map((doc, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={doc}
              checked={formData.required_documents.includes(doc)}
              onChange={handleCheckboxChange}
              className="accent-[#e20934]"
            />
            <span>{doc}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Row 4: Description */}
    <div>
      <label className="font-semibold flex items-center gap-2 mb-2">
        <span className="material-icons text-[#e20934]"></span> Description
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
        rows="4"
        required
      ></textarea>
    </div>

    {/* Row 5: Age Restriction, Fee, Validity, and Application Method */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Age Restriction */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Age Restriction
        </label>
        <input
          type="number"
          name="age_restriction"
          value={formData.age_restriction}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>

      {/* Fee */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Fee
        </label>
        <input
          type="number"
          name="fee"
          value={formData.fee}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>

      {/* Validity */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Validity
        </label>
        <input
          type="text"
          name="validity"
          value={formData.validity}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>

      {/* Application Method */}
      <div>
        <label className="font-semibold flex items-center gap-2 mb-2">
          <span className="material-icons text-[#e20934]"></span> Application Method
        </label>
        <input
          type="text"
          name="application_method"
          value={formData.application_method}
          onChange={handleChange}
          className="w-full border border-[#e20934] bg-transparent px-3 py-2 rounded text-white focus:outline-none focus:border-white"
          required
        />
      </div>
    </div>

    {/* Submit Button */}
    <button className="w-full py-2 px-2 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    <Link to="">Add Visa</Link>
                  </span>
                </button>
  </form>
</div>

       </div>

        
    );
};

export default AddVisa;
