import { Link } from "react-router-dom";


const VisaCard = ({ visa }) => {
  const {_id, country_image, country_name,visa_type,processing_time,fee,validity,application_method } = visa

  return (
    <div className="card card-compact bg-white shadow-2xl border-[#e20934] border-2">
      <figure className="p-6 ">
        <img
          src={country_image}
          alt={`${country_name} image`}
          className="w-full h-52 object-cover rounded-lg"
        />
      </figure>
      <div className=" pl-6">
        <h2 className="card-title text-[#e20934] text-2xl font-bold ">
          {country_name}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Visa Type:</span> {visa_type}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Processing Time:</span>{" "}
          {processing_time}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Fee:</span> {fee}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Validity:</span> {validity}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Application Method:</span>{" "}
          {application_method}
        </p>
        <div className="card-actions justify-end m-3">
          <Link to={`visaDetails/${_id}`}>
          <button className=" py-3 px-6 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group text-center">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out text-center">
                    See Details
                    
                  </span>
                  
                </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;