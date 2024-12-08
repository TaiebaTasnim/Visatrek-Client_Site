import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


const Register = () => {
      const {createUser,profileUpdate,setUser}=useContext(AuthContext)
      const [success,setSuccess]=useState(false)
      const [errorMsg,setErrorMsg]=useState('')
      const [show,setShow]=useState(false)

      const provider=new GoogleAuthProvider()
      
      const navigate=useNavigate()
      const handleSignup=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
          navigate('/')
          
          //console.log(result)
          //setUser(result.user)
    
        }).catch(error=>{
          //console.log('error:',error)
          //setUser(null)
        });
      }

      const handleregister=(e)=>
            {
                e.preventDefault();
                const name=e.target.name.value;
                const email=e.target.email.value;
                const photo=e.target.photo.value;
                const password=e.target.password.value; 
                //console.log(name,email,photo,password)
                setErrorMsg('')
                setSuccess(false)
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

                if(!passwordRegex.test(password))
                {
                  setErrorMsg('Password requirment is not fullfiled.')
                  return;
                }
                createUser(email,password)
                .then(result=>{

                  
                  //console.log(result),
                  setSuccess(true)
                  e.target.reset,
                  navigate('/')
                  const newUser={name,email,photo}
                  //set newUser to DB
                  fetch('https://visatrek-server-site.vercel.app/users',{
                        method:'Post',
                        headers:{
                              'content-type':'application/json'
                        },
                        body:JSON.stringify(newUser)
                  })
                  .then(res => res.json())
                  .then(data =>{
                        //console.log('created newUser',data)

                  })
                  e.target.reset
                  //navigate('/login')
                  profileUpdate({ displayName:name, photoURL:photo})
                  .then(()=>{
                    const updatedUser = {
                      ...auth.currentUser, // Firebase's current user object
                      displayName: name,
                      photoURL: photo,
                    };
                    setUser(updatedUser); 
                  } )
                  .catch(error=>{
                        setErrorMsg(error.message)
                        setSuccess(false)
                  })
            })
                  
                  .catch(error=>{
                  setErrorMsg(error.message)
                  setSuccess(false)
            })
            }
      return (
        <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/bFGz7FV/visa-9.jpg')", 
      }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      
      <div
        className="z-10 w-[90%] max-w-md my-10 px-8 py-10 rounded-lg shadow-xl bg-white bg-opacity-15 backdrop-blur-md border border-[#e20934]"
        data-aos="fade-up"
      >
        <h1
          className="text-3xl font-bold text-center text-[#e20934] mb-6"
          data-aos="fade-down"
        >
          Register
        </h1>
        <form onSubmit={handleregister}>
          <div className="form-control mb-4" >
            <label className="label">
              <span className="text-[#e20934] font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white bg-opacity-30 text-black"
              name="name"
              required
            />
          </div>
          <div className="form-control mb-4" >
            <label className="label">
              <span className="text-[#e20934] font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white bg-opacity-30 text-black"
              name="email"
              required
            />
          </div>
          <div className="form-control mb-4" >
            <label className="label">
              <span className="text-[#e20934] font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full bg-white bg-opacity-30 text-black"
              name="photo"
              required
            />
          </div>
          <div className="form-control mb-6 relative" >
            <label className="label">
              <span className="text-[#e20934] font-semibold">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className="input input-bordered w-full bg-white bg-opacity-30 text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute text-[#e20934] right-3 top-[55px]"
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <div className="form-control mb-6" >
            <button
              type="submit"
              className="py-2 px-4 bg-[#e20934] text-white rounded-lg font-semibold transition duration-500 ease-in-out relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#e20934] to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition duration-500 ease-in-out">
                Register
              </span>
            </button>
          </div>
          {success && (
            <h1
              className="text-[16px] text-green-400 text-center"
              data-aos="zoom-in"
            >
              Registered Successfully!
            </h1>
          )}
          {errorMsg && (
            <h1
              className="text-[16px] text-red-700 text-center"
              data-aos="zoom-in"
            >
              {errorMsg}
            </h1>
          )}
          <p className="text-center text-white">
            Already have an account?{" "}
            <span className="font-bold text-[#e20934]">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
        <div className="divider mt-0 text-[#e20934]">OR</div>
        <div onClick={handleSignup}  className="flex justify-center items-center py-3 rounded-lg px-4 border-[#e20934] border-2 text-white font-bold  gap-3 mb-4 mx-3">
        <FaGoogle className="text-[#e20934]"></FaGoogle>
        <button className=""> Login with Google</button>

        </div>
      </div>
    </div>
//             <div>
//                   <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
 
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//     <form className="card-body" onSubmit={handleregister}>
//       <div className="form-control">
        
//         <label className="label">
//           <span className="text-[16px] text-[#086398] font-semibold">Name</span>
//         </label>
//         <input type="text" placeholder="Your Name" className="input input-bordered"  name="name" required />
//       </div>
//         <div className="form-control">
        
//           <label className="label">
//             <span className="text-[16px] text-[#086398] font-semibold">Email</span>
//           </label>
//           <input type="email" placeholder="email" className="input input-bordered"  name="email" required />
//         </div>
//         <div className="form-control">
        
//           <label className="label">
//             <span className="text-[16px] text-[#086398] font-semibold">Photo-URL</span>
//           </label>
//           <input type="text" placeholder="photo-url" className="input input-bordered"  name="photo" required />
//         </div>
//         <div className="form-control relative">
//           <label className="label">
//             <span className="text-[16px] text-[#086398] font-semibold">Password</span>
//           </label>
//           <input type={show ? 'text':'password'} placeholder="password" className="input input-bordered"  name="password" required />
//           <button onClick={()=>setShow(!show)} className="absolute text-[#086398] left-[210px] lg:left-[210px] md:left-[350px] lg:top-[58px] top-[58px]">{show ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</button>
          
//         </div>
//         <div className=" mt-6 w-full border-2">
//         <button className="w-full border-2 py-3 rounded-lg px-4 bg-[#086398] text-white ">Register</button>
//         </div>
        

//         {
//             success && <h1 className="text-green-600 text-[16px] font-bold">Register Successfully!!</h1>
//         }
//         {
//             errorMsg && <h1 className="text-red-600 text-[16px] font-bold">{errorMsg}</h1>
//         }
//         <h1 className="text-[16px] text-black">Allready have an account?<span className="text-[18px] font-bold text-[#086398]"> <Link to="/login">Log in</Link></span></h1>
//       </form>
//     </div>
//   </div>
// </div>
                  
//             </div>
      );
};

export default Register;