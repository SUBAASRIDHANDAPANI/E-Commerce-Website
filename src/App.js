// import React from "react";
// import './styles.scss';
// import Display from "./header";
// import Details from "./wrapperdownmain";


// const App = () => {
  
//   return (
//     <div>
//       <Display />
//       <Details />
//     </div> 
 

//   );
// };
// export default App;
  
// Import necessary components and libraries
import React from "react";
import { Routes, Route} from "react-router-dom";
import Display from "./header";
import Details from "./wrapperdownmain";
import LoginPage from "./LoginPage"; // Create a LoginPage component
import RegisterPage from "./RegisterPage"; // Create a RegisterPage component
import CartDetails from "./CartDetails";
import ProductDetails from "./ProductDetails";
import Allitems from "./allTheItems";
import { CartProvider } from "./Context";

const App = () => {
  return (
   
    <CartProvider>
     <div>
    <Display />
    <Routes>
    
         
          <Route  path="/" element={<Details />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/allitems" element={< Allitems/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={< CartDetails/>}  />
          <Route path="/product" element={<ProductDetails />} />
      
    </Routes>
    </div>
    </CartProvider>
 
  );
};

export default App;
