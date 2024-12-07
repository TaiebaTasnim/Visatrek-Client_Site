import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const error=useRouteError()
      const navigate=useNavigate()
      
      return (
            <div className='flex flex-col justify-center items-center min-h-screen gap-3'>
                  <h1 className='text-5xl'>Ooops!!!</h1>
                  <p>Sorry, an unexpected error has occurred.</p>
                 <p>
                    <i>{error.statusText || error.message} </i>
                </p>
                <button onClick={()=>navigate('/')} className="py-3 rounded-lg px-4 bg-[#086398] text-white">Go Back </button>
            </div>
      );
};

export default ErrorPage;