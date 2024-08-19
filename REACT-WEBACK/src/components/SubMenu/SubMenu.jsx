import React, { useState }  from 'react'
import './SubMenu.scss'


const SubMenu = (props) => {
    const {openMenu } = props
    console.log(openMenu)

    return (
      <div className={`${openMenu == true ? 'SubMenu' : 'active'}`}>
        HELLO
      </div>
    )
  }
  
export default SubMenu;

{/* <div className=SubMenu>
    HELLO
</div> */}

{/* <div className=active>
    HELLO
</div> */}

// if(openMenu){
//     active
// }else{

// }