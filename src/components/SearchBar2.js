import React, { useState } from 'react';
import { FaSearch} from  "react-icons/fa";
import axios from 'axios';


const SearchBar = ({setResult}) => {
    const [input, setInput] = useState("")

    const API_URL = "https://jsonplaceholder.typicode.com/users"

    const userData = (value) => {
        axios(API_URL)
         .then((response) => {
            const result = response.data.filter((user) => {
              return (
                user && user.name.toLowerCase().includes(value)
              );
            });
      
            // Update the state with the filtered data
            setResult([...result]);
            console.log(result);
          })
         .catch((error) => console.log(error));
      };

    const handleChange = (value) =>{
        setInput(value)
        console.log(value)
        userData(value)
    }



    return ( 
        <div className='bg-[#2f3134] w-full rounded-lg h-[12] p-4 shadow-lg flex items-center'>
            <FaSearch className='text-violet-500 cursor-pointer'/>
            <input 
            type="text" 
            placeholder='Type something...'
            className='bg-transparent border-none outline-none text-xl ml-1 placeholder:text-grey-300 text-white w-full'
            onChange={(e) => handleChange(e.target.value) }
            />
        </div>
    );
}
 
export default SearchBar;