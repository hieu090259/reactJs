import React, { useState }  from 'react'
import './HeaderComponent.scss'
import NavComponent from '../NavComponent/NavComponent.jsx'
import SearchComponent from '../SearchComponent/SearchComponent.jsx'
import LogoComponent from '../LogoComponent/LogoComponent.jsx'
import SubMenu from '../SubMenu/SubMenu.jsx'


const HeaderComponent = (props) => {
  const [openMenu, setOpenMenu]  = useState(true)

  // boolean openMenu = false
  // useState Hook  
  // attribute

 
  const handleClick = (props) =>{
   setOpenMenu(!openMenu)
  }

  // function handleClick(props){
  //   setOpenMenu(!openMenu)
  // }
  
    return (
      <div className="Component row">
        <div className="LogoComponent col-1">
          <LogoComponent handleClick={handleClick} open_Menu={openMenu}/>
        </div>
        <div className="NavComponent col-8">
          <NavComponent/>
        </div>
        <div className="SearchComponent col-2 ">
          <SearchComponent/>
        </div>
        <div className ="">
          <SubMenu openMenu={openMenu}/>
        </div>
        <button className ="btn btn-primary" onClick={() => handleClick()}>ON CLICK</button>
        <div className="IMG" onClick={() => handleClick()}>
          IMG
        </div>
      </div>
    )
  }
  
export default HeaderComponent;
