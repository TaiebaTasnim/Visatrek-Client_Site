import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";


const AllVisa = () => {
      const loadedVisa = useLoaderData()
      const [allVisas, setAllVisas] = useState(loadedVisa)
      //console.log(allVisas)
      const handledetails=(id)=>{
            //console.log(id)
            

      }
      return (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {
                        allVisas.map(allVisa => 
                              <div key={allVisa._id}>
                                     <div  className="card card-compact bg-base-100  shadow-xl">
                                    <figure>
                                          <img
                                                src={allVisa.country_image}
                                                alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                          <h2 className="card-title">{allVisa.country_name}</h2>
                                          <p>If a dog chews shoes whose shoes does he choose?</p>
                                          <div className="card-actions justify-end">
                                                <button onClick={()=>handledetails(allVisa._id)}
                                                 className="btn btn-primary"><NavLink to={`/visaDetails/${allVisa._id}`}>See Details</NavLink></button>
                                          </div>
                                    </div>
                              </div>

                              </div>

                             
                        )
                  }

            </div>
      );
};

export default AllVisa;