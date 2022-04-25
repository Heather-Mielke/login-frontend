import React, {useState} from "react";
import {
    NavContainer,
    LogoContainer,
    ButtonContainer,
    NavExtendContainer,
    NavHamburger
} from "./NavStyles"


const Navbar = () => {
    const [extendNav, setExtendNav] = useState(false);
   
   
  return (
   <>
   <NavContainer extendNav={extendNav}>
       <LogoContainer>Coding Challenge</LogoContainer>
       <ButtonContainer>
           <NavHamburger onClick={()=> {setExtendNav((curr) => !curr)}}> {extendNav ? <> &#10005;</> : <> &#8801;</>} </NavHamburger>
       </ButtonContainer>
    {extendNav ?
    <NavExtendContainer>
       
    </NavExtendContainer>
    : ""
    }
   </NavContainer>
   </>
  )
}

export default Navbar;