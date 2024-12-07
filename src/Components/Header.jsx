import { Link, NavLink, useLoaderData } from "react-router-dom";
import ThemeControler from "./ThemeControler";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import icon from '../assets/icon.png'
//import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";







const Header = () => {
  const { user, signout } = useContext(AuthContext)

  console.log(user)

  const links =
    <>
      <nav className="">
        <ul className="flex items-center  p-0">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive
                ? " text-[#E3F2FD] px-4 py-2 "
                : "text-white  "
            } >
              Home
            </NavLink>
          </li>
          <li className="relative">
            <details className="group">
              <summary className="cursor-pointer" >
                <NavLink to="/allVisa"
                  className={({ isActive }) =>
                    isActive
                      ? " text-[#E3F2FD] px-4 py-2"
                      : "text-white px-4 py-2"
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
                        ? " text-[#E3F2FD] px-4 py-2 rounded"
                        : "text-[#e20934]  px-4 py-2"
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
                        ? "text-[#E3F2FD]  px-4 py-2 rounded"
                        : "text-[#e20934]  px-4 py-2"
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
                        ? " text-[#E3F2FD] px-4 py-2 rounded"
                        : "text-[#e20934]  px-4 py-2"
                    }

                  >
                    Business Visa
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/addVisa" className={({ isActive }) =>
              isActive
                ? " text-[#E3F2FD] px-4 py-2 rounded"
                : "text-white  px-4 py-2"
            }>
              Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`myVisas/${user?.email}`}
              className={({ isActive }) =>
                isActive
                  ? " text-[#E3F2FD] px-4 py-2 rounded"
                  : "text-white  px-4 py-2"
              }

            >
              My Visas
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/myVisaApp"
              className={({ isActive }) =>
                isActive
                  ? " text-[#E3F2FD]   rounded"
                  : "text-white   "
              }

            >
              My Applications
            </NavLink>
          </li>
        </ul>
      </nav>




    </>

  const handlesignout = () => {
    signout()
      .then((result) => result.user)
      .catch(error => error.message)
  }
  return (
    <div>
      <div>
        <div className="navbar container mx-auto w-[90%]   text-white ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                className="absolute left-0 top-full menu menu-sm dropdown-content bg-white text-[#e20934] rounded-box z-50 mt-3 w-48 p-3 shadow-lg ">

                <nav className="">
                  <ul className="flex flex-col justify-center items-center  font-semibold  p-0">
                    <li className="">
                      <NavLink to="/" className={({ isActive }) =>
                        isActive
                          ? " text-gray-600 px-4 py-2 text-[16px]"
                          : "text-[#e20934]  px-4 py-2 text-[16px] "
                      } >
                        Home
                      </NavLink>
                    </li>
                    <li className="relative">
                      <details className="group">
                        <summary className="cursor-pointer" >
                          <NavLink to="/allVisa"
                            className={({ isActive }) =>
                              isActive
                                ? " text-gray-600 px-4 py-2 text-[16px]"
                                : "text-[#e20934]  px-4 py-2 text-[16px]"
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
                                  ? " text-gray-600 px-4 py-2 rounded "
                                  : "text-[#e20934]  px-4 py-2 "
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
                                  ? "text-gray-600  px-4 py-2 rounded "
                                  : "text-[#e20934]  px-4 py-2 "
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
                                  ? " text-gray-600 px-4 py-2 rounded "
                                  : "text-[#e20934]  px-4 py-2 "
                              }

                            >
                              Business Visa
                            </NavLink>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <NavLink to="/addVisa" className={({ isActive }) =>
                        isActive
                          ? " text-gray-600 px-4 py-2 rounded text-[16px]"
                          : "text-[#e20934]  px-4 py-2 text-[16px]"
                      }>
                        Add Visa
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`myVisas/${user?.email}`}
                        className={({ isActive }) =>
                          isActive
                            ? " text-gray-600 px-4 py-2 rounded text-[16px]"
                            : "text-[#e20934]  px-4 py-2 text-[16px]"
                        }

                      >
                        My Visas
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        to="/myVisaApp"
                        className={({ isActive }) =>
                          isActive
                            ? " text-gray-600 px-4 py-2  rounded text-[16px]"
                            : "text-[#e20934]  text-center text-[16px] "
                        }

                      >
                        My Applications
                      </NavLink>
                    </li>
                  </ul>
                </nav>



              </ul>
            </div>
            <div className="flex items-center gap-1">
              {/* <img src={icon} alt="" className="w-4 h-4 hidden md:block" /> */}
              <a className=" normal-case text-2xl font-bold tracking-wide font-display ">
                Visatrek
              </a>

            </div>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal ">
              <div className="flex  text-[18px] font-semibold">
                {links}
              </div>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            {user ? (
              <div className="flex items-center gap-3">
                {/* User Photo */}
                <img
                  src={user.photoURL}
                  alt="User"
                  data-tooltip-id="userTooltip" // Set the id for tooltip targeting
                  className="w-9 h-9 border-2 border-white rounded-full object-cover cursor-pointer relative"
                />
                <ReactTooltip
                  id="userTooltip" // Match the id of the element
                  place="bottom"
                  clickable // Allows interaction with the tooltip
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
                    fontSize: "14px",
                    padding: "10px",
                    display:'absolute',
                    left:'0px',
                    top:'100%',
                    zIndex:'50',

                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="font-semibold">{user.displayName}</span>
                    <button onClick={handlesignout} className="py-2 px-2 text-center bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                   <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                     <Link to="/">LogOut</Link>
                   </span>
                 </button>
                    {/* <button
                      onClick={handlesignout}
                      className="mt-2 py-1 px-3 bg-[#e20934] text-white rounded-lg font-semibold hover:bg-[#c1072e] transition duration-300"
                    >
                      Logout
                    </button> */}
                  </div>
                </ReactTooltip>
              </div>
              // <div className="flex items-center gap-1">
              //   <img
              //     src={user.photoURL}
              //     alt="user photo"
              //     className="w-9 h-9 border-2 border-white rounded-full object-cover"
              //   />
              //   <button onClick={handlesignout} className="py-2 px-2 text-center bg-white text-[#e20934] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
              //     <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              //     <span className="relative group-hover:text-white transition duration-500 ease-in-out">
              //       <Link to="/">SignOut</Link>
              //     </span>
              //   </button>
              //   {/* <button

              //     className="py-2 px-5 bg-white text-[#e20934] rounded-lg font-semibold  transition duration-300">
              //     <Link to="/">Sign Out</Link>
              //   </button> */}
              // </div>
            ) : (
              <div className="flex gap-1 items-center">
                <button className="py-2 px-2 bg-white text-[#e20934] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    <Link to="/login">LogIn</Link>
                  </span>
                </button>


                {/* <button className="py-2 px-3 bg-white text-[#e20934] rounded-lg font-semibold  transition duration-300">
            <Link to="/login">LogIn</Link>
          </button> */}
                <button className="py-2 px-2 bg-white text-[#e20934] rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                    <Link to="/register">Register</Link>
                  </span>
                </button>
              </div>
            )}
            <div className="hidden md:block w-0 ">
              <ThemeControler ></ThemeControler>

            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Header;


