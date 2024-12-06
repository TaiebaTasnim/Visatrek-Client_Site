import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";


const VisaCards = () => {
      const loadedVisa=useLoaderData()
      const [visas,setVisas]=useState(loadedVisa)
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {
                        visas.map(visa=><VisaCard key={visa._id} visa={visa}></VisaCard>)
                  }
                  
            </div>
      );
};

export default VisaCards;