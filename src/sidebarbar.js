// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Fetch from "./fetchData"; // Import your Fetch component

// function MyComponent() {
//   const [keysSet, setKeysSet] = useState([]);
//   const [selectedSort, setSelectedSort] = useState("default"); // State for sorting option

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         const keys = apiData.map((items) => items.category);
//         const uniqueKeys = [...new Set(keys)];
//         setKeysSet(uniqueKeys);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSelectedSort(e.target.value); // Update the selected sorting option
//   };

//   return (
//     <div>
//       <div className="side-grid">
//         {/* ... Your checkboxes for categories ... */}
//         <h4>Sorting Range</h4>
//         <select className="dropdown1" onChange={handleSortChange} value={selectedSort}>
//           <option value="default">Default</option>
//           <option value="hightolow">HIGH--LOW</option>
//           <option value="lowtohigh">LOW--HIGH</option>
//           {/* Add more sorting options as needed */}
//         </select>
//       </div>
//       <Fetch selectedCategory={null} displayMode="" selectedSort={selectedSort} />
//     </div>
//   );
// }

// export default MyComponent;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Fetch from "./fetchData"; // Import your Fetch component

// function MyComponent() {
//   const [keysSet, setKeysSet] = useState([]);
//   const [selectedSort, setSelectedSort] = useState("default"); // State for sorting option

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         const keys = apiData.map((items) => items.category);
//         const uniqueKeys = [...new Set(keys)];
//         setKeysSet(uniqueKeys);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSelectedSort(e.target.value); // Update the selected sorting option
//   };

//   return (
//     <div>
//       <div className="side-grid">
//         {/* ... Your checkboxes for categories ... */}
//         <h4>Sorting Range</h4>
//         <select className="dropdown1" onChange={handleSortChange} value={selectedSort}>
//           <option value="default">Default</option>
//           <option value="hightolow">HIGH--LOW</option>
//           <option value="lowtohigh">LOW--HIGH</option>
//           {/* Add more sorting options as needed */}
//         </select>
//       </div>
//       <Fetch selectedCategory={null} displayMode="" selectedSort={selectedSort} />
//     </div>
//   );
// }

// export default MyComponent;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Fetch from "./fetchData"; // Import your Fetch component

// function MyComponent() {
//   const [apiData, setApiData] = useState([]); // State for API data
//   const [keysSet, setKeysSet] = useState([]);
//   const [selectedSort, setSelectedSort] = useState("default"); // State for sorting option
//   const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories
 
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setApiData(apiData); // Store API data in state
//         const keys = apiData.map((items) => items.category);
//         const uniqueKeys = [...new Set(keys)];
//         setKeysSet(uniqueKeys);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSelectedSort(e.target.value); // Update the selected sorting option
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
    
//     if (selectedCategories.includes(category)) {
//       // Remove category if it's already selected
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       // Add category if it's not selected
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   return (
//     <div>
//       <div className="side-grid">
//         {/* Checkboxes for categories */}
//         <h4>Filter by Categories</h4>
//         {keysSet.map((category) => (
//           <div>
//           <label key={category}>
//             <input
//               type="checkbox"
//               value={category}
//               checked={selectedCategories.includes(category)}
//               onChange={handleCategoryChange}
//             />
//             {category}
//           </label>
//           <button>Apply</button>
//           </div>
//         ))}
//         <h4>Sorting Range</h4>
//         <select className="dropdown1" onChange={handleSortChange} value={selectedSort}>
//           <option value="default">Default</option>
//           <option value="hightolow">HIGH--LOW</option>
//           <option value="lowtohigh">LOW--HIGH</option>
//           {/* Add more sorting options as needed */}
//         </select>
//       </div>
//       <Fetch selectedCategories={selectedCategories} displayMode="" selectedSort={selectedSort} data={apiData} />
//     </div>
//   );
// }

// export default MyComponent;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
//  // Import your Fetch component

// function MyComponent() {
//   const [apiData, setApiData] = useState([]); // State for API data
//   const [keysSet, setKeysSet] = useState([]);
//   const [selectedSort, setSelectedSort] = useState("default"); // State for sorting option
//   const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories
//   const [filteredData, setFilteredData] = useState([]); // State for filtered data

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setApiData(apiData); // Store API data in state
//         const keys = apiData.map((items) => items.category);
//         const uniqueKeys = [...new Set(keys)];
//         setKeysSet(uniqueKeys);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSelectedSort(e.target.value); // Update the selected sorting option
//   };

//   const handleCategoryChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       // Remove category if it's already selected
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       // Add category if it's not selected
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const applyFilter = () => {
//     // Filter data based on selectedCategories
//     const filteredData = apiData.filter((item) =>
//       selectedCategories.includes(item.category)
//     );
//     setFilteredData(filteredData);
//   };

//   // Apply filter when the "Apply" button is clicked
//   useEffect(() => {
//     applyFilter();
//   }, [selectedCategories]);

//   return (
//     <div>
//       <div className="side-grid">
//         {/* Checkboxes for categories */}
//         <h4>Filter by Categories</h4>
//         {keysSet.map((category) => (
//           <div key={category}>
//             <label>
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               {category}
//             </label>
//           </div>
//         ))}
//         <button onClick={applyFilter}>Apply</button>
//         <h4>Sorting Range</h4>
//         <select className="dropdown1" onChange={handleSortChange} value={selectedSort}>
//           <option value="default">Default</option>
//           <option value="hightolow">HIGH--LOW</option>
//           <option value="lowtohigh">LOW--HIGH</option>
//           {/* Add more sorting options as needed */}
//         </select>
//       </div>
   
//     </div>
//   );
// }

// export default MyComponent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // Import your Fetch component

// function MyComponent() {
//   const [apiData, setApiData] = useState([]); // State for API data
//   const [keysSet, setKeysSet] = useState([]);
//   const [selectedSort, setSelectedSort] = useState("default"); // State for sorting option
//   const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories
//   const [filteredData, setFilteredData] = useState([]); // State for filtered data

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setApiData(apiData); // Store API data in state
//         const keys = apiData.map((items) => items.category);
//         const uniqueKeys = [...new Set(keys)];
//         setKeysSet(uniqueKeys);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleSortChange = (e) => {
//     setSelectedSort(e.target.value); // Update the selected sorting option
//   };

//   const handleCategoryChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       // Remove category if it's already selected
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       // Add category if it's not selected
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const applyFilter = () => {
//     // Filter data based on selectedCategories
//     const filteredData = apiData.filter((item) =>
//       selectedCategories.includes(item.category)
//     );
//     setFilteredData(filteredData);
//   };

//   // Apply filter when the "Apply" button is clicked
//   const handleApplyFilter = () => {
//     applyFilter();
//   };

//   // Clear selected categories and filtered results
//   const handleClearFilter = () => {
//     setSelectedCategories([]);
//     setFilteredData([]);
//   };

//   return (
//     <div>
//       <div className="side-grid">
//         {/* Checkboxes for categories */}
//         <h4>Filter by Categories</h4>
//         {keysSet.map((category) => (
//           <div key={category}>
//             <label>
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               {category}
//             </label>
//           </div>
//         ))}
//         <button onClick={handleApplyFilter}>Apply</button>
//         <button onClick={handleClearFilter}>Clear</button> {/* Clear button */}
//         <h4>Sorting Range</h4>
//         <select className="dropdown1" onChange={handleSortChange} value={selectedSort}>
//           <option value="default">Default</option>
//           <option value="hightolow">HIGH--LOW</option>
//           <option value="lowtohigh">LOW--HIGH</option>
//           {/* Add more sorting options as needed */}
//         </select>
//       </div>
   
//       <div className="filtered-results">
//         <h4>Filtered Results</h4>
//         {filteredData.map((item) => (
//           <div key={item.id}>
//             <h5>{item.title}</h5>
//             <p>{item.category}</p>
//             <p>{item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyComponent;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Fetch from "./allTheItems"

// function MyComponent() {
//   const [apiData, setApiData] = useState([]); // State for API data
//   const [keysSet, setKeysSet] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories
//   const [filteredData, setFilteredData] = useState([]); // State for filtered data (category filter)
//   const [priceRange_0_100, setPriceRange_0_100] = useState(false);
//   const [priceRange_100_300, setPriceRange_100_300] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setApiData(apiData); // Store API data in state
//         const keys = apiData.map((items) => items.category);
//         const uniqueKeys = [...new Set(keys)];
//         setKeysSet(uniqueKeys);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleCategoryChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       // Remove category if it's already selected
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       // Add category if it's not selected
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const handlePriceRange_0_100Change = () => {
//     setPriceRange_0_100(!priceRange_0_100);
//   };

//   const handlePriceRange_100_300Change = () => {
//     setPriceRange_100_300(!priceRange_100_300);
//   };

//   const applyFilter = () => {
//     // Filter data based on selectedCategories (category filter)
//     let filteredCategoryData = apiData;

//     if (selectedCategories.length > 0) {
//       filteredCategoryData = apiData.filter((item) =>
//         selectedCategories.includes(item.category)
//       );
//     }

//     // Filter data based on price range (price range filter)
//     let filteredData = filteredCategoryData;

//     if (priceRange_0_100 && priceRange_100_300) {
//       // Show products that fall in both ranges
//       filteredData = filteredCategoryData.filter(
//         (item) =>
//           (item.price >= 0 && item.price <= 100) ||
//           (item.price >= 100 && item.price <= 300)
//       );
//     } else if (priceRange_0_100) {
//       // Show products in the 0-100 range
//       filteredData = filteredCategoryData.filter(
//         (item) => item.price >= 0 && item.price <= 100
//       );
//     } else if (priceRange_100_300) {
//       // Show products in the 100-300 range
//       filteredData = filteredCategoryData.filter(
//         (item) => item.price >= 100 && item.price <= 300
//       );
//     }

//     // Set filtered data state
//     setFilteredData(filteredData);
  
//   };

//   // Apply filter when the "Apply" button is clicked
//   const handleApplyFilter = () => {
//     applyFilter();
//   };

//   // Clear selected categories and filtered results
//   const handleClearFilter = () => {
//     setSelectedCategories([]);
//     setFilteredData([]);
//     setPriceRange_0_100(false);
//     setPriceRange_100_300(false);
//   };

//   return (
//     <div className="fulldisplay">
//       <div className="side-grid">
//         {/* Checkboxes for categories */}
//         <h4>Filter by Categories</h4>
//         {keysSet.map((category) => (
//           <div key={category}>
//             <label>
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               {category}
//             </label>
//           </div>
//         ))}

//         {/* Checkboxes for price ranges */}
//         <h4>Filter by Price Range</h4>
//         <label>
//           <input
//             type="checkbox"
//             checked={priceRange_0_100}
//             onChange={handlePriceRange_0_100Change}
//           />
//           0-100
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={priceRange_100_300}
//             onChange={handlePriceRange_100_300Change}
//           />
//           100-300
//         </label>

//         <button onClick={handleApplyFilter}>Apply</button>
//         <button onClick={handleClearFilter}>Clear</button>
//         {/* Clear button */}
//       </div>
    
//    <div> <Fetch  filteredData={filteredData}/>  </div>
 
//   </div>

//   );
// }

// export default MyComponent;



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import {
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Select,
  MenuItem,
  Container,
  InputLabel,
  FormControl,
  Box
} from "@mui/material";
import Fetch from "./allTheItems";
import { Margin } from "@mui/icons-material";

function YourComponent() {
  const [apiData, setApiData] = useState([]); // State for API data
  const [keysSet, setKeysSet] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); // State for selected categories
  const [filteredData, setFilteredData] = useState([]); // State for filtered data (category filter)
  const [priceRange_0_100, setPriceRange_0_100] = useState(false);
  const [priceRange_100_300, setPriceRange_100_300] = useState(false);
  const [sortBy, setSortBy] = useState(""); // State for sorting option (price or title)
  const [sortOrder, setSortOrder] = useState(""); // State for sorting order (asc or desc)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
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

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove category if it's already selected
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // Add category if it's not selected
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRange_0_100Change = () => {
    setPriceRange_0_100(!priceRange_0_100);
  };

  const handlePriceRange_100_300Change = () => {
    setPriceRange_100_300(!priceRange_100_300);
  };

  const applyFilter = () => {
    // Filter data based on selectedCategories (category filter)
    let filteredCategoryData = apiData;

    if (selectedCategories.length > 0) {
      filteredCategoryData = apiData.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    // Filter data based on price range (price range filter)
    let filteredData = filteredCategoryData;

    if (priceRange_0_100 && priceRange_100_300) {
      // Show products that fall in both ranges
      filteredData = filteredCategoryData.filter(
        (item) =>
          (item.price >= 0 && item.price <= 100) ||
          (item.price >= 100 && item.price <= 300)
      );
    } else if (priceRange_0_100) {
      // Show products in the 0-100 range
      filteredData = filteredCategoryData.filter(
        (item) => item.price >= 10 && item.price <= 100
      );
    } else if (priceRange_100_300) {
      // Show products in the 100-300 range
      filteredData = filteredCategoryData.filter(
        (item) => item.price >= 100 && item.price <= 300
      );
    }

    // Apply sorting based on the selected sorting options
    if (sortBy === "price") {
      if (sortOrder === "asc") {
        filteredData.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        filteredData.sort((a, b) => b.price - a.price);
      }
    } else if (sortBy === "title") {
      if (sortOrder === "asc") {
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOrder === "desc") {
        filteredData.sort((a, b) => b.title.localeCompare(a.title));
      }
    }

    // Set filtered data state
    setFilteredData(filteredData);
  };

  // Apply filter when the "Apply" button is clicked
  const handleApplyFilter = () => {
    applyFilter();
  };

  // Clear selected categories and filtered results
  const handleClearFilter = () => {
    setSelectedCategories([]);
    setFilteredData([]);
    setPriceRange_0_100(false);
    setPriceRange_100_300(false);
  };

  // Handle sorting option change
  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
  };

  // Handle sorting order change
  const handleSortOrderChange = (e) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
  };

  return (
    <div className="fulldisplay">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Paper elevation={3} style={{ padding: "16px",position: "sticky" ,top:"0"}}>
            <Typography variant="h6">Filter by Categories</Typography>
            {keysSet.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                }
                label={category}
              />
            ))}

            <Typography variant="h6">Filter by Price Range</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={priceRange_0_100}
                  onChange={handlePriceRange_0_100Change}
                />
              }
              label="10-100"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={priceRange_100_300}
                  onChange={handlePriceRange_100_300Change}
                />
              }
              label="100-300"
            />

            <Typography variant="h6">Sort By</Typography>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
              <InputLabel id="sort-by-label">Select</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by"
                value={sortBy}
                onChange={handleSortChange}
                label="Sort By"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="title">Title</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h6">Sort Order</Typography>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
              <InputLabel id="sort-order-label">Select</InputLabel>
              <Select
                labelId="sort-order-label"
                id="sort-order"
                value={sortOrder}
                
                onChange={handleSortOrderChange}
                label="Sort Order"
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="asc">Low to High</MenuItem>
                <MenuItem value="desc">High to Low</MenuItem>
              </Select>
            </FormControl>
            <br /><br />
         
            <Button variant="contained" onClick={handleApplyFilter} >
              Apply
            </Button >
  
                        <Button variant="outlined" onClick={handleClearFilter}>
              Clear
            </Button>
            
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
     
            <Fetch filteredData={filteredData} />
 
        </Grid>
      </Grid>
    </div>
  );
}

export default YourComponent;
