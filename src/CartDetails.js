// Cart.js
// CartPage.js
import React from "react";
import ProductDetails from "./ProductDetails";

const CartPage = ({ cartData, selectedProducts }) => {
  return (
    <div>
      <h2>Cart Items</h2>
      {cartData.map((item) => (
        <ProductDetails key={item.id} product={item} />
      ))}
      {/* Add any additional cart-related components here */}
    </div>
  );
};

export default CartPage;
