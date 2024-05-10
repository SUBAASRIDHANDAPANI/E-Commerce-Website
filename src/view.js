import React, { useState } from 'react';
import './styles.scss';
import Api from "./apiFetcedData";

const View = () => {
  const [selectedType, setSelectedType] = useState("list"); // Default to "list" mode

  const handleClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="view">
      <button onClick={() => handleClick("list")} value="list">LIST</button>
      <button onClick={() => handleClick("grid")} value="grid">GRID</button>
      <Api selectedType={selectedType} />
    </div>
  );
};

export default View;
