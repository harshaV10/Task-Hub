import React from 'react'
import {MdArrowBack} from "react-icons/md";
import { useNavigate } from 'react-router-dom';


export const BackButton = () => {
  
    const navigate= useNavigate();

    const handleGoBack =() => {
        navigate(-1)
    }
 
  
  
  
    return (
    <div className='button-container' onClick={handleGoBack}>
        <MdArrowBack />
    </div>
  )
}
