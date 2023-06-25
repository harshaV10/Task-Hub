import React from 'react'
import  Logo from "../assets/logo.png";
import Profile from "../assets/profile.avif"



export const Topbar = () => {
  return (
    <div className='top-bar'>
            <img src={Logo} alt="Logo" className='logo' />
            <img src={Profile} alt="Profile" className='profile-pic' />
    </div>
  )
}
