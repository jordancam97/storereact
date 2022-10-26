import React from "react";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="boxHeader d-flex row justify-content-between align-items-center w-100">
      <div className="h-100"> 
        <img
          className="objectFit h-100"
          src={require("../assets/img/logo512.png")}
          alt=""
        />
      </div>
      <button className="d-flex row boxCart border-radius align-items-center button">
        
        <BsCart4 size={20}/>  
        <div className="boxCart_amount">
          25.50
        </div>
      </button>
    </div>
  );
};

export default Header;
