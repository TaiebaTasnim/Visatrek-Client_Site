import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
//import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import { auth } from "../Firebase/firebase.config";


const Login = () => {
      const {signUser}=useContext(AuthContext)
      const [success,setSuccess]=useState(false)
      const [errorMsg,setErrorMsg]=useState('')
      const [show,setShow]=useState(false)
      const navigate=useNavigate()


      const handlelogin=(e)=>
            {
                e.preventDefault();
                const email=e.target.email.value;
                const password=e.target.password.value; 
                setErrorMsg('')
          setSuccess(false)
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

                if(!passwordRegex.test(password))
                {
                  setErrorMsg('Invalid Password')
                  return;
                }
          
          signUser(email,password)
          .then(result=>
            //console.log(result),
            setSuccess(true),
            e.target.reset,
            navigate('/')
          ).catch(error=>{
            setErrorMsg(error.message)
            setSuccess(false)
      }) 
}
      return (
            <div>
                  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form className="card-body" onSubmit={handlelogin}>
        <div className="form-control">
          <label className="label">
            <span className="text-[16px] text-[#086398] font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="text-[16px] text-[#086398] font-semibold">Password</span>
          </label>
          <input type={show ? 'text':'password'} placeholder="password" name="password" className="input input-bordered"  required />
          <button onClick={()=>setShow(!show)} className="absolute text-[#086398] left-[210px] lg:left-[200px] lg:top-[58px] top-[56px]">{show ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</button>
          <label className="label">
          <span
    onClick={() => navigate("/forgetpass", { state: { email} })}
    className="label-text-alt link link-hover text-[#086398] font-semibold cursor-pointer"
  >
    Forgot password?
  </span> 
          </label>
        </div>
        <div className=" mt-6 w-full ">
        <button className="w-full border-2 py-3 rounded-lg px-4 bg-[#086398] text-white ">Login</button>
        </div>
        
        
        {
            success && <h1 className="text-[16px] text-green-600">Log In Successfully!</h1>
        }
        {
            errorMsg && <h1 className="text-[16px] text-red-600">{errorMsg}</h1>
        }
        <h1 className="text-[16px] text-black">New to this site?Please<span className="text-[18px] font-bold text-[#086398]"> <Link to="/register">Register</Link></span></h1>
      </form>
    </div>
  </div>
</div>
                  
            </div>
      );
};

export default Login;