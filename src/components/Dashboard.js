// TODO: Задизайнить и сверстать панель. 




import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Dashboard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (data) {
      setIsOpen(true);
    }
  }, [data]);

  if (!data ||!isOpen) return null;

  const handleClose = () =>{
    setIsOpen(false)
  }

  return (
    <div
    className="absolute top-1/2 right-5 w-[300px] h-[80vh] text-white bg-[#2f3134] rounded-lg p-10 transform -translate-y-1/2"
    >
      <div className="flex justify-end">
        <FaTimes className="cursor-pointer" size={20} onClick={handleClose} />
      </div>
      <h2>{data.name}</h2>
      <p>Position: {data.position.x}, {data.position.y}, {data.position.z}</p>
      {/* Add more information about the satellite here */}
    </div>
  );
};

export default Dashboard
