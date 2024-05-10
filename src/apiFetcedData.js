// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './styles.scss';

// const Fetch = ({ selectedCategory, displayMode }) => {
//   const [data, setData] = useState([]);
//   console.log(data);

//   useEffect(() => {
//     if (selectedCategory) {
//       // If "jewelery" is selected, fetch only "jewelery" items
//       axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
//         .then((res) => setData(res.data))
//         .catch((error) => console.error("Error fetching data:", error));
//     } else {
//       // For other categories or "All," fetch all items
//       axios.get("https://fakestoreapi.com/products")
//         .then((res) => setData(res.data))
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [selectedCategory]);

//   return (
//     <div className={`fetch-container${displayMode}`}>
//       {data.map((ele, index) => (
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.scss';

const Fetch = ({ selectedCategories, selectedSort, displayMode}) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // Fetch all items initially
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        let filteredData = res.data;

        // Filter by selected categories
        if (selectedCategories && selectedCategories.length > 0) {
          filteredData = filteredData.filter(item => selectedCategories.includes(item.category));
        }

        // Sort data based on selectedSort
        if (selectedSort === "hightolow") {
          filteredData.sort((a, b) => b.price - a.price);
        } else if (selectedSort === "lowtohigh") {
          filteredData.sort((a, b) => a.price - b.price);
        }

        setData(filteredData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedCategories, selectedSort]);

  return (
    <div className="containerMainPage">
    <div className={`fetch-container${displayMode}`}>
      {data.map((ele, index) => (
        <div className={`outerdisplay${displayMode}`} key={index}>
          <div className={`display${displayMode}`}>
            <img className={`imageproduct${displayMode}`} src={ele.image} alt="" />
          </div>
          <div className={`innerdisplay${displayMode}`}>
            <h5 id="title">{ele.title}</h5>
            <p id="category">{ele.category}</p>
            <p id="amount">{ele.price}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Fetch;
