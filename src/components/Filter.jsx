import React, { useState } from 'react';
import "../styles/Filter.css";
import {BiSearchAlt2} from "react-icons/bi";

export const Filter = ({onOptions, onSearch}) => {
  
  const [options, setOptions] = useState("All")
  
  const filterOptions = ["All", "Completed", "Pending"];


  const handleSearch = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    onSearch(value)
  }
  
  const handleOptions = (data) => {
    setOptions(data)
    onOptions(data)
  }


  return (
    <div className='filter'>
      <div className='search-container'>
        <input 
          type="text" 
          name="search"
          onChange={handleSearch}
          className='search-bar'
          placeholder="Search Task"
        />
        <BiSearchAlt2 
          className='search-icon'
        />
      </div>
        <div className='options'>
          {filterOptions?.map((data, index) => (
            <p 
              key={index}
              style={{
                color: options === data ? "black" : "#B2B2B2",
                fontWeight: options === data ? "500" : "400"
              }}
              onClick={() => handleOptions(data)}
              className='option-text'
            >
              {data}
            </p>
          ))}
        </div>
    </div>
  )
};
