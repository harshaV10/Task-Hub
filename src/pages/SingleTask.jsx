import React from 'react';
import "../styles/SingleTask.css"
import { useLocation, useNavigate } from 'react-router'
import { BackButton } from '../components/BackButton';
import { Task } from '../constants/Task';

export const SingleTask = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state;
    
    const deleteTask = () => {
        const deletedTask = Task.filter((task) => task.title !== data.title)
        navigate('/', {state: deletedTask})
        console.log(deletedTask);
    }

  return (
    <>
        <BackButton />
        <div className='single-task'>
            <h3>{data?.title}</h3>
            <p className="text">{data?.description}</p>
            <p>Due Date: <span>{data?.dueDate}</span></p>
            <button className='button' onClick={deleteTask}>
                Delete
            </button>
        </div>
    </>
  )
}
