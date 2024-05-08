import React, { useState } from "react";

const InfoBar = ({ isVisible, satellitePosition, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed z-10 pr-5">
      <h2>Satellite Coordinates:</h2>
      <p>x: {satellitePosition.x}</p>
      <p>y: {satellitePosition.y}</p>
      <p>z: {satellitePosition.z}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InfoBar;