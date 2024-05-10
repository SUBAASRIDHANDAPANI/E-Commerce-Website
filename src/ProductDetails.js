// import React, { useState } from "react";

// const ProductDetails = ({ products, navigateToHome }) => {
//   const [cartCount, setCartCount] = useState(0);

//   // Calculate the total price and update cart count
//   const totalAmount = products.reduce(
//     (total, product) => total + product.quantity * product.price,
//     0
//   );

//   // Function to decrement item quantity
//   const handleDecrement = (product) => {
//     if (product.quantity > 1) {
//       product.quantity--;
//       setCartCount(cartCount - 1);
//     }
//   };

//   // Function to increment item quantity
//   const handleIncrement = (product) => {
//     product.quantity++;
//     setCartCount(cartCount + 1);
//   };

//   return (
//     <div>
//       <h4>Cart Details</h4>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>Category: {product.category}</p>
//           <p>Price: ${product.price}</p>
//           <img
//             style={{
//               height: "200px",
//               width: "150px",
//             }}
//             src={product.image}
//             alt={product.title}
//           />
//           <p>Total Price: ${product.quantity * product.price}</p>
//           <span>
//             <button onClick={() => handleDecrement(product)}>-</button>
//             <span>Quantity: {product.quantity}</span>
//             <button onClick={() => handleIncrement(product)}>+</button>
//           </span>
//         </div>
//       ))}
//       <p>Grand Total: ${totalAmount}</p>
//       <button onClick={navigateToHome}>Back to Home</button>
//     </div>
//   );
// };

// export default ProductDetails;
// import React from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { useCart } from "./Context"; // Import the useCart hook
// import { useNavigate } from "react-router-dom";

// const ProductDetails = () => {
//   const navigate = useNavigate();
//   const { cartData, removeFromCart, setCartData, setCartCount } = useCart(); // Use the cart-related values and functions from the context

//   // Calculate the total price of items in the cart
//   const totalPrice = cartData.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0
//   );

//   const handleDecrement = (product) => {
//     if (product.quantity > 1) {
//       setCartCount(product.quantity--);
     
//     }
//   };

//   // Function to increment item quantity
//   const handleIncrement = (product) => {
//     setCartCount(product.quantity++);
//     ; // Update the cart data in the context
//   };

//   // const updateCart = (updatedProduct) => {
//   //   // Create a new cartData array with updated product quantity
//   //   const updatedCartData = cartData.map((product) =>
//   //     product.id === updatedProduct.id ? updatedProduct : product
//   //   );

//   //   // Update the cart data in the context using setCartData
//   //   setCartData(updatedCartData);

//   //   // Calculate and set the new cart count
//   //   const newCartCount = updatedCartData.reduce(
//   //     (count, product) => count + product.quantity,
//   //     0
//   //   );
    
//   //   // Update the cart count in the context using setCartCount
//   //   setCartCount(newCartCount);
//   // };

//   return (
//     <div className="product-details-container">
//       <div className="product-details-header">
//         <FaArrowLeft
//           size={25}
//           onClick={() => {
//             navigate("/");
//           }}
//         />
//         <h2>Cart</h2>
//       </div>
//       <span className="product-details">
//         {cartData.map((product) => (
//           <span key={product.id} className="product-detail">
//             <h3>{product.title}</h3>
//             <p>Category: {product.category}</p>
//             <p>Price: ${product.price}</p>
//             <img
//               style={{
//                 height: "200px",
//                 width: "150px",
//               }}
//               src={product.image}
//               alt=""
//             />
//             <div>
//               <button onClick={() => handleDecrement(product)}>-</button>
//               <span>Quantity: {product.quantity}</span>
//               <button onClick={() => handleIncrement(product)}>+</button>
//               <button onClick={() => removeFromCart(product.id)}>Remove</button>
//             </div>
//             <p>Total Price: ${product.price * product.quantity}</p>
//           </span>
//         ))}
//       </span>
//       <div className="total-price">
//         <h3>Total Price: ${totalPrice}</h3>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


// // import React from 'react';
// // const ProductDetails=()=>{
// //   return(
// //     <h2>hello</h2>
// //   )
// // }
// // export  default ProductDetails;

// // import React from 'react';

// // const ProductDetails = ({ products }) => {
// //   if (!Array.isArray(products)) {
// //     return(<h2>NULL</h2>)
// //     ; // Return nothing if products is not an array
// //   }

// //   return (
// //     <div>
// //       <h2>Cart Products</h2>
// //       <ul>
// //         {products.map((product) => (
// //           <li key={product.id}>
// //             <h3>{product.title}</h3>
// //             <p>Category: {product.category}</p>
// //             <p>Price: ${product.price}</p>
// //             <p>Quantity: {product.quantity}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ProductDetails;

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useCart } from "./Context";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { cartData, removeFromCart, setCartCount } = useCart();

  const totalPrice = cartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      setCartCount(product.quantity--);
    }
  };

  const handleIncrement = (product) => {
    setCartCount(product.quantity++);
  };

  return (
    
    <div className="product-details-container">
      <div className="product-details-header">
        <FaArrowLeft
          size={25}
          onClick={() => {
            navigate("/");
          }}
        />

        <h2>Products Lists</h2>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Image</TableCell> {/* Add Image Column */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDecrement(product)}>-</Button>
                  {product.quantity}
                  <Button onClick={() => handleIncrement(product)}>+</Button>
                </TableCell>
                <TableCell>${product.price * product.quantity}</TableCell>
                <TableCell>
                  <img
                    src={product.image} // Add the image source
                    alt={product.title} // Add alt text for accessibility
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="total-price">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
