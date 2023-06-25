import React, { useEffect, useState } from 'react';
import "../styles/Home.css";

import { Filter } from '../components/Filter';
import { Card } from '../components/Card';
import {Task} from "../constants/Task";
import {RiAddFill} from "react-icons/ri"
import { useLocation, useNavigate } from 'react-router';


export const Home = () => {


  const [serachedValue, setSearchedValue] = useState(null);
  const [deletedArray, setDeletedArray] = useState(null);
  const [filtered, setFiltered] = useState(Task);

  const navigate = useNavigate();
  const location = useLocation();


//storing the data from the deleted array 
  useEffect(() => {
    if(location.state){
      setDeletedArray(location.state);
    }
  }, [])


// filtering based on completed and pending
const handleOptions = (e) => {
  if(deletedArray){
    if(e === "All"){
    setDeletedArray(deletedArray)
  } else {
    const value = deletedArray.filter((data) => data.status === e)
    setDeletedArray(value)
  }  
  } else {
    if(e === "All"){
      setFiltered(Task)
    } else {
      const value = Task.filter((data) => data.status === e)
      setFiltered(value)
    }
  }
}


// Search  function
const handleSearch = (e) => {
  const searched = Task?.filter((data) => {
    return Object.values(data).some((value) => {
      return value.toString().toLowerCase().includes(e.toLowerCase())
    })
  })
  console.log(searched, "search querry");
  if(searched.length === 5 || searched.length === 0){
    setSearchedValue(null)
  } else {
    setSearchedValue(searched)
  }
}

// navigation to add new task page
const handleNavigate = () => {
  navigate("/add-task")
}

  return (
    <div className='container'>
        <Filter onOptions={handleOptions} onSearch={handleSearch}/>
        {serachedValue ?
        <Card data={serachedValue} />
        :
        <Card data={deletedArray ? deletedArray : filtered} />
        }
        <div className='add-task' onClick={handleNavigate}>
          <RiAddFill color='white' className='add' />
        </div>
    </div>
  )
}
