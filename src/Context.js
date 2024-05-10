
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartData, setCartData] = useState([]);
//  const [showCart, setShowCart] = useState(false);

//   const [cartCount, setCartCount] = useState(0);
//   const [selectedProducts, setSelectedProducts] = useState([]);
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
//       setCartCount(cartCount + 1);
     
//     }

//     if (!selectedProducts.find((product) => product.id === item.id)) {
//       setSelectedProducts([...selectedProducts, item]);
//     }
   
//      // Update cart count
//   };
//   const removeFromCart = (itemId) => {
//     const updatedCart = cartData.filter((item) => item.id !== itemId);
//     setCartData(updatedCart);

//     // Update the cart count
//     const newCartCount = updatedCart.reduce(
//       (count, product) => count + product.quantity,
//       0
//     );
//     setCartCount(newCartCount);
//   };

//     const navigateToHome = () => {
//     setShowCart(true); // Hide the cart product details
//   };

//   // Other cart-related functions

//   return (
//     <CartContext.Provider
//       value={{
//         cartData,
//         cartCount,
//         addToCart,
//         navigateToHome,
//         setCartCount,
//         showCart,
//         removeFromCart
       
//         // Add other cart-related values/functions here
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

// ...

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    const existingItem = cartData.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartData.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartData(updatedCart);
    } else {
      setCartData([...cartData, { ...item, quantity: 1 }]);
      setCartCount(cartCount + 1);
    }

    if (!selectedProducts.find((product) => product.id === item.id)) {
      setSelectedProducts([...selectedProducts, item]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCart);

    // Update the cart count
    const newCartCount = updatedCart.reduce(
      (count, product) => count + product.quantity,0
    );
    setCartCount(newCartCount);

    // Remove the product from selectedProducts
    const updatedSelectedProducts = selectedProducts.filter(
      (product) => product.id !== itemId
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const navigateToHome = () => {
    setShowCart(true); // Hide the cart product details
  };

  // Other cart-related functions

  return (
    <CartContext.Provider
      value={{
        cartData,
        cartCount,
        addToCart,
        navigateToHome,
        setCartCount,
        showCart,
        removeFromCart,
        selectedProducts,
        // Add other cart-related values/functions here
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
