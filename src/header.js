import React from "react";
import './styles.scss';
import image from "./ecom.png";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "@mui/material"
import { Style } from "@mui/icons-material";
// import View from "./view";
const Display = () => {
  const Navigate=useNavigate()
  return (
          
          <div className="header"  >
            <Tooltip title="go to main page" placement="bottom-end" arrow>
          <span className="logo" onClick={()=>Navigate("/")}>
        
          <img src={image} alt=""></img>
          </span>
          </Tooltip> 
          <span id="brand">ebuy</span>
        
        <span className="logreg">
       
          <button id="login" onClick={()=>Navigate("login")}>LogIn</button>
      
         
          <button id="register"  onClick={()=>Navigate("register")}>Register</button>
         
        
        </span>
          

    </div>
  );
};
export default Display;
