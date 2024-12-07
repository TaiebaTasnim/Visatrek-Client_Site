import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import Route from "./Routes/Route.jsx"
import AuthProvider from './Provider/AuthProvider.jsx'
import "aos/dist/aos.css"

import "react-tooltip/dist/react-tooltip.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={Route} />
   </AuthProvider>
  </StrictMode>,
)
