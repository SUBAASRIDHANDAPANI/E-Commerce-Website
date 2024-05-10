// // import React, { useState } from "react";
// // import "./styles.scss";
// // import Fetch from "./apiFetcedData";




// // const Choose = ({lists}) => {
// //   const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
// //   const [displayMode, setDisplayMode] = useState("grid"); // Track display mode

// //   const handleButtonClick = (category) => {
// //     // Set the selected category when a button is clicked
// //     if (category === "All") {
// //       setSelectedCategory();
// //     } else {
// //       setSelectedCategory(category);
// //     }
// //   };

// //   const handleViewChange = (mode) => {
// //     // Set the display mode when "List" or "Grid" is clicked
// //     setDisplayMode(mode);
// //   };

// //   return (
// //     <div className="container">
     

// //       <div className="main-grid">
// //         <div className="choose">
// //           <div className="choose1">
// //             <div>
// //            <span>Product   </span>
// //            <input type="search" placeholder="search"></input>
// //            </div>
// //             <div className="displayPositon">
// //                 <button>
// //                 <button onClick={() => handleViewChange("list")}>List</button>
// //               <button onClick={() => handleViewChange("grid")}>Grid</button>
// //                 </button>
              
// //             </div>
// //           </div>
// //         </div>
// //         <div className="categoryDisplay">
// //           <Fetch  displayMode={displayMode} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Choose;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./styles.scss";

// const Choose = ({ fi }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [displayMode, setDisplayMode] = useState("grid");
//   const [selectedSort, setSelectedSort] = useState("default");
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         let filteredData = res.data;

//         if (selectedCategory === "All") {
//           setSelectedCategory(null);
//         }

//         if (selectedCategory) {
//           filteredData = filteredData.filter((item) =>
//             item.category === selectedCategory
//           );
//         }

//         if (selectedSort === "hightolow") {
//           filteredData.sort((a, b) => b.price - a.price);
//         } else if (selectedSort === "lowtohigh") {
//           filteredData.sort((a, b) => a.price - b.price);
//         }

//         setData(filteredData);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [selectedCategory, selectedSort]);

//   const handleViewChange = (mode) => {
//     setDisplayMode(mode);
//   };

//   return (
//     <div className="container">
//       <div className="main-grid">
//         <div className="choose">
//           <div className="choose1">
//             <div>
//               <span>Product </span>
//               <input type="search" placeholder="search"></input>
//             </div>
//             <div className="displayPositon">
//               <button>
//                 <button onClick={() => handleViewChange("list")}>List</button>
//                 <button onClick={() => handleViewChange("grid")}>Grid</button>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className={`fetch-container${displayMode}`}>
//           {data.map((ele, index) => (
//             <div className={`outerdisplay${displayMode}`} key={index}>
//               <div className={`display${displayMode}`}>
//                 <img
//                   className={`imageproduct${displayMode}`}
//                   src={ele.image}
//                   alt=""
//                 />
//               </div>
//               <div className={`innerdisplay${displayMode}`}>
//                 <h5 id="title">{ele.title}</h5>
//                 <p id="category">{ele.category}</p>
//                 <p id="amount">{ele.price}</p>
//                 <button>Add To Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Choose;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./styles.scss";

// const Choose = ({filteredData}) => {
//   const [displayMode, setDisplayMode] = useState("grid");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         const fetchedData = res.data;
//         setData(fetchedData);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [filteredData]);

//   const handleViewChange = (mode) => {
//     setDisplayMode(mode);
//   };

//   return (
//     <div className="container">
//       <div className="main-grid">
//         <div className="choose">
//           <div className="choose1">
//             <div>
//               <span>Product </span>
//               <input type="search" placeholder="search" />
//             </div>
//             <div className="displayPositon">
//               <button>
//                 <button onClick={() => handleViewChange("list")}>List</button>
//                 <button onClick={() => handleViewChange("grid")}>Grid</button>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className={`fetch-container${displayMode}`}>
//           {data.map((ele, index) => (
//             <div className={`outerdisplay${displayMode}`} key={index}>
//               <div className={`display${displayMode}`}>
//                 <img
//                   className={`imageproduct${displayMode}`}
//                   src={ele.image}
//                   alt=""
//                 />
//               </div>
//               <div className={`innerdisplay${displayMode}`}>
//                 <h5 id="title">{ele.title}</h5>
//                 <p id="category">{ele.category}</p>
//                 <p id="amount">{ele.price}</p>
//                 <button>Add To Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Choose;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./styles.scss";
// import {FaShoppingCart}from "react-icons/fa"
// import { useNavigate } from "react-router-dom";
// import Cart from "./Cart";

// const Choose = ({ filteredData }) => {
//   const Navigate=useNavigate();
//   const [displayMode, setDisplayMode] = useState("grid");
//   const [data, setData] = useState([]);
//   const [initialData, setInitialData] = useState([]);
//    // Store the initial data
//    const [searchQuery, setSearchQuery] = useState("");
//    const[setCart,setCartChanges]=useState(false);
 

//   useEffect(() => {
//     // Check if filteredData is available; if not, use the initial data
//     const dataToDisplay = filteredData.length > 0 ? filteredData : initialData;
//     const searchData = dataToDisplay.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()));
//     setData(searchData);
//   }, [filteredData, initialData,displayMode,searchQuery]);

//   useEffect(() => {
//     // Fetch initial data
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setData(apiData);
//         setInitialData(apiData); // Store the initial data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleViewChange = (mode) => {
//     setDisplayMode(mode);
//   };
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };
//   return (
//     <div className="container">
//       <div className="main-grid">
//         <div className="choose">
//           <div className="choose1">
//             <div class="productSearchCart">
//               <span id="product" >Product </span>
//               <input id="searchTextBox" type="search" placeholder="search" 
//               value={searchQuery}
//               onChange={handleSearchChange}/>
//               <span id="cartIcon"><FaShoppingCart size={25}  onClick={()=>{setCartChanges(true);Navigate("Cart.detail")}} />
//               <span id="cartCount"></span></span>
              
//           </div>
         
//             <div className="displayPositon">
           
//                 <button onClick={() => handleViewChange("list")}>List</button>
//                 <button onClick={() => handleViewChange("grid")}>Grid</button>
             
         
//             </div>
            
//           </div>
//         </div>
//         <div className="maincontainer">
//           <div className={`fetch-container${displayMode}`}>
//             {data.map((ele, index) => (
//               <div className={`outerdisplay${displayMode}`} key={index}>
//                 <div className={`display${displayMode}`}>
//                   <img
//                     className={`imageproduct${displayMode}`}
//                     src={ele.image}
//                     alt=""
//                   />
//                 </div>
//                 <div className={`innerdisplay${displayMode}`}>
//                   <h5 id="title">{ele.title}</h5>
//                   <p id="category">{ele.category}</p>
//                   <p id="amount">${ele.price}</p>
//                   <button>Add To Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {setCart && <Cart />}
//     </div>
//   );
// };

// export default Choose;



// Choose.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./styles.scss";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import ProductDetails from "./ProductDetails";

// const Choose = ({ filteredData }) => {
//   const Navigate = useNavigate();

//   // State variables
//   const [displayMode, setDisplayMode] = useState("grid");
//   const [data, setData] = useState([]);
//   const [initialData, setInitialData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cartData, setCartData] = useState([]);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCart, setShowCart] = useState(false);

//   // Fetch initial data from the API
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setData(apiData);
//         setInitialData(apiData);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   // Update displayed data when search query or filteredData changes
//   useEffect(() => {
//     const dataToDisplay = filteredData.length > 0 ? filteredData : initialData;
//     const searchData = dataToDisplay.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setData(searchData);
//   }, [filteredData, initialData, displayMode, searchQuery]);

//   // Add an item to the cart
//   const addToCart = (item) => {
//     const existingItem = cartData.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       const updatedCart = cartData.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//       setCartData(updatedCart);
//     } else {
//       setCartData([...cartData, { ...item, quantity: 1 }]);
//     }

//     if (!selectedProducts.find((product) => product.id === item.id)) {
//       setSelectedProducts([...selectedProducts, item]);
//     }

//     setCartCount(cartCount + 1); // Update cart count
//   };

//   const handleViewChange = (mode) => {
//     setDisplayMode(mode);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };



//   const navigateToCart = () => {
//     setShowCart(true);
//     Navigate("/product");  // Show the cart product details
//   };

//   const navigateToHome = () => {
//     setShowCart(false); // Hide the cart product details
//   };

//   return (
//     <div className="container">
//       <div className="main-grid">
//         <div className="choose">
//           <div className="choose1">
//             <div className="productSearchCart">
//               <span id="product">Product</span>
//               <input
//                 id="searchTextBox"
//                 type="search"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//               />
//               <span id="cartIcon">
//                 <FaShoppingCart size={25} onClick={navigateToCart} />
//                 <span id="cartCount">{cartCount}</span>
//               </span>
//             </div>
//             <div className="displayPositon">
//               <button onClick={() => handleViewChange("list")}>List</button>
//               <button onClick={() => handleViewChange("grid")}>Grid</button>
//             </div>
//           </div>
//         </div>
//         <div className="maincontainer">
//           <div className={`fetch-container${displayMode}`}>
//             {data.map((ele, index) => (
//               <div className={`outerdisplay${displayMode}`} key={index}>
//                 <div className={`display${displayMode}`}>
//                   <img
//                     className={`imageproduct${displayMode}`}
//                     src={ele.image}
//                     alt=""
//                   />
//                 </div>
//                 <div className={`innerdisplay${displayMode}`}>
//                   <h5 id="title">{ele.title}</h5>
//                   <p id="category">{ele.category}</p>
//                   <p id="amount">${ele.price}</p>
//                   <button onClick={() => addToCart(ele)}>Add To Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {showCart ? (
//         <ProductDetails
//           products={cartData}
//           navigateToHome={navigateToHome}
//         />
//       ) : null}
//     </div>
//   );
// };

// export default Choose;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./Context";
// import Tooltip from "@mui/material/Tooltip";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardMedia,
//   CardContent,
//   InputAdornment,
//   Box,
// } from "@mui/material";

// const Choose = ({ filteredData }) => {
//   const Navigate = useNavigate();
//   const { cartCount, addToCart } = useCart();

//   const [displayMode, setDisplayMode] = useState("grid");
//   const [data, setData] = useState([]);
//   const [initialData, setInitialData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         const apiData = response.data;
//         setData(apiData);
//         setInitialData(apiData);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   useEffect(() => {
//     const dataToDisplay = filteredData.length > 0 ? filteredData : initialData;
//     const searchData = dataToDisplay.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setData(searchData);
//   }, [filteredData, initialData, displayMode, searchQuery]);

//   const handleViewChange = (mode) => {
//     setDisplayMode(mode);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const navigateToCart = () => {
//     Navigate("product");
//   };

//   return (
//     <Container maxWidth="lg" style={{ padding: "16px" }}>
//         <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
     
//         <Box display="flex" alignItems="center" flexGrow={1}>
//           <TextField
//             id="searchTextBox"
//             variant="outlined"
//             placeholder="Search"
//             style={{ width: "700px" }} 
//             value={searchQuery}
//             onChange={handleSearchChange}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <Tooltip title="Add to cart" placement="top" arrow>
//                     <FaShoppingCart
//                       size={25}
//                       style={{ cursor: "pointer" }}
//                       onClick={navigateToCart}
//                     />
//                   </Tooltip>
//                   <Typography variant="h6">{cartCount}</Typography>
//                 </InputAdornment>
//               ),
//             }}
//           />
        
   
   
   
        
        
//           < Button onClick={() => handleViewChange("list")}>List</Button>
//           <Button onClick={() => handleViewChange("grid")}>Grid</Button>
       
//       </Box>
//       </Box>
//       <div className="maincontainer">
//           <div className={`fetch-container${displayMode}`}>
//             {data.map((ele, index) => (
//               <div className={`outerdisplay${displayMode}`} key={index}>
//                 <div className={`display${displayMode}`}>
//                   <img
//                     className={`imageproduct${displayMode}`}
//                     src={ele.image}
//                     alt=""
//                   />
//                 </div>
//                 <div className={`innerdisplay${displayMode}`}>
//                   <h5 id="title">{ele.title}</h5>
//                   <p id="category">{ele.category}</p>
//                   <p id="amount">${ele.price}</p>
//                   <button onClick={() => addToCart(ele)}>Add To Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           </div>
      
//     </Container>
//   );
// };

// export default Choose;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Context";
import Tooltip from "@mui/material/Tooltip";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  InputAdornment,
  Box,
} from "@mui/material";

const Choose = ({ filteredData }) => {
  const Navigate = useNavigate();
  const { cartCount, addToCart, selectedProducts } = useCart();

  const [displayMode, setDisplayMode] = useState("grid");
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const apiData = response.data;
        setData(apiData);
        setInitialData(apiData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const dataToDisplay = filteredData.length > 0 ? filteredData : initialData;
    const searchData = dataToDisplay.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(searchData);
  }, [filteredData, initialData, displayMode, searchQuery]);

  const handleViewChange = (mode) => {
    setDisplayMode(mode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const navigateToCart = () => {
    Navigate("product");
  };

  return (
    <Container maxWidth="lg" minWidth="xs" style={{ padding: "16px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box flexGrow={1}>
          <Typography variant="h4">Product</Typography>
        </Box>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <TextField
            id="searchTextBox"
            variant="outlined"
            placeholder="Search"
            style={{ width: "700px" }}
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Add to cart" placement="top" arrow>
                    {cartCount!==0?
                    <FaShoppingCart
                      size={25}
                      
                      style={{ cursor: "pointer" }}
                      onClick={navigateToCart}
                    />:<FaShoppingCart
                    size={25}
                    
                    style={{ cursor: "pointer" }}
                 
                  />}
                  </Tooltip>
                  {cartCount !==0 ?<Typography variant="h6">{cartCount}</Typography>:<Typography variant="h6">{}</Typography>}
                </InputAdornment>
              ),
            }}
          />

          <Button style={{ marginRight: "8px", marginLeft:"8px", background:"green" }} onClick={() => handleViewChange("list")} variant="contained">List</Button>
          <Button style={{ marginRight: "8px" ,background:"green"}}onClick={() => handleViewChange("grid")} variant="contained">Grid</Button>
        </Box>
      </Box>
    
      <div className="maincontainer" >
        <div className={`fetch-container${displayMode}`}>
          {data.map((ele, index) => (
            <div className={`outerdisplay${displayMode}`} key={index}>
              <div className={`display${displayMode}`}>
                <img
                  className={`imageproduct${displayMode}`}
                  src={ele.image}
                  alt=""
                />
              </div>
              <div className={`innerdisplay${displayMode}`}>
                <h5 id="title">{ele.title}</h5>
                <p id="category">{ele.category}</p>
                <p id="amount">${ele.price}</p>
                <button
                  onClick={() => addToCart(ele)}
               
                  style={{
                    backgroundColor
                      : "green",
                    color: "white",
                    cursor: "pointer",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                 ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </Container>
  );
};

export default Choose;
