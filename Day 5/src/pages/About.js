import React from 'react'
import './ab.css';
import logo from "../assets/in.png"
const Func= ({isLoggedIn}) => {
  return (
    <div className='a'>



   
    <div className='flex justify-center items-center text-white text-3xl  h-screen passage'>
        <div className='ab'>
    <img src={logo} alt='Logo' width={160} height={32}  loading='lazy' />
    </div>
<center>
    <h4>We are a leading reservation platform based Coimbatore.<br></br>
             We are dedicated in providing seamless dining experience for both customers and restaurants.<br></br>
             Our user friendly platform allows users to effortlessly discover and book their favourite restaurants
             while also offering restaurants a powerful tool to manage their reservations and optimize their
             operations.<br></br> With a wide range of dining options and a commitment to exceptional customer service, <br></br>we are the go to 
             choice for all your restaurant reservation needs. </h4>
             </center>
    </div ></div>
  )
}

export default Func