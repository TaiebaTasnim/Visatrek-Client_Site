import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

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
        console.log(newVisaData)

        try {
            // Use fetch to send the form data to the backend
            const response = await fetch('http://localhost:4000/visas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVisaData),
            });

            // Handle the response
            if (response.ok) {
                alert('Visa added successfully!');
                console.log('Response from server:', await response.json());
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
            } else {
                alert('Failed to add visa!');
            }
        } catch (error) {
            console.error('Error adding visa:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Visa</h2>
            <form onSubmit={handleSubmit}>
                {/* Country Image */}
                <label className="block mb-2 font-semibold">Country Image URL</label>
                <input
                    type="text"
                    name="country_image"
                    value={formData.country_image}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Country Name */}
                <label className="block mb-2 font-semibold">Country Name</label>
                <input
                    type="text"
                    name="country_name"
                    value={formData.country_name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Visa Type */}
                <label className="block mb-2 font-semibold">Visa Type</label>
                <select
                    name="visa_type"
                    value={formData.visa_type}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                >
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Official Visa">Official Visa</option>
                </select>

                {/* Processing Time */}
                <label className="block mb-2 font-semibold">Processing Time</label>
                <input
                    type="text"
                    name="processing_time"
                    value={formData.processing_time}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Required Documents */}
                <label className="block mb-2 font-semibold">Required Documents</label>
                <div className="mb-4">
                    {documentOptions.map((doc, idx) => (
                        <div key={idx}>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={doc}
                                    checked={formData.required_documents.includes(doc)}
                                    onChange={handleCheckboxChange}
                                />
                                {doc}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <label className="block mb-2 font-semibold">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    rows="4"
                    required
                ></textarea>

                {/* Age Restriction */}
                <label className="block mb-2 font-semibold">Age Restriction</label>
                <input
                    type="number"
                    name="age_restriction"
                    value={formData.age_restriction}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Fee */}
                <label className="block mb-2 font-semibold">Fee</label>
                <input
                    type="number"
                    name="fee"
                    value={formData.fee}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Validity */}
                <label className="block mb-2 font-semibold">Validity</label>
                <input
                    type="text"
                    name="validity"
                    value={formData.validity}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Application Method */}
                <label className="block mb-2 font-semibold">Application Method</label>
                <input
                    type="text"
                    name="application_method"
                    value={formData.application_method}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded mb-4"
                    required
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
                >
                    Add Visa
                </button>
            </form>
        </div>
    );
};

export default AddVisa;
