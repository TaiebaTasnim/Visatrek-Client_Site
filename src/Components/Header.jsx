import { Link, NavLink } from "react-router-dom";
import ThemeControler from "./ThemeControler";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";



const Header = () => {
      const {user,signout}=useContext(AuthContext)
      const links =
       <>
       <nav className="">
  <ul className="flex items-center space-x-6 p-4">
    <li>
      <NavLink to="/"  className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 px-4 py-2 rounded"
                : "text-gray-700 hover:text-blue-600 px-4 py-2"
            } >
        Home
      </NavLink>
    </li>
    <li className="relative">
      <details className="group">
        <summary className="cursor-pointer text-gray-700 hover:text-blue-600">
          <NavLink to="/allVisa"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-blue-600 px-4 py-2 rounded"
              : "text-gray-700 hover:text-blue-600 px-4 py-2"
          }
          >
            All Visas</NavLink>
        </summary>
        <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md border rounded-md z-50 flex flex-col gap-2">
          <li>
            <NavLink
              to="/student-visa"
              className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-600 px-4 py-2 rounded"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              
            >
              Student Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tourist-visa"
              className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-600 px-4 py-2 rounded"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              
            >
              Tourist Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business-visa"
              className={({ isActive }) =>
                  isActive
                    ? "bg-white text-blue-600 px-4 py-2 rounded"
                    : "text-gray-700 hover:text-blue-600 px-4 py-2"
                }
              
            >
              Business Visa
            </NavLink>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <NavLink to="/addVisa"  className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 px-4 py-2 rounded"
                : "text-gray-700 hover:text-blue-600 px-4 py-2"
            }>
        Add Visa
      </NavLink>
    </li>
    <li>
      <NavLink
        to={`myVisas/${user?.email}`}
        className={({ isActive }) =>
            isActive
              ? "bg-white text-blue-600 px-4 py-2 rounded"
              : "text-gray-700 hover:text-blue-600 px-4 py-2"
          }
        
      >
        My Added Visas
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/myVisaApp"
        className={({ isActive }) =>
            isActive
              ? "bg-white text-blue-600 px-4 py-2 rounded"
              : "text-gray-700 hover:text-blue-600 px-4 py-2"
          }
        
      >
        My Visa Applications
      </NavLink>
    </li>
  </ul>
</nav>

       

          
    </>

     const handlesignout=()=>
      {
         signout()
         .then((result)=>result.user)
         .catch(error=>error.message)
      }
      return (
            <div>
                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          {links}
                                    </ul>
                              </div>
                              <a className="btn btn-ghost text-xl">Visatrek</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <div className="flex gap-5 text-[16px] text-[#0B0B0BB3] font-medium">
                                    {links}

                                    </div>
                                    

                              </ul>
                        </div>
                        <div className="navbar-end">
                        {
                              
                                    user ? <button onClick={handlesignout} className="py-3 rounded-lg px-4 bg-[#086398] text-white"><Link to="/">Sign Out</Link></button>
                                         :<div>
                                           <button className="py-3 rounded-lg px-4 bg-[#086398] text-white"><Link to="/login">Log In</Link></button>
                                           <button className="py-3 rounded-lg px-4 bg-[#086398] text-white"><Link to="/register">Register</Link></button>
                                         </div>
                                  
                        }
                              
                              
                              <ThemeControler></ThemeControler>
                        </div>
                  </div>

            </div>
      );
};

export default Header;