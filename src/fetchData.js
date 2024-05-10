// // Fetch.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './styles.scss'; // Include your styles

// const Fetch = ({ selectedCategory, displayMode, selectedSort }) => {
//   const [data, setData] = useState([]);
//   const [sortedData, setSortedData] = useState([]);

//   useEffect(() => {
//     if (selectedCategory || selectedSort !== "default") {
//       let apiUrl = "https://fakestoreapi.com/products";

//       if (selectedCategory) {
//         apiUrl += `/category/${selectedCategory}`;
//       }

//       axios.get(apiUrl)
//         .then((res) => {
//           let sortedData = res.data;

//           if (selectedSort === "hightolow") {
//             sortedData = setSortedData(sortedData.sort((a, b) => a.price - b.price));
//           } else if (selectedSort === "lowtohigh") {
//             sortedData = setSortedData(sortedData.sort((a, b) => b.price - a.price));
//           }

//           setData(sortedData);
//         })
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [selectedCategory, selectedSort]);

//   return (
//     <div className={`fetch-container${displayMode}`}>
//       {(selectedSort === "default" ? data : sortedData).map((ele, index) => (
//         <div className={`outerdisplay${displayMode}`} key={index}>
//           <div className={`display${displayMode}`}>
//             <img className={`imageproduct${displayMode}`} src={ele.image} alt="" />
//           </div>
//           <div className={`innerdisplay${displayMode}`}>
//             <h5 id="title">{ele.title}</h5>
//             <p id="category">{ele.category}</p>
//             <p id="amount" >{ele.price}</p>
//             <button>Add To Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Fetch;

import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.scss';
import Fetch from "./Fetch"; // Import your Fetch component

function MyComponent() {
  const [apiData, setApiData] = useState([]); // State for API data
  const [keysSet, setKeysSet] = useState([]);
  const [selectedSort, setSelectedSort] = useState("default"); // State for sorting option
  const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories

  useEffect(() => {
    axios
      .get("http://www.last.fm/")
      .then((response) => {
        const apiData = response.data;
        setApiData(apiData); // Store API data in state
        const keys = apiData.map((items) => items.category);
        const uniqueKeys = [...new Set(keys)];
        setKeysSet(uniqueKeys);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value); // Update the selected sorting option
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove category if it's already selected
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // Add category if it's not selected
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <div className="side-grid">
        {/* Checkboxes for categories */}
        <h4>Filter by Categories</h4>
        {keysSet.map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          </div>
        ))}
        <h4>Sorting Range</h4>
        <select className="dropdown1" onChange={handleSortChange} value={selectedSort}>
          <option value="default">Default</option>
          <option value="hightolow">HIGH--LOW</option>
          <option value="lowtohigh">LOW--HIGH</option>
          {/* Add more sorting options as needed */}
        </select>
      </div>
      {/* Pass the selectedCategories, selectedSort, and displayMode props to Fetch */}
      <Fetch selectedCategories={selectedCategories} selectedSort={selectedSort} displayMode="" />
    </div>
  );
}

export default MyComponent;
