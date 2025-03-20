import { useState } from "react";

const Navigation = ()=>{
  const[menuOpen ,setmenuClose] =useState("false");
    return(
        <nav className="container">
        <div className='logo'>
          <img src="./images/brand_logo.png" alt="logo" />
        </div>
        <div className="menu" onClick={()=>{
          setmenuClose(!menuOpen)
        }} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" :""}>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
        
      </nav>
    );
}

export default Navigation;
