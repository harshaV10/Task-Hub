import React from 'react';
import "../styles/Card.css";
import { useNavigate } from 'react-router';

export const Card = ({data}) => {


    const navigate = useNavigate();

    const handleClick = (data) => {
        navigate(`/${data.title}`, {state: data})
    }

  return (
    <div className='card-container' >
        {data?.map((data, index) => {
        return (
        <div key={index} className='card' onClick={() => handleClick(data)}>
            <div className='card-text'>
            <h4>{data?.title}</h4>
            <p>Due: {data?.dueDate}</p>
            </div>
            <div className='status'>
                <p style={{color:data?.status === "Completed" ? "green" : "red"}}>
                    {data?.status}
                </p>
            </div>
        </div>
        )})}
    </div>
  )
}
