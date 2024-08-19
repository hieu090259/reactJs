import React from 'react';
import './LogoComponent.scss'; // Import file SCSS để style


function LogoComponent(props) {
  const {handleClick, open_Menu} = props;

  console.log(handleClick)
  // console.log("giá trị của state: ", open_Menu)




    return (
      <div className="LogoComponent">
        <div className="logo">
          Logo
        </div>
        <i className="fa-solid fa-bars" id="logoMenu" onClick={() => handleClick()}></i>
      </div>
    );
  }
  
  export default LogoComponent;

