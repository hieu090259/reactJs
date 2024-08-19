import React from 'react'
import './HeaderComponent.scss'
import NavComponent from '../NavComponent/NavComponent.jsx'
import SearchComponent from '../SearchComponent/SearchComponent.jsx'
import LogoComponent from '../LogoComponent/LogoComponent.jsx'

const HeaderComponent = (props) => {
    
    return (
      <div className="Component row">
        <div className="LogoComponent col-1">
          <LogoComponent/>
        </div>
        <div className="NavComponent col-8">
          <NavComponent/>
        </div>
        <div className="SearchComponent col-2 ">
          <SearchComponent/>
        </div>
      </div>
    )
  }
  
export default HeaderComponent;
