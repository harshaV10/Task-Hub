import React,{useState} from 'react';
import "../styles/AddTask.css";
import { BackButton } from '../components/BackButton';
import { Task } from '../constants/Task';
import { useNavigate } from 'react-router';

export const AddTask = () => {


  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.title.value,
      dueDate: e.target.dueDate.value,
      description: e.target.description.value,
      status: "Pending"
    }
    Task.push(newTask)   // if we refresh the data will be erased, hence it is not in the database or localstorage
    navigate('/')        //navigating back to home
  }


  return (
    <div>
      <BackButton />
      <form onSubmit={handleSubmit} className='task-form'>
        <div className='input-container'>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder='Title' required />
        </div>
        <div className='input-container'>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" name="dueDate" required />
        </div>
        <div className='input-container'>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" placeholder='Description' required />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}
