import React from "react";

const Header = () => {
  return (
    <div className="bg-red boxHeader d-flex row justify-content-between align-items-center w-100">
      <div className="h-100"> 
        <img
          className="objectFit h-100"
          src={require("../assets/img/logo512.png")}
          alt=""
        />
      </div>
      <div className="colorPru">
        hola
      </div>
    </div>
  );
};

export default Header;
