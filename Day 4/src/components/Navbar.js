import React from 'react'
import logo from "../assets/Logo.png"
import {Link} from "react-router-dom"
import { toast } from 'react-hot-toast';

import './Home.css';
const Navbar = (props) => {
    let isLoggedIn =props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='b'>

    
    <div className='flex justify-between items-center w-11/12 max-w-[1150px] py-4 mx-auto  '>
        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
        </Link>

        <nav >
            <ul className='flex gap-x-6 text-richblack-100' >
                <li>
                    <Link to="/" style={{marginLeft:"25px",color:"black",fontSize:20}}>
                      <b>Home</b></Link>

                </li>
                <li>
                    <Link to="/about" style={{marginLeft:"25px",color:"black",fontSize:20}}>
                      <b>About </b>   </Link>
                </li>                <li>
                    <Link to="" style={{marginLeft:"25px",color:"black",fontSize:20}}><b>Contact</b></Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-4'> 
            { !isLoggedIn &&
              <Link to="/login">
        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    Login
                 </button>

              </Link>   
            }
            {  !isLoggedIn &&
              <Link to="/signup">
                 <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    Sign Up
                 </button>
                 
              </Link>   
            }            
            { isLoggedIn &&
                <Link to="/">
                   <button
                   className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                   onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                   }}>
                      Log Out
                   </button>
                </Link>   
              }            
              { isLoggedIn &&
                <Link to="/dashboard">
                   <button
                   className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                   >
                      Dashboard
                   </button>
                </Link>   
              }
        </div>
    </div>
    
    </div>
  )
}

export default Navbar