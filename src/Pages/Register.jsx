import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
      const {createUser}=useContext(AuthContext)
      const [success,setSuccess]=useState(false)
      const [errorMsg,setErrorMsg]=useState('')
      const [show,setShow]=useState(false)
      
      const navigate=useNavigate()

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
                  const newUser={name,email,photo}
                  //set newUser to DB
                  fetch('http://localhost:4000/users',{
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
                  })
                  .catch(error=>{
                  setErrorMsg(error.message)
                  setSuccess(false)
            })
            }
      return (
            <div>
                  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form className="card-body" onSubmit={handleregister}>
      <div className="form-control">
        
        <label className="label">
          <span className="text-[16px] text-[#086398] font-semibold">Name</span>
        </label>
        <input type="text" placeholder="Your Name" className="input input-bordered"  name="name" required />
      </div>
        <div className="form-control">
        
          <label className="label">
            <span className="text-[16px] text-[#086398] font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  name="email" required />
        </div>
        <div className="form-control">
        
          <label className="label">
            <span className="text-[16px] text-[#086398] font-semibold">Photo-URL</span>
          </label>
          <input type="text" placeholder="photo-url" className="input input-bordered"  name="photo" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="text-[16px] text-[#086398] font-semibold">Password</span>
          </label>
          <input type={show ? 'text':'password'} placeholder="password" className="input input-bordered"  name="password" required />
          <button onClick={()=>setShow(!show)} className="absolute text-[#086398] left-[210px] lg:left-[210px] md:left-[350px] lg:top-[58px] top-[58px]">{show ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>}</button>
          
        </div>
        <div className=" mt-6 w-full border-2">
        <button className="w-full border-2 py-3 rounded-lg px-4 bg-[#086398] text-white ">Register</button>
        </div>
        

        {
            success && <h1 className="text-green-600 text-[16px] font-bold">Register Successfully!!</h1>
        }
        {
            errorMsg && <h1 className="text-red-600 text-[16px] font-bold">{errorMsg}</h1>
        }
        <h1 className="text-[16px] text-black">Allready have an account?<span className="text-[18px] font-bold text-[#086398]"> <Link to="/login">Log in</Link></span></h1>
      </form>
    </div>
  </div>
</div>
                  
            </div>
      );
};

export default Register;