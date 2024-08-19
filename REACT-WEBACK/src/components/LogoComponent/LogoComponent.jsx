import React from 'react';
import './LogoComponent.scss'; // Import file SCSS để style
// import React, {useState } from "react"



function LogoComponent() {
    return (
      <div className="LogoComponent">
        <div className="logo">
          Logo
        </div>
        <i class="fa-solid fa-bars" id="logoMenu"></i>
      </div>
    );
  }
  
  export default LogoComponent;