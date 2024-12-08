import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const FilterVisa = () => {
      const [visas, setVisas] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams)
  const decodeVisaType = (visaType) => {
      return visaType?.replace("-", " "); 
    };

  
  const visaType = decodeVisaType(searchParams.get("visaType"));

  useEffect(() => {
    fetchVisas(visaType);
  }, [visaType]);

  const fetchVisas = (visaType) => {
    let url = "https://visatrek-server-site.vercel.app/visas5";
    if (visaType) {
      url += `?visaType=${visaType}`;
    }
    console.log("Fetching URL:", url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
            console.log(data)
            
            setVisas(data)})
      .catch((error) => console.error("Error fetching visas:", error));
  };
      return (
            <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-[#e20934] font-bold">{visa.country}</h3>
            <p>
              <strong>Type:</strong> {visa.visa_type}
            </p>
            <p>
              <strong>Processing Time:</strong> {visa.processing_time}
            </p>
            <p>
              <strong>Fee:</strong> ${visa.fee}
            </p>
          </div>
        ))}
      </div>
    
                  
            </div>
      );
};

export default FilterVisa;